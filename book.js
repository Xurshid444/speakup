function renderBookUnits(){
  const grid=$('unit-grid'); grid.innerHTML='';
  BOOK.forEach((u,i)=>{
    const c=document.createElement('div'); c.className='unit-card';
    c.innerHTML=`<div class="unit-card-icon">${u.emoji}</div><div class="unit-card-body"><div class="un">${u.unit===0?'Welcome':`Unit ${u.unit}`}</div><div class="ut">${u.label}</div><div class="uts">${u.topics}</div></div><div class="unit-card-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
    c.addEventListener('click',()=>showBookLessons(i)); grid.appendChild(c);
  });
}
function showBookLessons(ui){
  const u=BOOK[ui]; $('bv-units').style.display='none'; $('bv-lessons').style.display='block';
  $('bunit-head').textContent=`${u.emoji} ${u.unit===0?'Welcome':`Unit ${u.unit}`}: ${u.label}`; $('bunit-sub').textContent=u.topics;
  const list=$('blessons'); list.innerHTML='';
  u.lessons.forEach((l,j)=>{
    const item=document.createElement('div'); item.className='li';
    item.innerHTML=`<span class="ltag">${l.tag}</span><div class="linfo"><div class="lname">${l.title}</div><div class="ldesc">${l.focus}</div></div><div class="li-arr"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
    item.addEventListener('click',()=>startBookLesson(ui,j)); list.appendChild(item);
  });
}
$('back-units').addEventListener('click',()=>{ $('bv-lessons').style.display='none'; $('bv-units').style.display='block'; });
$('back-lessons').addEventListener('click',()=>{ window.speechSynthesis.cancel(); if(curAudio){curAudio.pause();curAudio=null;} $('bv-chat').style.display='none'; $('bv-lessons').style.display='block'; S.bookHist=[]; });

async function startBookLesson(ui,li){
  const u=BOOK[ui]; const l=u.lessons[li]; S.currentLesson={u,l}; S.bookHist=[];
  $('bv-lessons').style.display='none'; $('bv-chat').style.display='flex';
  $('cl-tag').textContent=`${u.unit===0?'Welcome':`Unit ${u.unit}`} › ${l.tag}`; $('cl-title').textContent=l.title; $('cl-vocab').textContent=`📚 So'zlar: ${l.vocab.map(v=>v.en).join(', ')}`;
  $('book-chat').innerHTML=''; addThink('book-chat');
  try{
    const res=await groq(bookSys(),[{role:'user',content:`Start our lesson "${l.title}". Greet warmly and ask ONE simple opening question. Level: ${S.level}.`}]);
    rmThink(); S.bookHist.push({role:'assistant',content:res}); addMsg('ai',res,'book-chat'); setTimeout(()=>speak(getQ(res)),400);
  }catch(e){rmThink();toast('❌ '+e.message);}
}
function bookSys(){
  const l=S.currentLesson.l; const fb=S.feedbackLang==='uz'?'Give ALL corrections in UZBEK. Conversation in ENGLISH.':'All in English.';
  return `You are a warm English coach using Navigate Beginner A1. Lesson: ${l.tag} — "${l.title}" | Focus: ${l.focus}. Key vocabulary: ${l.vocab.map(v=>v.en).join(', ')}. Student level: ${S.level}. Rules: 1) Natural English conversation using lesson vocab. 2) One question at a time. 3) Correct errors:
❌ Xato: [error] ✅ To'g'ri: [correct] 💡 Izoh: [explanation]
4) ${fb} 5) SHORT responses — 2-3 sentences.`;
}
async function sendBook(text){
  addMsg('user',text,'book-chat'); S.bookHist.push({role:'user',content:text}); addThink('book-chat');
  try{
    const res=await groq(bookSys(),S.bookHist.slice(-10));
    rmThink(); S.bookHist.push({role:'assistant',content:res}); addMsg('ai',res,'book-chat'); setTimeout(()=>speak(getQ(res)),400);
  }catch(e){rmThink();toast('❌ '+e.message);}
}

// FREE CHAT
function freeSys(){
  const fb=S.feedbackLang==='uz'?'Give ALL corrections in UZBEK. Speak ENGLISH.':'All in English.';
  return `You are a friendly English speaking coach. Level: ${S.level}. Natural English conversation. Correct errors:
❌ Xato: [error] ✅ To'g'ri: [correct] 💡 Izoh: [explanation]
${fb} SHORT responses — 2-3 sentences.`;
}
$('free-start-btn').addEventListener('click',async()=>{
  $('free-empty').style.display='none'; addThink('free-chat');
  try{
    const res=await groq(freeSys(),[{role:'user',content:'Start a friendly English conversation. Ask me one simple question.'}]);
    rmThink(); S.freeHist=[{role:'assistant',content:res}]; addMsg('ai',res,'free-chat'); setTimeout(()=>speak(getQ(res)),400);
  }catch(e){rmThink();toast('❌ '+e.message);}
});
async function sendFree(text){
  addMsg('user',text,'free-chat'); S.freeHist.push({role:'user',content:text}); addThink('free-chat');
  try{
    const res=await groq(freeSys(),S.freeHist.slice(-10));
    rmThink(); S.freeHist.push({role:'assistant',content:res}); addMsg('ai',res,'free-chat'); setTimeout(()=>speak(getQ(res)),400);
  }catch(e){rmThink();toast('❌ '+e.message);}
}

// ════════════════════════════
// VOCABULARY TEST
// ════════════════════════════
