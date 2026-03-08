function makeExUnitGrid(gridId, onLessonClick, showLessonsId, unitHeadId, unitSubId, lessonListId, unitsId){
  const grid=$(gridId); if(!grid)return;
  EXERCISES.forEach((u,i)=>{
    const c=document.createElement('div'); c.className='unit-card';
    c.innerHTML=`<div class="unit-card-icon">${u.emoji}</div><div class="unit-card-body"><div class="un">${u.unit===0?'Welcome':`Unit ${u.unit}`}</div><div class="ut">${u.label}</div></div><div class="unit-card-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
    c.addEventListener('click',()=>{
      const bk = BOOK.find(b=>b.unit===u.unit);
      $(unitsId).style.display='none'; $(showLessonsId).style.display='block';
      $(unitHeadId).textContent=`${u.emoji} ${u.unit===0?'Welcome':`Unit ${u.unit}`}: ${u.label}`; $(unitSubId).textContent=bk?bk.topics:'';
      const list=$(lessonListId); list.innerHTML='';
      for(let j=0;j<4;j++){
        const bLesson=bk&&bk.lessons[j]?bk.lessons[j]:null; const item=document.createElement('div'); item.className='li';
        item.innerHTML=`<span class="ltag">${bLesson?bLesson.tag:(u.unit+'.'+('ABCD'[j]))}</span><div class="linfo"><div class="lname">${bLesson?bLesson.title:('Lesson '+('ABCD'[j]))}</div><div class="ldesc">10 ta savol</div></div><div class="li-arr"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
        item.addEventListener('click',()=>onLessonClick(i,j)); list.appendChild(item);
      }
    });
    grid.appendChild(c);
  });
}

// MCQ
const MCQ={idx:0,score:0,items:[],lessonRef:null,busy:false};
function startMcq(ui,li){
  const u=EXERCISES[ui]; if(!u||!u.lessons||!u.lessons[li]||!u.lessons[li].mcq||u.lessons[li].mcq.length===0){ toast("Ushbu dars uchun MCQ savollari hali kiritilmagan!"); return; }
  MCQ.items=[...u.lessons[li].mcq]; MCQ.idx=0; MCQ.score=0; MCQ.lessonRef={ui,li};
  $('mcq-lessons').style.display='none'; $('mcq-units').style.display='none'; $('mcq-game').style.display='flex'; $('mcq-score').style.display='none'; renderMcq();
}
function renderMcq(){
  if(MCQ.idx>=MCQ.items.length){showMcqScore();return;}
  const q=MCQ.items[MCQ.idx]; const total=MCQ.items.length;
  $('mcq-prog-txt').textContent=`${MCQ.idx+1} / ${total}`; $('mcq-score-txt').textContent=`✅ ${MCQ.score}`; $('mcq-prog-fill').style.width=(MCQ.idx/total*100)+'%'; $('mcq-feedback').style.display='none';
  const parts=q.s.split('___'); $('mcq-sentence').innerHTML=parts.length===2?`${parts[0]}<span class="blank-spot">___</span>${parts[1]}`:q.s;
  const opts=$('mcq-opts'); opts.innerHTML=''; const letters=['A','B','C','D']; const optColors=['opt-a','opt-b','opt-c','opt-d'];
  q.opts.forEach((opt,i)=>{
    const btn=document.createElement('button'); btn.className=`opt-btn ${optColors[i]}`; btn.innerHTML=`<span class="opt-letter">${letters[i]}</span>${opt}`;
    btn.addEventListener('click',()=>{
      if(MCQ.busy)return; MCQ.busy=true; const fb=$('mcq-feedback'); opts.querySelectorAll('.opt-btn').forEach(b=>b.disabled=true);
      if(opt===q.a){
        MCQ.score++; btn.classList.add('correct'); fb.className='ex-feedback correct'; fb.textContent='✅ To\'g\'ri!'; fb.style.display='block';
      }else{
        btn.classList.add('wrong'); opts.querySelectorAll('.opt-btn').forEach(b=>{if(b.textContent.includes(q.a))b.classList.add('correct');});
        fb.className='ex-feedback wrong'; fb.textContent=`❌ Noto'g'ri. To'g'ri javob: "${q.a}"`; fb.style.display='block';
      }
      setTimeout(()=>{MCQ.idx++;MCQ.busy=false;renderMcq();},1400);
    });
    opts.appendChild(btn);
  });
}
function showMcqScore(){ $('mcq-game').style.display='none'; $('mcq-score').style.display='block'; $('mcq-sc-num').textContent=MCQ.score; $('mcq-sc-total').textContent=`/ ${MCQ.items.length} ta savol`; $('mcq-sc-msg').textContent=scoreMsg(Math.round(MCQ.score/MCQ.items.length*100)); }

// FILL TYPE
const FT={idx:0,score:0,items:[],lessonRef:null,busy:false};
function startFt(ui,li){
  const u=EXERCISES[ui]; if(!u||!u.lessons||!u.lessons[li]||!u.lessons[li].fill||u.lessons[li].fill.length===0){ toast("Ushbu dars uchun yozish mashqlari hali kiritilmagan!"); return; }
  FT.items=[...u.lessons[li].fill]; FT.idx=0; FT.score=0; FT.lessonRef={ui,li};
  $('ft-lessons').style.display='none'; $('ft-units').style.display='none'; $('ft-game').style.display='flex'; $('ft-score').style.display='none'; renderFt(); setTimeout(()=>{ const inp=$('ft-input'); if(inp) inp.focus(); },150);
}
function renderFt(){
  if(FT.idx>=FT.items.length){showFtScore();return;}
  const q=FT.items[FT.idx]; const total=FT.items.length;
  $('ft-prog-txt').textContent=`${FT.idx+1} / ${total}`; $('ft-score-txt').textContent=`✅ ${FT.score}`; $('ft-prog-fill').style.width=(FT.idx/total*100)+'%'; $('ft-feedback').style.display='none';
  const parts=q.s.split('___'); $('ft-sentence').innerHTML=parts.length===2?`${parts[0]}<span class="blank-spot">___</span>${parts[1]}`:q.s;
  const inp=$('ft-input'); inp.value=''; inp.className='fill-input'; inp.disabled=false;
  setTimeout(()=>{
    inp.focus();
    // Kursor o'rtaga — placeholder ko'rinayotganda setSelectionRange ishlamaydi
    // Shuning uchun value bo'sh bo'lganda text-align:center caret ni o'rtaga qo'yadi
    inp.setSelectionRange(0,0);
  },100);
}
function checkFt(){
  if(FT.busy)return; const q=FT.items[FT.idx]; const val=$('ft-input').value.trim().toLowerCase(); if(!val)return; FT.busy=true;
  const fb=$('ft-feedback'); const inp=$('ft-input'); inp.disabled=true;
  if(val===q.a.toLowerCase()){
    FT.score++; inp.className='fill-input correct'; fb.className='ex-feedback correct'; fb.textContent=`✅ To'g'ri! "${q.a}"`; fb.style.display='block';
  }else{
    inp.className='fill-input wrong'; fb.className='ex-feedback wrong'; fb.textContent=`❌ Noto'g'ri. To'g'ri javob: "${q.a}"`; fb.style.display='block';
  }
  setTimeout(()=>{FT.idx++;FT.busy=false;renderFt();},1500);
}
$('ft-input').addEventListener('keydown',e=>{if(e.key==='Enter')checkFt();});
function showFtScore(){ $('ft-game').style.display='none'; $('ft-score').style.display='block'; $('ft-sc-num').textContent=FT.score; $('ft-sc-total').textContent=`/ ${FT.items.length} ta savol`; $('ft-sc-msg').textContent=scoreMsg(Math.round(FT.score/FT.items.length*100)); }

// WORD ORDER
const WO={idx:0,items:[],lessonRef:null,answerWords:[],poolWords:[],busy:false};
function woNorm(arr){const s=Array.isArray(arr)?arr.join(' '):arr; return s.replace(/\s+([.?!,])/g,'$1').replace(/[.?!,]$/,'').toLowerCase().trim();}
function startWo(ui,li){
  const u=EXERCISES[ui]; if(!u||!u.lessons||!u.lessons[li]||!u.lessons[li].order||u.lessons[li].order.length===0){ toast("Ushbu dars uchun Word Order mashqlari hali kiritilmagan!"); return; }
  WO.items=[...u.lessons[li].order]; WO.idx=0; WO.busy=false; WO.lessonRef={ui,li}; WO.answerWords=[]; WO.poolWords=[];
  $('wo-lessons').style.display='none'; $('wo-units').style.display='none'; $('wo-game').style.display='flex'; $('wo-done').style.display='none'; $('wo-feedback').style.display='none'; renderWo();
}
function renderWo(){
  if(WO.idx>=WO.items.length){showWoDone();return;}
  const q=WO.items[WO.idx]; const total=WO.items.length; WO.busy=false;
  $('wo-prog-txt').textContent=(WO.idx+1)+' / '+total+' gap'; $('wo-prog-fill').style.width=(WO.idx/total*100)+'%'; $('wo-feedback').style.display='none'; $('wo-check-btn').style.display='flex'; $('wo-answer-area').className='wo-sentence';
  WO.answerWords=[];
  const _arr=[...q.w];
  for(let i=_arr.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[_arr[i],_arr[j]]=[_arr[j],_arr[i]];}
  WO.poolWords=_arr; renderWoAreas();
}
function renderWoAreas(){
  const answerArea=$('wo-answer-area'); const pool=$('wo-pool'); answerArea.innerHTML=''; pool.innerHTML='';
  answerArea.className=answerArea.className.replace(' correct-line','');
  [...WO.answerWords].forEach((w,i)=>{
    const chip=document.createElement('div'); chip.className='word-chip in-answer';
    chip.textContent=w;
    chip.addEventListener('click',()=>{ WO.answerWords.splice(i,1); WO.poolWords.push(w); renderWoAreas(); }); answerArea.appendChild(chip);
  });
  [...WO.poolWords].forEach((w,i)=>{
    const chip=document.createElement('div'); chip.className='word-chip';
    chip.textContent=w;
    chip.addEventListener('click',()=>{ WO.poolWords.splice(i,1); WO.answerWords.push(w); renderWoAreas(); }); pool.appendChild(chip);
  });
}
$('wo-check-btn').addEventListener('click',()=>{
  if(WO.busy)return; if(WO.answerWords.length===0){toast("So'zlarni yuqoriga joylashtiring!");return;}
  const q=WO.items[WO.idx]; const fb=$('wo-feedback');
  if(woNorm(WO.answerWords)===woNorm(q.a)){
    WO.busy=true; $('wo-answer-area').className='wo-sentence correct-line'; fb.className='wo-feedback correct'; fb.textContent="✅ To'g'ri! — "+q.a; fb.style.display='block'; $('wo-check-btn').style.display='none';
    setTimeout(()=>{WO.idx++;renderWo();},1600);
  }else{
    fb.className='wo-feedback wrong'; fb.textContent="❌ Noto'g'ri, qaytadan urinib ko'ring!"; fb.style.display='block'; setTimeout(()=>{fb.style.display='none';},2200);
  }
});
$('wo-clear-btn').addEventListener('click',()=>{if(!WO.items[WO.idx])return;WO.answerWords=[];const _a2=[...WO.items[WO.idx].w];for(let i=_a2.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[_a2[i],_a2[j]]=[_a2[j],_a2[i]];}WO.poolWords=_a2;$('wo-feedback').style.display='none';renderWoAreas();});
function showWoDone(){$('wo-game').style.display='none'; $('wo-done').style.display='block'; $('wo-done-msg').textContent=`Barcha gaplarni to'g'ri tuzib chiqdingiz! 🎉`;}

// Word Order — Enter bosilsa Tekshirish
document.addEventListener('keydown', function(e){
  if(e.key !== 'Enter') return;
  const woPanel = $('wordorder-panel');
  if(!woPanel || !woPanel.classList.contains('on')) return;
  const checkBtn = $('wo-check-btn');
  if(checkBtn && checkBtn.style.display !== 'none') checkBtn.click();
});
