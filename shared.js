const S={groqKey:'',elKey:'',level:'A1',accent:'en-US',feedbackLang:'uz',speed:1.0,model:'llama-3.3-70b-versatile',elVoice:'21m00Tcm4TlvDq8ikWAM',pickedVoice:null,currentLesson:null,bookHist:[],freeHist:[],vocMode:'uz-en',vocLesson:null,vocWords:[],vocIdx:0,vocScore:0,vocWrong:[]};
const $=id=>document.getElementById(id);
const toast=(m,d=3000)=>{const t=$('toast');t.textContent=m;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),d);};
const setSt=m=>$('status-txt').textContent=m;
const scrollB=id=>{const e=$(id);if(e)e.scrollTop=e.scrollHeight;};
const esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
function scoreMsg(pct){return pct===100?'🏆 Mukammal natija!':pct>=80?'🎉 Zo\'r!':pct>=60?'👍 Yaxshi!':pct>=40?'💪 Davom eting!':'📚 Yana mashq qiling!';}

// ════════════════════════════
// INIT VA BINDINGS (KIRISH QISMI UCHUN)
// ════════════════════════════
// KEY MODAL
let _pendingGroqResolve=null;
function openKeyModal(){
  const m=$('key-modal'); m.style.display='flex';
  setTimeout(()=>$('api-inp').focus(),100);
}
function closeKeyModal(){
  $('key-modal').style.display='none';
  if(_pendingGroqResolve){_pendingGroqResolve(false);_pendingGroqResolve=null;}
}
function waitForKey(){
  return new Promise(resolve=>{
    _pendingGroqResolve=resolve; openKeyModal();
  });
}
$('api-inp').addEventListener('keydown',e=>{if(e.key==='Enter')$('key-modal-save').click();});
$('key-modal-save').addEventListener('click',()=>{
  const k=$('api-inp').value.trim();
  if(!k){toast('❌ Key kiriting!');return;}
  S.groqKey=k; $('key-modal').style.display='none';
  // Settings dagi key maydonini ham yangilaymiz
  const ap=$('api-app'); if(ap) ap.value=k;
  toast('✅ Groq key saqlandi');
  if(_pendingGroqResolve){_pendingGroqResolve(true);_pendingGroqResolve=null;}
});

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
  ['home','book','vocab','spelling','mcq','filltype','wordorder','free','settings'].forEach(p=>{
    const el=$(p+'-panel'); if(el) el.classList.toggle('on',p===name);
  });
}
document.querySelectorAll('.tab').forEach(tab=>{
  tab.addEventListener('click',()=>switchTab(tab.dataset.tab));
});
$('home-logo-btn').addEventListener('click',()=>switchTab('home'));