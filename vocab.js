function renderVocUnits(){
  const grid=$('vunit-grid'); grid.innerHTML='';
  BOOK.forEach((u,i)=>{
    const c=document.createElement('div'); c.className='unit-card';
    c.innerHTML=`<div class="unit-card-icon">${u.emoji}</div><div class="unit-card-body"><div class="un">${u.unit===0?'Welcome':`Unit ${u.unit}`}</div><div class="ut">${u.label}</div><div class="uts">${u.topics}</div></div><div class="unit-card-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
    c.addEventListener('click',()=>showVocLessons(i)); grid.appendChild(c);
  });
}
function showVocLessons(ui){
  const u=BOOK[ui]; $('vv-units').style.display='none'; $('vv-lessons').style.display='block';
  $('vunit-head').textContent=`${u.emoji} ${u.unit===0?'Welcome':`Unit ${u.unit}`}: ${u.label}`; $('vunit-sub').textContent=u.topics;
  const list=$('vlessons'); list.innerHTML='';
  u.lessons.forEach((l,j)=>{
    const item=document.createElement('div'); item.className='li';
    item.innerHTML=`<span class="ltag">${l.tag}</span><div class="linfo"><div class="lname">${l.title}</div><div class="ldesc">${l.vocab.length} ta so'z • ${l.focus}</div></div><div class="li-arr"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
    item.addEventListener('click',()=>startVocTest(ui,j)); list.appendChild(item);
  });
}
$('vback-units').addEventListener('click',()=>{ $('vv-lessons').style.display='none'; $('vv-units').style.display='block'; });
$('vback-lessons').addEventListener('click',()=>{ $('vv-test').style.display='none'; $('vv-lessons').style.display='block'; });
$('vback-test').addEventListener('click',()=>{ $('vv-score').style.display='none'; $('vv-units').style.display='block'; });
document.querySelectorAll('#mode-seg button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('#mode-seg button').forEach(b=>b.classList.remove('on'));
    btn.classList.add('on'); S.vocMode=btn.dataset.mode;
    if(S.vocLesson) startVocTest(S.vocLesson.ui, S.vocLesson.li);
  });
});
function startVocTest(ui,li){
  const u=BOOK[ui]; const l=u.lessons[li]; S.vocLesson={ui,li}; S.vocWords=[...l.vocab]; S.vocIdx=0; S.vocScore=0; S.vocWrong=[];
  $('vv-units').style.display='none'; $('vv-lessons').style.display='none'; $('vv-score').style.display='none'; $('vv-test').style.display='block';
  $('vtest-tag').textContent=l.tag; $('vtest-title').textContent=l.title; showVocWord();
}
function showVocWord(){
  const area=$('vtest-area'); area.innerHTML='';
  if(S.vocIdx>=S.vocWords.length){ showScore(); return; }
  const w=S.vocWords[S.vocIdx]; const isUzEn=S.vocMode==='uz-en';
  const prompt=isUzEn?w.uz:w.en; const answer=isUzEn?w.en:w.uz;
  area.innerHTML=`
    <div class="vcard"><div class="vc-progress">${S.vocIdx+1} / ${S.vocWords.length}</div><div class="vc-label">${isUzEn?"O'zbekcha so'z:":"Inglizcha so'z:"}</div><div class="vc-word">${prompt}</div><div class="vc-hint">${isUzEn?"Inglizcha tarjimasini ayting":"O'zbekcha tarjimasini ayting"} 🎤</div><div class="vc-result" id="vc-res"></div></div>
    <div style="display:flex;flex-direction:column;align-items:center;gap:10px;width:100%;">
      <div class="mic-area" style="max-width:460px;width:100%;">
        <div class="mic-status" id="tb-voc">Bosib gapiring...</div>
        <div class="wave" id="wv-voc"><span></span><span></span><span></span><span></span><span></span><span></span><span></span></div>
        <div class="mic-ctrl"><div id="vi" class="rrow"><button class="rec-btn" id="vrec"><svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="2" width="6" height="12" rx="3"/><path d="M5 10a7 7 0 0 0 14 0"/><line x1="12" y1="19" x2="12" y2="22"/><line x1="8" y1="22" x2="16" y2="22"/></svg></button></div><div id="vr" class="rrow" style="display:none;"><button class="stop-btn" id="vstop"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16" rx="2"/></svg></button><div class="rec-lbl"><span class="rdot"></span>Yozilmoqda</div></div><div id="vvr" class="rev-row" style="display:none;"><button class="del-btn" id="vdel">✕ O'chirish</button><button class="snd-btn" id="vsnd">↑ Yuborish</button></div></div>
      </div>
    </div>`;
  setTimeout(()=>{ if(!isUzEn) speak(prompt); }, 300);
  makeMic({idle:'vi',recst:'vr',rev:'vvr',rec:'vrec',stop:'vstop',del:'vdel',snd:'vsnd',tbox:'tb-voc',wave:'wv-voc',onSend: async(text)=>{ await checkVocAnswer(text, answer, prompt, isUzEn); }});
}
async function checkVocAnswer(userText, correctAnswer, prompt, isUzEn){
  const res=$('vc-res'); setSt('Tekshirilmoqda...');
  const sys=`Task: Is "${userText}" a correct ${isUzEn?'English':'Uzbek'} translation of "${prompt}"? The expected answer is "${correctAnswer}". Accept minor mistakes. Reply ONLY with JSON: {"correct": true/false, "note": "short note"}`;
  let correct=false, note='';
  try{ const r=await groq(sys,[{role:'user',content:`User said: "${userText}"`}]); const parsed=JSON.parse(r.replace(/```json|```/g,'').trim()); correct=parsed.correct; note=parsed.note||''; }
  catch(e){ correct=userText.toLowerCase().trim()===correctAnswer.toLowerCase().trim(); }
  setSt('Tayyor');
  if(correct){
    S.vocScore++; res.className='vc-result correct'; res.textContent=`✅ To'g'ri! "${correctAnswer}"`; res.style.display='block'; speak(isUzEn?correctAnswer:prompt);
  }else{
    S.vocWrong.push({prompt,correct:correctAnswer,yours:userText}); res.className='vc-result wrong'; res.textContent=`❌ Noto'g'ri. To'g'ri javob: "${correctAnswer}"${note?' — '+note:''}`; res.style.display='block'; speak(correctAnswer);
  }
  setTimeout(()=>{ S.vocIdx++; showVocWord(); }, 2200);
}
function showScore(){
  $('vv-test').style.display='none'; $('vv-score').style.display='block';
  const pct=Math.round((S.vocScore/S.vocWords.length)*100);
  $('sc-num').textContent=S.vocScore; $('sc-total').textContent=`/ ${S.vocWords.length} ta so'z`; $('sc-msg').textContent=scoreMsg(pct);
}
$('retry-btn').addEventListener('click',()=>{ if(S.vocLesson) startVocTest(S.vocLesson.ui, S.vocLesson.li); });

// ════════════════════════════
// SPELLING GAME
// ════════════════════════════
