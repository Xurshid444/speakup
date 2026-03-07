// ════════════════════════════
// INIT — Boshlash tugmasi
// ════════════════════════════
$('start-btn').addEventListener('click',()=>{
  $('lvl-badge').textContent=S.level;
  $('setup-screen').classList.remove('active');
  $('app-screen').classList.add('active');
  switchTab('home');
  initVoicePicker();
  reqMic();
  renderBookUnits();
  makeMic({idle:'bi',recst:'br',rev:'bv',rec:'brec',stop:'bstop',del:'bdel',snd:'bsnd',tbox:'tb-book',wave:'wv-book',onSend:(text)=>sendBook(text)});
  makeMic({idle:'fi',recst:'fr',rev:'fv',rec:'frec',stop:'fstop',del:'fdel',snd:'fsnd',tbox:'tb-free',wave:'wv-free',onSend:(text)=>sendFree(text)});
  renderVocUnits();
  renderSpellUnits();
  makeExUnitGrid('mcq-unit-grid',startMcq,'mcq-lessons','mcq-unit-head','mcq-unit-sub','mcq-lesson-list','mcq-units');
  makeExUnitGrid('ft-unit-grid', startFt, 'ft-lessons', 'ft-unit-head', 'ft-unit-sub', 'ft-lesson-list', 'ft-units');
  makeExUnitGrid('wo-unit-grid', startWo, 'wo-lessons', 'wo-unit-head', 'wo-unit-sub', 'wo-lesson-list', 'wo-units');
  bindExNav();
  updateTtsIndicator();
  renderGroqUsage();
  if(S.elKey){ loadElInfo(); setTimeout(loadElVoices,600); }
});

$('logout-btn').addEventListener('click',()=>{ if(confirm('Chiqasizmi?'))location.reload(); });

function switchTab(name){
  document.querySelectorAll('.tab').forEach(t=>t.classList.remove('on'));
  const tBtn=document.querySelector(`.tab[data-tab="${name}"]`);
  if(tBtn) tBtn.classList.add('on');
  ['home','book','vocab','spelling','mcq','filltype','wordorder','free','mydict','settings'].forEach(p=>{
    const el=$(p+'-panel'); if(el) el.classList.toggle('on',p===name);
  });
  // Tab ochilganda unit gridlarni ko'rsatamiz
  if(name==='book'){
    const g=$('unit-grid');
    if(g && g.children.length===0) renderBookUnits();
    // bv-chat yopiq bo'lsa — units ko'rsatamiz
    const bu=$('bv-units'), bl=$('bv-lessons'), bc=$('bv-chat');
    if(bu && bc && bc.style.display==='none' && (!bl || bl.style.display==='none')){
      bu.style.display='block';
    }
  }
  if(name==='vocab'){
    const g=$('vunit-grid');
    if(g && g.children.length===0) renderVocUnits();
    const vu=$('vv-units');
    if(vu) vu.style.display='block';
  }
  if(name==='spelling'){
    const g=$('sunit-grid');
    if(g && g.children.length===0) renderSpellUnits();
    const su=$('sv-units');
    if(su) su.style.display='block';
  }
  if(name==='mydict'){
    // game yopiq, home ko'rinsin
    var mh=$('myd-home'), mg=$('myd-game'), ms=$('myd-score');
    if(mh && mg && ms && mg.style.display!=='block' && ms.style.display!=='block'){
      mh.style.display='block';
    }
    mydRenderPackets();
  }
  window.scrollTo(0,0);
}
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>switchTab(tab.dataset.tab));
});
$('home-logo-btn').addEventListener('click',()=>switchTab('home'));

// ════════════════════════════
// SETTINGS / SOZLAMALAR
// ════════════════════════════
document.querySelectorAll('#theme-seg button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#theme-seg button').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    const t=btn.dataset.v;
    document.body.classList.toggle('light', t==='light');
    localStorage.setItem('theme',t);
    updateThemeIcon(t);
  });
});
function updateThemeIcon(t){
  const moon=document.getElementById('theme-icon-moon');
  const sun=document.getElementById('theme-icon-sun');
  if(moon&&sun){ moon.style.display=t==='light'?'none':'block'; sun.style.display=t==='light'?'block':'none'; }
}
document.getElementById('theme-toggle-btn')?.addEventListener('click',()=>{
  const isLight=document.body.classList.contains('light');
  const newTheme=isLight?'dark':'light';
  document.body.classList.toggle('light',!isLight);
  localStorage.setItem('theme',newTheme);
  updateThemeIcon(newTheme);
  document.querySelectorAll('#theme-seg button').forEach(b=>b.classList.toggle('on',b.dataset.v===newTheme));
});
(()=>{const t=localStorage.getItem('theme')||'dark';if(t==='light'){document.body.classList.add('light');document.querySelectorAll('#theme-seg button').forEach(b=>{b.classList.toggle('on',b.dataset.v===t);});}updateThemeIcon(t);})();

// Font size
function applyFontSize(sz){
  document.documentElement.style.setProperty('--fs-base', sz+'px');
  document.querySelector('.bubble') && document.querySelectorAll('.bubble').forEach(()=>{});
  document.body.style.fontSize=sz+'px';
}
document.querySelectorAll('#font-seg button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#font-seg button').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    const sz=parseInt(btn.dataset.v);
    applyFontSize(sz); localStorage.setItem('font_size',sz);
  });
});
(()=>{const fs=parseInt(localStorage.getItem('font_size')||'16');applyFontSize(fs);document.querySelectorAll('#font-seg button').forEach(b=>{b.classList.toggle('on',parseInt(b.dataset.v)===fs);});})();

$('lvl-app').addEventListener('change',e=>{ S.level=e.target.value; $('lvl-badge').textContent=S.level; });
$('el-voice-sel').addEventListener('change',e=>{ S.elVoice=e.target.value; localStorage.setItem('el_voice',e.target.value); });
document.querySelectorAll('#settings-panel .seg').forEach(seg=>{
  seg.querySelectorAll('button').forEach(btn=>btn.addEventListener('click',()=>{
    seg.querySelectorAll('button').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    if(seg.id==='lang-app') S.feedbackLang=btn.dataset.v;
    if(seg.id==='acc-app')  S.accent=btn.dataset.v;
  }));
});
$('spd-app').addEventListener('input',e=>{ S.speed=parseFloat(e.target.value); $('spd-disp').textContent=S.speed.toFixed(1)+'x'; });

$('save-api-btn').addEventListener('click',()=>{ const g=$('api-app').value.trim(); if(g){S.groqKey=g;toast('✅ Groq key saqlandi');} });
document.addEventListener('DOMContentLoaded',()=>{ renderGroqUsage(); });
document.getElementById('groq-limit-save-btn')?.addEventListener('click',()=>{
  const d=parseInt($('groq-day-limit-inp').value)||14400;
  const m=parseInt($('groq-mon-limit-inp').value)||500000;
  localStorage.setItem('groq_day_limit',d); localStorage.setItem('groq_mon_limit',m);
  renderGroqUsage(); toast('✅ Limit saqlandi');
});
$('save-el-btn').addEventListener('click',async()=>{
  const el=$('el-app').value.trim(); S.elKey=el; localStorage.setItem('el_key',el);
  if(el){ $('el-status').textContent="ElevenLabs ulangan ✅ — 🔄 tugmani bosib ovozlarni yuklang"; await loadElInfo(); loadElVoices(); }
  else { $('el-status').textContent="Key kiritilmagan — brauzer TTS ishlatilmoqda."; $('el-limit-wrap').style.display='none'; }
  updateTtsIndicator();
});

async function loadElInfo(){
  if(!S.elKey) return;
  try{
    const r=await fetch('https://api.elevenlabs.io/v1/user/subscription',{headers:{'xi-api-key':S.elKey}});
    if(!r.ok) return;
    const d=await r.json(); const used=d.character_count||0; const limit=d.character_limit||10000;
    const pct=Math.min(100,Math.round(used/limit*100)); const color = pct>=90?'#ff5a5a':pct>=70?'#ffd166':'#00e5b0';
    $('el-limit-txt').textContent=`${used.toLocaleString()} / ${limit.toLocaleString()} belgi (${pct}%)`;
    $('el-limit-fill').style.width=pct+'%'; $('el-limit-fill').style.background=color; $('el-limit-wrap').style.display='block';
    $('el-status').textContent=pct>=100?"⚠️ ElevenLabs limiti tugagan — brauzer TTS ishlatilmoqda!":`✅ Faol — ${limit-used} belgi qoldi`;
  }catch(e){}
}
async function loadElVoices(){
  if(!S.elKey){ toast("❌ Avval ElevenLabs key kiriting!"); return; }
  const btn=$('el-load-btn'); const sel=$('el-voice-sel'); btn.textContent='⏳'; btn.disabled=true;
  try{
    const r=await fetch('https://api.elevenlabs.io/v1/voices',{headers:{'xi-api-key':S.elKey}});
    if(!r.ok) throw new Error('API xatosi: '+r.status);
    const data=await r.json(); const voices=data.voices||[]; if(!voices.length) throw new Error("Ovozlar topilmadi");
    const myV=voices.filter(v=>v.category!=='premade'); const pre=voices.filter(v=>v.category==='premade');
    sel.innerHTML='<option value="">— Tanlang —</option>';
    if(myV.length){ const g=document.createElement('optgroup');g.label='⭐ Mening ovozlarim';myV.forEach(v=>{const o=document.createElement('option');o.value=v.voice_id;o.textContent=v.name;g.appendChild(o);});sel.appendChild(g); }
    if(pre.length){ const g=document.createElement('optgroup');g.label='🎙 Standart';pre.forEach(v=>{const o=document.createElement('option');o.value=v.voice_id;const d=[v.labels?.gender,v.labels?.accent].filter(Boolean).join(', ');o.textContent=v.name+(d?' ('+d+')':'');g.appendChild(o);});sel.appendChild(g); }
    const saved=localStorage.getItem('el_voice');
    if(saved&&voices.find(v=>v.voice_id===saved)){sel.value=saved;S.elVoice=saved;} else if(!S.elVoice&&voices.length){S.elVoice=voices[0].voice_id;sel.value=S.elVoice;}
    toast("✅ "+voices.length+" ta ovoz yuklandi!");
  }catch(e){ toast('❌ '+e.message); }
  btn.textContent='🔄'; btn.disabled=false;
}
$('el-load-btn').addEventListener('click',loadElVoices);
$('test-el-btn').addEventListener('click',()=>speak("Hello! This is ElevenLabs voice. How do I sound?"));
$('test-br-btn').addEventListener('click',()=>browserSpeak('Hello! This is the browser voice. How does it sound?'));
function updateTtsIndicator(){ $('tts-indicator').textContent = S.elKey ? '🎙 ElevenLabs TTS' : '🔊 Brauzer TTS'; }

(()=>{ const ek=localStorage.getItem('el_key'); if(ek){S.elKey=ek;$('el-app').value=ek;} })();

function initVoicePicker(){
  const VOICE_KEY = 'speakup_picked_voice';
  const build=()=>{
    const sel=$('voice-picker'); if(!sel)return;
    const vv=window.speechSynthesis.getVoices(); const en=vv.filter(v=>v.lang.startsWith('en')); sel.innerHTML='';
    en.forEach(v=>{ const o=document.createElement('option');o.value=v.name;o.textContent=v.name+' ['+v.lang+']';sel.appendChild(o); });

    // 1. localStorage dan saqlangan ovozni yuklaymiz
    const saved = localStorage.getItem(VOICE_KEY);
    let picked = null;
    if(saved) picked = en.find(v=>v.name===saved);

    // 2. Saqlangan yo'q bo'lsa — default yaxshi ovozni tanlaymiz
    if(!picked){
      const want=['Samantha','Karen','Victoria','Moira','Google US English','Google UK English Female','Zira','Tessa','Allison'];
      for(const n of want){ picked=en.find(v=>v.name.includes(n)); if(picked)break; }
    }
    if(!picked) picked=en[0];

    if(picked){
      sel.value=picked.name;
      S.pickedVoice=picked;
      // Yangi default bo'lsa ham saqlaymiz
      if(!saved) localStorage.setItem(VOICE_KEY, picked.name);
    }
  };
  if(window.speechSynthesis.getVoices().length>0)build(); else window.speechSynthesis.addEventListener('voiceschanged',build);
  $('voice-picker').addEventListener('change',e=>{
    const v=window.speechSynthesis.getVoices().find(v=>v.name===e.target.value)||null;
    S.pickedVoice=v;
    // Tanlovni saqlaymiz
    if(v) localStorage.setItem('speakup_picked_voice', v.name);
    else localStorage.removeItem('speakup_picked_voice');
  });
}

// ════════════════════════════
// AI & OVOZ (GROQ & TTS)
// ════════════════════════════
let curAudio=null;
async function speak(text,cb){
  if(!text||!text.trim())return; if(curAudio){curAudio.pause();curAudio.src='';curAudio=null;} window.speechSynthesis.cancel();
  if(S.elKey) {
    try{
      setSt('Ovoz tayyorlanmoqda...');
      const r=await fetch(`https://api.elevenlabs.io/v1/text-to-speech/${S.elVoice}`,{
        method:'POST', headers:{'xi-api-key':S.elKey,'Content-Type':'application/json','Accept':'audio/mpeg'},
        body:JSON.stringify({text,model_id:'eleven_turbo_v2',voice_settings:{stability:0.5,similarity_boost:0.75,speed:S.speed}})
      });
      if(r.ok){
        const blob=await r.blob();
        if(blob.size>500){
          const url=URL.createObjectURL(blob); curAudio=new Audio(url);
          if(cb)curAudio.onended=cb; setSt('Tayyor'); await curAudio.play().catch(()=>{}); return;
        }
      } else {
        const err=await r.json().catch(()=>({}));
        if(err?.detail?.status==='quota_exceeded'){
          toast('⚠️ ElevenLabs limiti tugadi — brauzer TTS ga o\'tildi'); $('el-status').textContent='⚠️ Oylik limit tugagan! Keyingi oyga qadar brauzer TTS ishlatilmoqda.'; $('el-limit-fill').style.width='100%'; $('el-limit-fill').style.background='#ff5a5a';
        } else console.warn('EL error:',err?.detail);
      }
    }catch(e){ console.warn('EL failed:',e.message); }
    setSt('Tayyor');
  }
  browserSpeak(text,cb);
}

function browserSpeak(text,cb){
  const doIt=()=>{
    const vv=window.speechSynthesis.getVoices(); const u=new SpeechSynthesisUtterance(text); u.lang=S.accent; u.rate=S.speed; u.pitch=1.05;
    if(S.pickedVoice){ const v=vv.find(x=>x.name===S.pickedVoice.name); if(v)u.voice=v; }
    if(cb)u.onend=cb; window.speechSynthesis.speak(u);
  };
  if(window.speechSynthesis.getVoices().length===0) window.speechSynthesis.addEventListener('voiceschanged',doIt,{once:true}); else doIt();
}
function getQ(text){ const lines=text.split('\n').filter(l=>l.trim()); for(let i=lines.length-1;i>=0;i--)if(lines[i].includes('?'))return lines[i]; return lines[lines.length-1]||text; }

function bindExNav(){
  $('mcq-back-units').addEventListener('click',()=>{ $('mcq-lessons').style.display='none'; $('mcq-game').style.display='none'; $('mcq-units').style.display='block'; });
  $('mcq-back-lessons').addEventListener('click',()=>{ $('mcq-game').style.display='none'; $('mcq-lessons').style.display='block'; });
  $('mcq-score-back').addEventListener('click',()=>{ $('mcq-score').style.display='none'; $('mcq-units').style.display='block'; });
  $('mcq-retry').addEventListener('click',()=>{ if(MCQ.lessonRef)startMcq(MCQ.lessonRef.ui,MCQ.lessonRef.li); });
  $('ft-back-units').addEventListener('click',()=>{ $('ft-lessons').style.display='none'; $('ft-units').style.display='block'; });
  $('ft-back-lessons').addEventListener('click',()=>{ $('ft-game').style.display='none'; $('ft-lessons').style.display='block'; });
  $('ft-score-back').addEventListener('click',()=>{ $('ft-score').style.display='none'; $('ft-units').style.display='block'; });
  $('ft-retry').addEventListener('click',()=>{ if(FT.lessonRef)startFt(FT.lessonRef.ui,FT.lessonRef.li); });
  $('wo-back-units').addEventListener('click',()=>{ $('wo-lessons').style.display='none'; $('wo-units').style.display='block'; });
  $('wo-back-lessons').addEventListener('click',()=>{ $('wo-game').style.display='none'; $('wo-lessons').style.display='block'; });
  $('wo-done-back').addEventListener('click',()=>{ $('wo-done').style.display='none'; $('wo-units').style.display='block'; });
  $('wo-retry').addEventListener('click',()=>{ if(WO.lessonRef)startWo(WO.lessonRef.ui,WO.lessonRef.li); });
}

// BOTTOM NAV
function bnSet(tab){
  document.querySelectorAll('.bn-item').forEach(b=>b.classList.remove('on'));
  const btn=document.querySelector(`.bn-item[data-tab="${tab}"]`);
  if(btn){ btn.classList.add('on'); }
  else {
    // more menu dagi tab — "Ko'proq" tugmasini yoqamiz
    const moreBtn=document.querySelector('.bn-item[data-tab="more"]');
    if(moreBtn) moreBtn.classList.add('on');
  }
}
function toggleMoreMenu(){
  const m=document.getElementById('more-menu');
  m.classList.toggle('open');
}
function closeMore(){
  document.getElementById('more-menu').classList.remove('open');
}
// More menu tashqarisiga bosish — yopish
document.addEventListener('click',function(e){
  const menu=document.getElementById('more-menu');
  const moreBtn=document.querySelector('.bn-item[data-tab="more"]');
  if(menu && menu.classList.contains('open') && !menu.contains(e.target) && e.target!==moreBtn && !moreBtn.contains(e.target)){
    menu.classList.remove('open');
  }
});
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>bnSet(tab.dataset.tab));
});


// ══════════════════════════════════════════════════════
// MY DICT — To'liq modul
// ══════════════════════════════════════════════════════

// More menu tashqarisiga bosish — yopish
document.addEventListener('click',function(e){
  const menu=document.getElementById('more-menu');
  const moreBtn=document.querySelector('.bn-item[data-tab="more"]');
  if(menu && menu.style.display!=='none' && !menu.contains(e.target) && e.target!==moreBtn && moreBtn && !moreBtn.contains(e.target)){
    menu.style.display='none';
  }
});
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>bnSet(tab.dataset.tab));
});

// Bottom nav more button
const moreBn=document.querySelector('.bn-item[data-tab="more"]');
if(moreBn) moreBn.addEventListener('click',toggleMoreMenu);
