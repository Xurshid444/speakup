
function showMicPermissionError(){
  // Agar mavjud toast bor bo'lsa olib tashlaymiz
  const existing = document.getElementById('mic-perm-toast');
  if(existing) existing.remove();
  
  const div = document.createElement('div');
  div.id = 'mic-perm-toast';
  div.style.cssText = `
    position:fixed;bottom:90px;left:50%;transform:translateX(-50%);
    background:var(--s2);border:1px solid rgba(255,90,90,.4);border-radius:16px;
    padding:14px 20px;z-index:9999;max-width:340px;width:calc(100% - 40px);
    box-shadow:0 8px 32px rgba(0,0,0,.4);animation:fu .3s ease;
  `;
  div.innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px;">
      <span style="font-size:24px;">🎤</span>
      <div>
        <div style="font-size:14px;font-weight:700;color:var(--text);">Mikrofon ruxsati kerak</div>
        <div style="font-size:12px;color:var(--text2);margin-top:2px;">Ovozli mashq uchun ruxsat bering</div>
      </div>
    </div>
    <div style="display:flex;gap:8px;">
      <button onclick="requestMicPermission()" style="flex:1;padding:10px;border-radius:10px;background:linear-gradient(135deg,var(--purple),var(--purple-light));border:none;color:#fff;font-size:13px;font-weight:700;cursor:pointer;font-family:inherit;">
        🔓 Ruxsat berish
      </button>
      <button onclick="document.getElementById('mic-perm-toast').remove()" style="padding:10px 14px;border-radius:10px;background:var(--s3);border:1px solid var(--border);color:var(--text2);font-size:13px;cursor:pointer;font-family:inherit;">
        ✕
      </button>
    </div>
  `;
  document.body.appendChild(div);
  setTimeout(()=>{ if(div.parentNode) div.remove(); }, 8000);
}

async function requestMicPermission(){
  const btn = document.querySelector('#mic-perm-toast button');
  if(btn){ btn.textContent = '⏳ Kutilmoqda...'; btn.disabled = true; }
  try{
    sharedStream = await navigator.mediaDevices.getUserMedia({audio:true});
    const toast_el = document.getElementById('mic-perm-toast');
    if(toast_el) toast_el.remove();
    toast('✅ Mikrofon ulandi!');
  }catch(e){
    // Brauzer settings ga yo'naltirish
    const div = document.getElementById('mic-perm-toast');
    if(div) div.innerHTML = `
      <div style="font-size:13px;color:var(--text);line-height:1.6;">
        <b style="color:var(--red);">❌ Ruxsat rad etildi.</b><br>
        Brauzeringiz manzil satrida 🔒 belgisini bosib, mikrofonga ruxsat bering.
      </div>
      <button onclick="document.getElementById('mic-perm-toast').remove()" style="margin-top:10px;width:100%;padding:9px;border-radius:10px;background:var(--s3);border:1px solid var(--border);color:var(--text2);font-size:13px;cursor:pointer;font-family:inherit;">Yopish</button>
    `;
  }
}
// ════════════════════════════
// STATE & GLOBAL HELPERS
// ════════════════════════════
const S={volume:1.0,groqKey:localStorage.getItem('speakup_groq_key')||'',elKey:'',level:'A1',accent:'en-US',feedbackLang:'uz',speed:1.0,model:'llama-3.3-70b-versatile',elVoice:'21m00Tcm4TlvDq8ikWAM',pickedVoice:null,currentLesson:null,bookHist:[],freeHist:[],vocMode:'uz-en',vocLesson:null,vocWords:[],vocIdx:0,vocScore:0,vocWrong:[]};
const $=id=>document.getElementById(id);
const toast=(m,d=3000)=>{const t=$('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),d);};
const showToast=toast;
const setSt=m=>$('status-txt').textContent=m;
const scrollB=id=>{const e=$(id);if(e)e.scrollTop=e.scrollHeight;};
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function scoreMsg(pct){return pct===100?'🏆 Mukammal natija!':pct>=80?'🎉 Zo\'r!':pct>=60?'👍 Yaxshi!':pct>=40?'💪 Davom eting!':'📚 Yana mashq qiling!';}

// ════════════════════════════
// KEY MODAL
// ════════════════════════════
let _pendingGroqResolve=null;
function openKeyModal(){const m=$('key-modal');m.style.display='flex';const inp=$('api-inp');if(inp){inp.value=S.groqKey||'';setTimeout(()=>inp.focus(),100);}}
function closeKeyModal(){$('key-modal').style.display='none';if(_pendingGroqResolve){_pendingGroqResolve(false);_pendingGroqResolve=null;}}
function waitForKey(){return new Promise(resolve=>{_pendingGroqResolve=resolve;openKeyModal();});}
$('api-inp').addEventListener('keydown',e=>{if(e.key==='Enter')$('key-modal-save').click();});
$('key-modal-save').addEventListener('click',()=>{
  const k=$('api-inp').value.trim();
  if(!k){toast('❌ Key kiriting!');return;}
  S.groqKey=k;localStorage.setItem('speakup_groq_key',k);$('key-modal').style.display='none';
  const ap=$('api-app');if(ap)ap.value=k;
  toast('✅ Groq key saqlandi');
  if(_pendingGroqResolve){_pendingGroqResolve(true);_pendingGroqResolve=null;}
});

// ════════════════════════════
// GROQ API
// ════════════════════════════
async function groq(sys,msgs){
  if(!S.groqKey){const ok=await waitForKey();if(!ok)throw new Error('API key kiritilmadi');}
  setSt("AI o'ylayapti...");
  const r=await fetch('https://api.groq.com/openai/v1/chat/completions',{
    method:'POST',headers:{'Authorization':`Bearer ${S.groqKey}`,'Content-Type':'application/json'},
    body:JSON.stringify({model:S.model,messages:[{role:'system',content:sys},...msgs],temperature:0.82,max_tokens:600})
  });
  const d=await r.json();if(d.error)throw new Error(d.error.message);
  if(d.usage){trackGroqUsage(d.usage.total_tokens||0);}
  const rl={remain:r.headers.get('x-ratelimit-remaining-tokens'),reset:r.headers.get('x-ratelimit-reset-tokens')};
  if(rl.remain!==null){const el=$('groq-rate-info');if(el)el.textContent=`Rate limit: ${Number(rl.remain).toLocaleString()} token qoldi${rl.reset?' · reset: '+rl.reset:''}`;}
  setSt('Tayyor');return d.choices[0].message.content;
}
function groqUsageKey(type){const d=new Date();return type==='day'?`groq_day_${d.getFullYear()}_${d.getMonth()}_${d.getDate()}`:`groq_mon_${d.getFullYear()}_${d.getMonth()}`;}
function trackGroqUsage(tokens){
  const dk=groqUsageKey('day'),mk=groqUsageKey('mon');
  const dayUsed=(parseInt(localStorage.getItem(dk)||'0'))+tokens;
  const monUsed=(parseInt(localStorage.getItem(mk)||'0'))+tokens;
  localStorage.setItem(dk,dayUsed);localStorage.setItem(mk,monUsed);
  renderGroqUsage();
}
function renderGroqUsage(){
  const dk=groqUsageKey('day'),mk=groqUsageKey('mon');
  const dayUsed=parseInt(localStorage.getItem(dk)||'0'),monUsed=parseInt(localStorage.getItem(mk)||'0');
  const dayLim=parseInt(localStorage.getItem('groq_day_limit')||'14400'),monLim=parseInt(localStorage.getItem('groq_mon_limit')||'500000');
  const dayPct=Math.min(100,Math.round(dayUsed/dayLim*100)),monPct=Math.min(100,Math.round(monUsed/monLim*100));
  const $g=id=>document.getElementById(id);if(!$g('groq-day-val'))return;
  $g('groq-day-val').textContent=dayUsed.toLocaleString();$g('groq-day-limit-lbl').textContent=dayLim.toLocaleString();
  $g('groq-mon-val').textContent=monUsed.toLocaleString();$g('groq-mon-limit-lbl').textContent=monLim.toLocaleString();
  $g('groq-day-limit-inp').value=dayLim;$g('groq-mon-limit-inp').value=monLim;
  const hsEl=document.getElementById('hs-tokens');if(hsEl)hsEl.textContent=dayUsed>999?(dayUsed/1000).toFixed(1)+'K':String(dayUsed||0);
  const hsLevel=document.getElementById('hs-level');if(hsLevel)hsLevel.textContent=S.level||'A1';
  const dayBar=$g('groq-day-bar');if(dayBar){dayBar.style.width=dayPct+'%';dayBar.style.background=dayPct>90?'var(--red)':dayPct>70?'var(--gold)':'var(--accent)';}
  const monBar=$g('groq-mon-bar');if(monBar){monBar.style.width=monPct+'%';monBar.style.background=monPct>90?'var(--red)':monPct>70?'var(--gold)':'var(--blue)';}
}

// ════════════════════════════
// TTS
// ════════════════════════════
function updateTtsIndicator(){$('tts-indicator').textContent=S.elKey?'🎙 ElevenLabs TTS':'🔊 Brauzer TTS';}
function initVoicePicker(){
  const pick=$('voice-picker');if(!pick)return;
  const load=()=>{
    const vs=speechSynthesis.getVoices().filter(v=>v.lang.startsWith('en'));
    pick.innerHTML='';
    vs.forEach(v=>{const o=document.createElement('option');o.value=v.name;o.textContent=`${v.name} (${v.lang})`;pick.appendChild(o);});
    const saved=localStorage.getItem('speakup_picked_voice');
    if(saved){pick.value=saved;S.pickedVoice=vs.find(v=>v.name===saved)||null;}
  };
  load();speechSynthesis.onvoiceschanged=load;
  pick.addEventListener('change',()=>{localStorage.setItem('speakup_picked_voice',pick.value);S.pickedVoice=speechSynthesis.getVoices().find(v=>v.name===pick.value)||null;});
  const savedV=localStorage.getItem('speakup_picked_voice');
  if(savedV)S.pickedVoice=speechSynthesis.getVoices().find(v=>v.name===savedV)||null;
}
async function loadElInfo(){
  if(!S.elKey)return;
  try{
    const r=await fetch('https://api.elevenlabs.io/v1/user/subscription',{headers:{'xi-api-key':S.elKey}});
    const d=await r.json();if(d.character_limit){
      const used=d.character_count||0,total=d.character_limit,pct=Math.round(used/total*100);
      $('el-limit-wrap').style.display='block';$('el-limit-txt').textContent=`${used.toLocaleString()} / ${total.toLocaleString()}`;
      const fill=$('el-limit-fill');fill.style.width=pct+'%';fill.style.background=pct>90?'var(--red)':pct>70?'var(--gold)':'var(--accent)';
      $('el-status').textContent=`✅ ElevenLabs ulangan · ${pct}% ishlatilgan`;
    }
  }catch(e){$('el-status').textContent='❌ Key tekshirishda xato';}
}
async function loadElVoices(){
  if(!S.elKey)return;
  try{
    const r=await fetch('https://api.elevenlabs.io/v1/voices',{headers:{'xi-api-key':S.elKey}});
    const d=await r.json();const sel=$('el-voice-sel');sel.innerHTML='';
    (d.voices||[]).forEach(v=>{const o=document.createElement('option');o.value=v.voice_id;o.textContent=v.name;sel.appendChild(o);});
    if(S.elVoice)sel.value=S.elVoice;
  }catch(e){}
}
let curAudio=null;
async function speak(text,cb){
  if(S.elKey){
    try{
      setSt('🎙 ElevenLabs...');
      const r=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${S.elVoice}`,{
        method:'POST',headers:{'xi-api-key':S.elKey,'Content-Type':'application/json'},
        body:JSON.stringify({text,model_id:'eleven_turbo_v2',voice_settings:{stability:0.5,similarity_boost:0.75,speed:S.speed}})
      });
      if(!r.ok)throw new Error('EL xato: '+r.status);
      const blob=await r.blob();const url=URL.createObjectURL(blob);
      if(curAudio){curAudio.pause();curAudio=null;}
      curAudio=new Audio(url);curAudio.playbackRate=S.speed;
      curAudio.onended=()=>{setSt('Tayyor');if(cb)cb();};
      curAudio.play();return;
    }catch(e){setSt('Tayyor');}
  }
  browserSpeak(text,cb);
}
function browserSpeak(text,cb){
  window.speechSynthesis.cancel();
  const u=new SpeechSynthesisUtterance(text);
  u.lang=S.accent;u.rate=S.speed;
  u.volume = S.volume !== undefined ? S.volume : 1.0;
  if(S.pickedVoice)u.voice=S.pickedVoice;
  u.onend=()=>{setSt('Tayyor');if(cb)cb();};
  window.speechSynthesis.speak(u);setSt('🔊 Gapirmoqda...');
}
function getQ(text){const lines=text.split('\n').filter(l=>l.trim());for(let i=lines.length-1;i>=0;i--)if(lines[i].includes('?'))return lines[i];return lines[lines.length-1]||text;}

// ════════════════════════════
// MIKROFON
// ════════════════════════════
let sharedStream=null;
async function reqMic(){try{sharedStream=await navigator.mediaDevices.getUserMedia({audio:true});}catch(e){}}
async function getStream(){
  if(sharedStream&&sharedStream.active)return sharedStream;
  sharedStream=await navigator.mediaDevices.getUserMedia({audio:{channelCount:1,sampleRate:16000}});return sharedStream;
}
function makeMic(cfg){
  const idle=$(cfg.idle),recst=$(cfg.recst),rev=$(cfg.rev);
  const recBtn=$(cfg.rec),stopBtn=$(cfg.stop),delBtn=$(cfg.del),sndBtn=$(cfg.snd),playBtn=cfg.play?$(cfg.play):null;
  const tbox=$(cfg.tbox),wave=$(cfg.wave);let mr=null,chunks=[],ablob=null;
  const setStatus=(txt,on=false)=>{if(!tbox)return;tbox.textContent=txt;tbox.classList.toggle('on',on);};
  const showI=()=>{idle.style.display='flex';recst.style.display='none';rev.style.display='none';wave.classList.remove('show');setStatus('Bosib gapiring...',false);};
  const showR=()=>{idle.style.display='none';recst.style.display='flex';rev.style.display='none';wave.classList.add('show');};
  const showV=()=>{idle.style.display='none';recst.style.display='none';rev.style.display='flex';wave.classList.remove('show');if(playBtn){playBtn.onclick=()=>{if(ablob){const u=URL.createObjectURL(ablob);const pa=new Audio(u);pa.play();playBtn.disabled=true;pa.onended=()=>{playBtn.disabled=false;};}};}else if(rev.querySelector('.play-rec-btn')){const pb=rev.querySelector('.play-rec-btn');pb.onclick=()=>{if(ablob){const u=URL.createObjectURL(ablob);const pa=new Audio(u);pa.play();}};}};
  async function startRec(){
    window.speechSynthesis.cancel();if(curAudio){curAudio.pause();curAudio=null;}chunks=[];ablob=null;setStatus('🔴 Yozilmoqda...',true);showR();
    let stream;try{stream=await getStream();}catch(e){showMicPermissionError();showI();return;}
    const fmts=['audio/webm;codecs=opus','audio/webm','audio/ogg;codecs=opus','audio/mp4'];const fmt=fmts.find(f=>MediaRecorder.isTypeSupported(f))||'';
    mr=new MediaRecorder(stream,fmt?{mimeType:fmt}:{});mr.ondataavailable=e=>{if(e.data.size>0)chunks.push(e.data);};
    mr.onstop=()=>{ablob=new Blob(chunks,{type:mr.mimeType||'audio/webm'});setStatus('✅ Yozildi — eshiting yoki yuboring',true);showV();};
    mr.start(250);
  }
  recBtn.addEventListener('click',startRec);stopBtn.addEventListener('click',()=>{if(mr&&mr.state!=='inactive')mr.stop();});
  delBtn.addEventListener('click',()=>{ablob=null;chunks=[];showI();});
  sndBtn.addEventListener('click',async()=>{
    if(!ablob){toast("Ovoz yo'q!");return;}
    if(!S.groqKey){const ok=await waitForKey();if(!ok)return;}
    const b=ablob;ablob=null;chunks=[];setStatus('⏳ Tanilmoqda...',true);showI();
    try{
      const fd=new FormData();const ext=b.type.includes('mp4')?'mp4':b.type.includes('ogg')?'ogg':'webm';const file=new File([b],`a.${ext}`,{type:b.type});
      fd.append('file',file);fd.append('model','whisper-large-v3-turbo');fd.append('language','en');fd.append('response_format','text');
      const r=await fetch('https://api.groq.com/openai/v1/audio/transcriptions',{method:'POST',headers:{'Authorization':`Bearer ${S.groqKey}`},body:fd});
      if(!r.ok){const e=await r.json().catch(()=>({}));throw new Error(e?.error?.message||'Xato: '+r.status);}
      const txt=(await r.text()).trim();showI();
      if(!txt){toast("Hech narsa eshitilmadi");return;}cfg.onSend(txt);
    }catch(e){toast('❌ '+e.message);showI();}
  });
}

// ════════════════════════════
// CHAT MESSAGES
// ════════════════════════════
const TEACHER_M=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5b0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><path d="M15 3.5c1.5.5 2.5 1.8 2.5 3.5"/></svg>`;
const TEACHER_F=`<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#00e5b0" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/><path d="M9.5 4.5C9 5 8.5 6 8.5 7.5"/><path d="M10 3.5C9 4 8 5.5 8 7"/></svg>`;
function teacherAvatar(){return S.accent==='en-GB'?TEACHER_F:TEACHER_M;}
function addMsg(role,text,areaId){
  $(areaId).querySelectorAll('.empty-hint').forEach(e=>e.remove());
  const div=document.createElement('div');div.className=`msg ${role}`;
  const av=document.createElement('div');av.className=`av ${role==='ai'?'a':'u'}`;
  if(role==='ai')av.innerHTML=teacherAvatar();else av.textContent='👤';
  const bub=document.createElement('div');bub.className='bubble';
  if(role==='ai'){
    const idx=text.indexOf('❌');const main=idx>0?text.slice(0,idx).trim():idx===0?'':text;const corr=idx>=0?text.slice(idx).trim():'';
    if(main){const p=document.createElement('div');p.textContent=main;bub.appendChild(p);}
    if(corr){const cb=document.createElement('div');cb.className='corr';cb.innerHTML=`<div class="corr-lbl">🔍 Tuzatish</div>${esc(corr)}`;bub.appendChild(cb);}
    const btns=document.createElement('div');btns.style.cssText='display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;';
    const spk=document.createElement('button');spk.className='action-pill spk-pill';spk.innerHTML='<span>🔊</span> Eshitish';spk.onclick=()=>speak(getQ(text));btns.appendChild(spk);
    const trnBtn=document.createElement('button');trnBtn.className='action-pill trn-pill';trnBtn.innerHTML='<span>🇺🇿</span> Tarjima';
    const trnBox=document.createElement('div');trnBox.className='trn-box';
    let translated=false;
    trnBtn.onclick=async()=>{
      if(trnBox.classList.contains('show')){trnBox.classList.remove('show');trnBtn.innerHTML='🇺🇿 Tarjima';return;}
      if(translated){trnBox.classList.add('show');trnBtn.innerHTML='🙈 Yashirish';return;}
      trnBtn.innerHTML='⏳...';trnBtn.disabled=true;
      try{
        const src=main||(corr||text);
        const r=await groq('Translate the following English text to Uzbek. Return ONLY the Uzbek translation, no explanations.',[{role:'user',content:src}]);
        trnBox.textContent=r.trim();trnBox.classList.add('show');translated=true;trnBtn.innerHTML='🙈 Yashirish';
      }catch(e){trnBox.textContent='Tarjima yuklanmadi';trnBox.classList.add('show');}
      trnBtn.disabled=false;
    };
    btns.appendChild(trnBtn);bub.appendChild(btns);bub.appendChild(trnBox);
  }else{bub.textContent=text;}
  div.appendChild(av);div.appendChild(bub);$(areaId).appendChild(div);scrollB(areaId);
}
function addThink(id){const d=document.createElement('div');d.className='msg ai';d.id='think';d.innerHTML=`<div class="av a">${teacherAvatar()}</div><div class="bubble"><div class="think"><span></span><span></span><span></span></div></div>`;$(id).appendChild(d);scrollB(id);}
function rmThink(){$('think')?.remove();}
