
// ═══════════════════════════════════════════════════
// MOBILE: Klaviatura ochilish/yopilish deteksiyasi
// ═══════════════════════════════════════════════════
(function(){
  if(!/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) return;
  const THRESHOLD = 150;
  let baseHeight = window.innerHeight;

  // Orientatsiya o'zgarganda base yangilash
  window.addEventListener('orientationchange', function(){
    setTimeout(function(){ baseHeight = window.innerHeight; }, 300);
  });

  window.addEventListener('resize', function(){
    const h = window.innerHeight;
    const diff = baseHeight - h;
    if(diff > THRESHOLD){
      document.body.classList.add('keyboard-open');
      // Faol kontent ko'rinib tursin
      setTimeout(function(){
        // Spelling kataklar
        const spLetters = document.getElementById('sp-letters');
        if(spLetters){ spLetters.scrollIntoView({behavior:'smooth', block:'center'}); return; }
        // Mydict kataklar
        const mydLetters = document.getElementById('myd-sp-letters');
        if(mydLetters){ mydLetters.scrollIntoView({behavior:'smooth', block:'center'}); return; }
        // Fill type
        const ftCard = document.querySelector('.ex-card');
        if(ftCard){ ftCard.scrollIntoView({behavior:'smooth', block:'start'}); }
      }, 200);
    } else {
      document.body.classList.remove('keyboard-open');
    }
  });
})();

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
  makeMic({idle:'bi',recst:'br',rev:'bv',rec:'brec',stop:'bstop',del:'bdel',snd:'bsnd',play:'bplay',tbox:'tb-book',wave:'wv-book',onSend:(text)=>sendBook(text)});
  makeMic({idle:'fi',recst:'fr',rev:'fv',rec:'frec',stop:'fstop',del:'fdel',snd:'fsnd',play:'fplay',tbox:'tb-free',wave:'wv-free',onSend:(text)=>sendFree(text)});
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

let _currentTab='home';
function switchTab(name){
  // Oldingi tabdagi active view ni saqlaymiz
  if(_currentTab==='vocab'){
    ['vv-lessons','vv-test','vv-score'].forEach(id=>{const el=$(id);if(el&&el.style.display!=='none')el.dataset.wasActive='1';});
  }
  if(_currentTab==='spelling'){
    ['sv-lessons','sv-game','sv-score'].forEach(id=>{const el=$(id);if(el&&el.style.display!=='none')el.dataset.wasActive='1';});
  }
  _currentTab=name;
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
    // Tark etgan joyini ko'rsatamiz (agar faol view bo'lsa)
    const activeVoc=['vv-test','vv-score','vv-lessons'].find(id=>{const el=$(id);return el&&el.dataset.wasActive==='1';});
    if(activeVoc){
      ['vv-units','vv-lessons','vv-test','vv-score'].forEach(id=>{const el=$(id);if(el)el.style.display='none';});
      const el=$(activeVoc); if(el){el.style.display='block';delete el.dataset.wasActive;}
    }
    // Agar hech qanday active view yo'q bo'lsa, units ko'rsatamiz
    const anyActive=['vv-lessons','vv-test','vv-score'].some(id=>{const el=$(id);return el&&el.style.display!=='none';});
    if(!anyActive){ const vu=$('vv-units'); if(vu) vu.style.display='block'; }
  }
  if(name==='spelling'){
    const g=$('sunit-grid');
    if(g && g.children.length===0) renderSpellUnits();
    // Tark etgan joyini ko'rsatamiz
    const activeSpell=['sv-game','sv-score','sv-lessons'].find(id=>{const el=$(id);return el&&el.dataset.wasActive==='1';});
    if(activeSpell){
      ['sv-units','sv-lessons','sv-game','sv-score'].forEach(id=>{const el=$(id);if(el)el.style.display='none';});
      const el=$(activeSpell); if(el){el.style.display='flex';delete el.dataset.wasActive;}
    }
    const anyActiveS=['sv-lessons','sv-game','sv-score'].some(id=>{const el=$(id);return el&&el.style.display!=='none';});
    if(!anyActiveS){ const su=$('sv-units'); if(su) su.style.display='block'; }
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
  document.documentElement.style.fontSize = sz+'px';
  document.body.style.fontSize = sz+'px';
  // Panel va karta matnlarini ham yangilash
  document.querySelectorAll('.bubble,.ex-sentence,.vc-word,.sp-uz-word,.opt-btn').forEach(el=>{
    // Font ular o'z CSS dan oladi, bu ularni refresh qiladi
  });
}
document.querySelectorAll('#font-seg button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#font-seg button').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on');
    const sz=parseInt(btn.dataset.v);
    applyFontSize(sz); localStorage.setItem('font_size',sz);
  });
});
(()=>{const fs=parseInt(localStorage.getItem('font_size')||'24');applyFontSize(fs);document.querySelectorAll('#font-seg button').forEach(b=>{b.classList.toggle('on',parseInt(b.dataset.v)===fs);});})();

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
const volApp=document.getElementById('vol-app');
if(volApp){
  volApp.addEventListener('input',e=>{
    S.volume=parseFloat(e.target.value);
    document.getElementById('vol-disp').textContent=Math.round(S.volume*100)+'%';
  });
}

$('save-api-btn').addEventListener('click',()=>{ const g=$('api-app').value.trim(); if(g){S.groqKey=g;localStorage.setItem('speakup_groq_key',g);toast('✅ Groq key saqlandi');} });
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
  if(btn) btn.classList.add('on');
}
function toggleMoreMenu(){
  const m=document.getElementById('more-menu');
  const ov=document.getElementById('more-overlay');
  if(m.classList.contains('open')){
    m.classList.remove('open');
    if(ov) ov.classList.remove('open');
  } else {
    m.classList.add('open');
    if(ov) ov.classList.add('open');
  }
}
function closeMore(){
  const m=document.getElementById('more-menu');
  const ov=document.getElementById('more-overlay');
  if(m) m.classList.remove('open');
  if(ov) ov.classList.remove('open');
}
// More menu tashqarisiga bosish — yopish (legacy)
document.addEventListener('click',function(e){
  const menu=document.getElementById('more-menu');
  if(menu && menu.classList.contains('open') && !menu.contains(e.target)){
    menu.classList.remove('open');
  }
});
// Bottom nav tab bosish
document.querySelectorAll('.bn-item').forEach(tab=>{
  tab.addEventListener('click',()=>{
    switchTab(tab.dataset.tab);
    bnSet(tab.dataset.tab);
  });
});


// ══════════════════════════════════════════════════════
// MY DICT — To'liq modul
// ══════════════════════════════════════════════════════

// Bottom nav more button
// more button (endi yo'q, legacy)
const moreBn=document.querySelector('.bn-item[data-tab="more"]');
if(moreBn) moreBn.addEventListener('click',function(e){ e.stopPropagation(); toggleMoreMenu(); });
