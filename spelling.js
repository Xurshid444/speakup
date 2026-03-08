const SP = { lessonRef:null, words:[], idx:0, score:0, wrong:[], hints:0 };
function renderSpellUnits(){
  const grid=$('sunit-grid'); grid.innerHTML='';
  BOOK.forEach((u,i)=>{
    const c=document.createElement('div'); c.className='unit-card';
    c.innerHTML=`<div class="unit-card-icon">${u.emoji}</div><div class="unit-card-body"><div class="un">${u.unit===0?'Welcome':`Unit ${u.unit}`}</div><div class="ut">${u.label}</div><div class="uts">${u.topics}</div></div><div class="unit-card-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
    c.addEventListener('click',()=>showSpellLessons(i)); grid.appendChild(c);
  });
}
function showSpellLessons(ui){
  const u=BOOK[ui]; $('sv-units').style.display='none'; $('sv-lessons').style.display='block';
  $('sunit-head').textContent=`${u.emoji} ${u.unit===0?'Welcome':`Unit ${u.unit}`}: ${u.label}`; $('sunit-sub').textContent=u.topics;
  const list=$('slessons'); list.innerHTML='';
  u.lessons.forEach((l,j)=>{
    const item=document.createElement('div'); item.className='li';
    item.innerHTML=`<span class="ltag">${l.tag}</span><div class="linfo"><div class="lname">${l.title}</div><div class="ldesc">${l.vocab.length} ta so'z</div></div><div class="li-arr"><svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
    item.addEventListener('click',()=>startSpellGame(ui,j)); list.appendChild(item);
  });
}
$('sback-units').addEventListener('click',()=>{ $('sv-lessons').style.display='none'; $('sv-units').style.display='block'; });
$('sback-lessons').addEventListener('click',()=>{ $('sv-game').style.display='none'; $('sv-lessons').style.display='block'; });
$('sback-score').addEventListener('click',()=>{ $('sv-score').style.display='none'; $('sv-units').style.display='block'; });
$('sp-retry-btn').addEventListener('click',()=>{ if(SP.lessonRef) startSpellGame(SP.lessonRef.ui, SP.lessonRef.li); });

function startSpellGame(ui,li){
  const l=BOOK[ui].lessons[li]; SP.lessonRef={ui,li}; SP.words=[...l.vocab]; SP.idx=0; SP.score=0; SP.wrong=[]; SP.hints=0;
  $('sv-lessons').style.display='none'; $('sv-units').style.display='none'; $('sv-score').style.display='none'; $('sv-game').style.display='flex'; renderSpellCard();
}
function renderSpellCard(){
  if(SP.idx >= SP.words.length){ showSpellScore(); return; }
  const w = SP.words[SP.idx]; const answer = w.en.toLowerCase(); const wrap = $('sp-wrap');
  // Progress bar yangilash
  const spProg = document.getElementById('sp-prog-txt');
  const spScore = document.getElementById('sp-score-txt');
  const spFill = document.getElementById('sp-prog-fill');
  if(spProg) spProg.textContent = (SP.idx+1) + ' / ' + SP.words.length;
  if(spScore) spScore.textContent = '✅ ' + SP.score;
  if(spFill) spFill.style.width = (SP.idx / SP.words.length * 100) + '%';
  wrap.innerHTML = `
    <div class="sp-emoji-box"><span style="user-select:none;">${w.emoji||'📝'}</span></div>
    <div class="sp-word-bar"><div class="sp-uz-word">${w.uz.charAt(0).toUpperCase()+w.uz.slice(1)}</div><div class="sp-letters" id="sp-letters">
      ${answer.split('').map((ch,i)=>ch===' ' ? `<div class="sp-box space"></div>` : `<div class="sp-box${i===0?' active sp-cursor':''}" id="spb-${i}"></div>`).join('')}
    </div></div>`;
  const inp = $('sp-input'); inp.value = ''; inp.removeAttribute('disabled');
  // Hidden input ga focus — klaviatura ochiladi
  setTimeout(()=>{
    inp.focus();
    // Klaviatura ochilganda karta ko'rinib tursin
    setTimeout(()=>{
      const wrapEl = document.getElementById('sp-wrap');
      if(wrapEl) wrapEl.scrollIntoView({behavior:'smooth', block:'center'});
    }, 350);
  }, 50);
  // Wrap bosilganda ham focus
  wrap.addEventListener('click',()=>inp.focus());
  $('sp-feedback').style.display='none'; $('sp-feedback').className='sp-feedback';
  // Active box highlight — birinchi katakda cursor
  const boxes = wrap.querySelectorAll('.sp-box:not(.space)');
  if(boxes[0]){ boxes[0].classList.add('active','sp-cursor'); }
}
function checkSpelling(typed){
  const w = SP.words[SP.idx]; const answer = w.en.toLowerCase(); const input = typed.toLowerCase().trim(); const fb = $('sp-feedback');
  let letterIdx = 0; let allCorrect = true;
  const nonSpaceLen = answer.replace(/ /g,'').length;
  for(let i=0; i<answer.length; i++){
    if(answer[i]===' ') continue; const box = $(`spb-${i}`); if(!box) continue;
    const typedCh = (input.replace(/ /g,''))[letterIdx] || '';
    box.textContent = typedCh || '';
    if(typedCh === '') {
      box.className = (letterIdx === input.replace(/ /g,'').length) ? 'sp-box active sp-cursor' : 'sp-box';
    } else if(typedCh === answer[i]){ box.className='sp-box correct'; }
    else { box.className='sp-box wrong'; allCorrect = false; }
    letterIdx++;
  }
  if(allCorrect && input.replace(/ /g,'') === answer.replace(/ /g,'')){
    SP.score++; fb.className='sp-feedback correct'; fb.textContent = `✅ To'g'ri! "${w.en}"`; fb.style.display='block'; $('sp-input').disabled=true;
    setTimeout(()=>{ $('sp-input').disabled=false; SP.idx++; renderSpellCard(); }, 1600);
  } else {
    SP.wrong.push({uz:w.uz, en:w.en, typed:input}); fb.className='sp-feedback wrong';
    const cLetters = answer.split(''); const tLetters = input.split(''); let diff = '';
    for(let i=0; i<Math.max(cLetters.length, tLetters.length); i++){
      const c = cLetters[i]||''; const t = tLetters[i]||'_';
      if(c===t) diff += `<span style="color:var(--green)">${c}</span>`; else diff += `<span style="color:var(--red)">${t||'_'}</span>`;
    }
    fb.innerHTML = `❌ Noto'g'ri: <span style="letter-spacing:3px;font-family:'Inter',sans-serif;">${diff}</span><br>✅ To'g'ri: <b style="letter-spacing:2px;">${w.en}</b>`;
    fb.style.display='block'; $('sp-input').disabled=true;
    setTimeout(()=>{ $('sp-input').disabled=false; $('sp-input').value=''; $('sp-input').focus(); SP.idx++; renderSpellCard(); }, 2600);
  }
}
$('sp-input').addEventListener('input',e=>{
  const val = e.target.value;
  const w = SP.words[SP.idx]; if(!w) return;
  const answer = w.en.toLowerCase(); const input = val.toLowerCase();
  // cursor pozitsiyasini yangilash
  const allBoxes = document.querySelectorAll('[id^="spb-"]');
  allBoxes.forEach(b=>b.classList.remove('sp-cursor'));
  const inputNoSp = input.replace(/ /g,'');
  const ansNoSp = answer.replace(/ /g,'');
  // Keyingi bo'sh katakni topamiz
  let charCount = 0;
  for(let bi=0; bi<answer.length; bi++){
    if(answer[bi]===' ') continue;
    if(charCount === inputNoSp.length){
      const nextBox = document.getElementById('spb-'+bi);
      if(nextBox) nextBox.classList.add('sp-cursor');
      break;
    }
    charCount++;
  }
  let li = 0;
  for(let i=0;i<answer.length;i++){
    if(answer[i]===' ')continue; const box=$(`spb-${i}`); if(!box)continue;
    const ch=(input.replace(/ /g,''))[li]||'';
    box.textContent=ch;
    if(ch==='') box.className=(li===input.replace(/ /g,'').length)?'sp-box active':'sp-box';
    else if(ch===answer[i]) box.className='sp-box correct';
    else box.className='sp-box wrong';
    li++;
  }
});
$('sp-input').addEventListener('keydown',e=>{ if(e.key==='Enter'){ const val=$('sp-input').value.trim(); if(val) checkSpelling(val); } });
$('sp-hint-btn').addEventListener('click',()=>{
  const w=SP.words[SP.idx]; if(!w)return; SP.hints++; const answer=w.en.toLowerCase(); const inp=$('sp-input');
  if(inp.value.length < answer.length){
    inp.value = answer.slice(0, inp.value.length+1); const chars = inp.value.split(''); let li=0;
    for(let i=0;i<answer.length;i++){
      if(answer[i]===' ')continue; const box=$(`spb-${i}`); if(!box)continue;
      if(li < chars.length){ box.textContent=chars[li]; box.className='sp-box hint'; } li++;
    }
    inp.focus();
  }
});
$('sp-skip-btn').addEventListener('click',()=>{ const w=SP.words[SP.idx]; if(!w)return; SP.wrong.push({uz:w.uz, en:w.en, typed:'(o\'tkazib yuborildi)'}); SP.idx++; renderSpellCard(); });

function showSpellScore(){
  $('sv-game').style.display='none'; $('sv-score').style.display='block';
  const total=SP.words.length; const pct=Math.round((SP.score/total)*100);
  $('ss-num').textContent=SP.score; $('ss-total').textContent=`/ ${total} ta so'z`; $('ss-msg').textContent=scoreMsg(pct);
  const wlist=$('ss-wrong-list'); wlist.innerHTML='';
  if(SP.wrong.length>0){
    const title=document.createElement('div'); title.style.cssText='font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--text3);text-transform:uppercase;margin-bottom:8px;'; title.textContent='Xato so\'zlar:'; wlist.appendChild(title);
    SP.wrong.forEach(w=>{
      const row=document.createElement('div'); row.style.cssText='background:var(--s2);border:1px solid var(--border);border-radius:10px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;gap:12px;';
      row.innerHTML=`<span style="color:var(--text2);font-size:13px;">${w.uz}</span><span style="color:var(--red);font-size:13px;text-decoration:line-through;">${w.typed}</span><span style="color:var(--green);font-size:14px;font-weight:700;">${w.en}</span>`; wlist.appendChild(row);
    });
  }
}

// ════════════════════════════
// MASHQLAR UCHUN YORDAMCHI (MCQ, FILL, ORDER)
// ════════════════════════════
