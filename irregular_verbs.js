// ════════════════════════════════════════════════
// IRREGULAR VERBS MODULE
// ════════════════════════════════════════════════

const IVERBS_DATA = [
  // Group A-C
  ['abide','abode','abode'],
  ['arise','arose','arisen'],
  ['awake','awoke','awoken'],
  ['backbite','backbit','backbitten'],
  ['backslide','backslid','backslidden'],
  ['be','was/were','been'],
  ['bear','bore','borne/born'],
  ['beat','beat','beaten'],
  ['become','became','become'],
  ['befall','befell','befallen'],
  ['beget','begat/begot','begotten'],
  ['begin','began','begun'],
  ['behold','beheld','beheld'],
  ['bend','bent','bent'],
  ['bereave','bereft/bereaved','bereft/bereaved'],
  ['beseech','besought/beseeched','besought/beseeched'],
  ['beset','beset','beset'],
  ['bet','bet','bet'],
  ['bid','bid/bade','bid/bidden'],
  ['bind','bound','bound'],
  ['bite','bit','bitten'],
  ['bleed','bled','bled'],
  ['blow','blew','blown'],
  ['break','broke','broken'],
  ['breed','bred','bred'],
  ['bring','brought','brought'],
  ['broadcast','broadcast','broadcast'],
  ['build','built','built'],
  ['burn','burnt/burned','burnt/burned'],
  ['burst','burst','burst'],
  ['buy','bought','bought'],
  ['cast','cast','cast'],
  ['catch','caught','caught'],
  ['chide','chid/chided','chidden/chided'],
  ['choose','chose','chosen'],
  ['cleave','cleft/cleaved','cleft/cleaved'],
  ['cling','clung','clung'],
  ['clothe','clad/clothed','clad/clothed'],
  ['come','came','come'],
  ['cost','cost','cost'],
  ['creep','crept','crept'],
  ['crow','crew/crowed','crowed'],
  ['cut','cut','cut'],
  // Group D-H
  ['deal','dealt','dealt'],
  ['dig','dug','dug'],
  ['dive','dove/dived','dived'],
  ['do','did','done'],
  ['draw','drew','drawn'],
  ['dream','dreamt/dreamed','dreamt/dreamed'],
  ['drink','drank','drunk'],
  ['drive','drove','driven'],
  ['dwell','dwelt','dwelt'],
  ['eat','ate','eaten'],
  ['engrave','engraved','engraved/engraven'],
  ['fall','fell','fallen'],
  ['feed','fed','fed'],
  ['feel','felt','felt'],
  ['fight','fought','fought'],
  ['find','found','found'],
  ['flee','fled','fled'],
  ['fling','flung','flung'],
  ['fly','flew','flown'],
  ['forbear','forbore','forborne'],
  ['forbid','forbade','forbidden'],
  ['forecast','forecast','forecast'],
  ['foresee','foresaw','foreseen'],
  ['foretell','foretold','foretold'],
  ['forget','forgot','forgotten'],
  ['forgive','forgave','forgiven'],
  ['forsake','forsook','forsaken'],
  ['freeze','froze','frozen'],
  ['get','got','got/gotten'],
  ['gild','gilded/gilt','gilded/gilt'],
  ['give','gave','given'],
  ['go','went','gone'],
  ['grind','ground','ground'],
  ['grip','gripped/gript','gripped/gript'],
  ['grow','grew','grown'],
  ['hang','hung','hung'],
  ['have','had','had'],
  ['hear','heard','heard'],
  ['heave','heaved/hove','heaved/hove'],
  ['hew','hewed','hewn/hewed'],
  ['hide','hid','hidden'],
  ['hit','hit','hit'],
  ['hold','held','held'],
  ['hurt','hurt','hurt'],
  // Group I-R
  ['inlay','inlaid','inlaid'],
  ['input','input','input'],
  ['interweave','interwove','interwoven'],
  ['keep','kept','kept'],
  ['kneel','knelt','knelt'],
  ['knit','knit/knitted','knit/knitted'],
  ['know','knew','known'],
  ['lay','laid','laid'],
  ['lead','led','led'],
  ['lean','leant/leaned','leant/leaned'],
  ['leap','leapt/leaped','leapt/leaped'],
  ['learn','learnt/learned','learnt/learned'],
  ['leave','left','left'],
  ['lend','lent','lent'],
  ['let','let','let'],
  ['lie','lay','lain'],
  ['light','lit/lighted','lit/lighted'],
  ['lose','lost','lost'],
  ['make','made','made'],
  ['mean','meant','meant'],
  ['meet','met','met'],
  ['melt','melted','molten/melted'],
  ['mislead','misled','misled'],
  ['mistake','mistook','mistaken'],
  ['misunderstand','misunderstood','misunderstood'],
  ['mow','mowed','mown/mowed'],
  ['offset','offset','offset'],
  ['outbid','outbid','outbid'],
  ['outdo','outdid','outdone'],
  ['outgrow','outgrew','outgrown'],
  ['output','output','output'],
  ['outrun','outran','outrun'],
  ['overcome','overcame','overcome'],
  ['overdo','overdid','overdone'],
  ['overflow','overflowed','overflown'],
  ['overhang','overhung','overhung'],
  ['overhear','overheard','overheard'],
  ['overlay','overlaid','overlaid'],
  ['override','overrode','overridden'],
  ['oversee','oversaw','overseen'],
  ['overshoot','overshot','overshot'],
  ['oversleep','overslept','overslept'],
  ['overtake','overtook','overtaken'],
  ['overthrow','overthrew','overthrown'],
  ['partake','partook','partaken'],
  ['pay','paid','paid'],
  ['plead','pled/pleaded','pled/pleaded'],
  ['preset','preset','preset'],
  ['prove','proved','proven/proved'],
  ['put','put','put'],
  ['quit','quit','quit'],
  ['quickset','quickset','quickset'],
  ['quickfreeze','quickfroze','quickfrozen'],
  ['read','read','read'],
  ['rebuild','rebuilt','rebuilt'],
  ['recast','recast','recast'],
  ['redo','redid','redone'],
  ['rehear','reheard','reheard'],
  ['remake','remade','remade'],
  ['rend','rent','rent'],
  ['repay','repaid','repaid'],
  ['reset','reset','reset'],
  ['retake','retook','retaken'],
  ['retell','retold','retold'],
  ['rewrite','rewrote','rewritten'],
  ['rid','rid','rid'],
  ['ride','rode','ridden'],
  ['ring','rang','rung'],
  ['rise','rose','risen'],
  ['run','ran','run'],
  // Group S-Z
  ['saw','sawed','sawn/sawed'],
  ['say','said','said'],
  ['see','saw','seen'],
  ['seek','sought','sought'],
  ['sell','sold','sold'],
  ['send','sent','sent'],
  ['set','set','set'],
  ['sew','sewed','sewn/sewed'],
  ['shake','shook','shaken'],
  ['shave','shaved','shaven/shaved'],
  ['shear','sheared','shorn/sheared'],
  ['shed','shed','shed'],
  ['shine','shone','shone'],
  ['shoot','shot','shot'],
  ['show','showed','shown/showed'],
  ['shrink','shrank/shrunk','shrunk'],
  ['shut','shut','shut'],
  ['sing','sang','sung'],
  ['sink','sank/sunk','sunk'],
  ['sit','sat','sat'],
  ['slay','slew','slain'],
  ['sleep','slept','slept'],
  ['slide','slid','slid'],
  ['sling','slung','slung'],
  ['slink','slunk','slunk'],
  ['slit','slit','slit'],
  ['smell','smelt/smelled','smelt/smelled'],
  ['smite','smote','smitten'],
  ['sow','sowed','sown/sowed'],
  ['speak','spoke','spoken'],
  ['speed','sped/speeded','sped/speeded'],
  ['spell','spelt/spelled','spelt/spelled'],
  ['spend','spent','spent'],
  ['spill','spilt/spilled','spilt/spilled'],
  ['spin','spun','spun'],
  ['spit','spat/spit','spat/spit'],
  ['split','split','split'],
  ['spoil','spoilt/spoiled','spoilt/spoiled'],
  ['spread','spread','spread'],
  ['spring','sprang/sprung','sprung'],
  ['stand','stood','stood'],
  ['steal','stole','stolen'],
  ['stick','stuck','stuck'],
  ['sting','stung','stung'],
  ['stink','stank/stunk','stunk'],
  ['strew','strewed','strewn/strewed'],
  ['stride','strode','stridden'],
  ['strike','struck','struck/stricken'],
  ['string','strung','strung'],
  ['strive','strove','striven'],
  ['swear','swore','sworn'],
  ['sweep','swept','swept'],
  ['swell','swelled','swollen/swelled'],
  ['swim','swam','swum'],
  ['swing','swung','swung'],
  ['take','took','taken'],
  ['teach','taught','taught'],
  ['tear','tore','torn'],
  ['tell','told','told'],
  ['think','thought','thought'],
  ['thrive','throve/thrived','thriven/thrived'],
  ['throw','threw','thrown'],
  ['thrust','thrust','thrust'],
  ['tread','trod','trodden/trod'],
  ['understand','understood','understood'],
  ['undertake','undertook','undertaken'],
  ['underwrite','underwrote','underwritten'],
  ['undo','undid','undone'],
  ['unfreeze','unfroze','unfrozen'],
  ['unwind','unwound','unwound'],
  ['uphold','upheld','upheld'],
  ['upset','upset','upset'],
  ['wake','woke','woken'],
  ['waylay','waylaid','waylaid'],
  ['wear','wore','worn'],
  ['weave','wove','woven'],
  ['wed','wed/wedded','wed/wedded'],
  ['weep','wept','wept'],
  ['wet','wet/wetted','wet/wetted'],
  ['win','won','won'],
  ['wind','wound','wound'],
  ['withdraw','withdrew','withdrawn'],
  ['withhold','withheld','withheld'],
  ['withstand','withstood','withstood'],
  ['wring','wrung','wrung'],
  ['write','wrote','written'],
];

const IV_GROUPS = [
  { label:'A – C', emoji:'🅰️', count:43 },
  { label:'D – H', emoji:'📗', count:44 },
  { label:'I – R', emoji:'📘', count:70 },
  { label:'S – Z', emoji:'📙', count:86 },
];
// compute start/end indices
(()=>{ let s=0; IV_GROUPS.forEach(g=>{ g.start=s; g.end=s+g.count; s+=g.count; }); })();

const IV = { mode:'voice', groupIdx:0, words:[], idx:0, score:0, wrong:[] };

// take first slash-variant, lowercase
function ivNorm(s){ return s.split('/')[0].toLowerCase().trim(); }

// check if text contains any slash-variant of answer
function ivMatch(text, answer){
  const t = text.toLowerCase();
  return answer.split('/').some(a => t.includes(a.trim().toLowerCase()));
}

// ── GROUPS HOME ──
function ivRenderGroups(){
  const grid=$('irv-unit-grid'); grid.innerHTML='';
  IV_GROUPS.forEach((g,i)=>{
    const c=document.createElement('div'); c.className='unit-card';
    c.innerHTML=`<div class="unit-card-icon">${g.emoji}</div><div class="unit-card-body"><div class="un">Guruh ${i+1}</div><div class="ut">${g.label}</div><div class="uts">${g.count} ta fe'l</div></div><div class="unit-card-arrow"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="9,18 15,12 9,6"/></svg></div>`;
    c.addEventListener('click',()=>ivShowModes(i));
    grid.appendChild(c);
  });
}

function ivShowModes(gi){
  IV.groupIdx=gi;
  const g=IV_GROUPS[gi];
  $('irv-home').style.display='none';
  $('irv-modes').style.display='block';
  $('irv-group-name').textContent=`${g.emoji} Guruh ${gi+1}: ${g.label} — ${g.count} ta fe'l`;
}

document.getElementById('irv-back-home').addEventListener('click',()=>{
  $('irv-modes').style.display='none';
  $('irv-home').style.display='block';
});

document.getElementById('irv-voice-btn').addEventListener('click',()=>ivStart('voice'));
document.getElementById('irv-spell-btn').addEventListener('click',()=>ivStart('spell'));

// ── START GAME ──
function ivStart(mode){
  IV.mode=mode;
  const g=IV_GROUPS[IV.groupIdx];
  IV.words=IVERBS_DATA.slice(g.start,g.end).map(w=>({v1:w[0],v2:w[1],v3:w[2]}));
  // shuffle
  for(let i=IV.words.length-1;i>0;i--){
    const j=Math.floor(Math.random()*(i+1));
    [IV.words[i],IV.words[j]]=[IV.words[j],IV.words[i]];
  }
  IV.idx=0; IV.score=0; IV.wrong=[];
  $('irv-modes').style.display='none';
  $('irv-score').style.display='none';
  if(mode==='voice'){
    $('irv-spell').style.display='none';
    $('irv-voice').style.display='block';
    ivRenderVoiceCard();
  } else {
    $('irv-voice').style.display='none';
    $('irv-spell').style.display='flex';
    ivRenderSpellCard();
  }
}

// ── VOICE MODE ──
function ivRenderVoiceCard(){
  if(IV.idx>=IV.words.length){ ivShowScore(); return; }
  const w=IV.words[IV.idx];
  $('iv-v-prog').textContent=`${IV.idx+1} / ${IV.words.length}`;
  $('iv-v-score').textContent=`✅ ${IV.score}`;
  $('iv-v-fill').style.width=(IV.idx/IV.words.length*100)+'%';
  $('iv-v1-display').textContent=w.v1;
  $('iv-v2-hint').textContent='?';
  $('iv-v3-hint').textContent='?';
  $('iv-v-fb').style.display='none';
  speak(w.v1);
}

let _ivMicDone=false;
function ivInitMic(){
  if(_ivMicDone) return; _ivMicDone=true;
  makeMic({
    idle:'iv-vi', recst:'iv-vr', rev:'iv-vvr',
    rec:'iv-vrec', stop:'iv-vstop', del:'iv-vdel', snd:'iv-vsnd',
    play:'iv-vplay', tbox:'iv-vtbox', wave:'iv-vwave',
    onSend:async(text)=>{
      const w=IV.words[IV.idx];
      const v2ok=ivMatch(text,w.v2);
      const v3ok=ivMatch(text,w.v3);
      const ok=v2ok&&v3ok;
      $('iv-v2-hint').textContent=w.v2;
      $('iv-v3-hint').textContent=w.v3;
      const fb=$('iv-v-fb');
      if(ok){
        IV.score++;
        fb.className='sp-feedback correct';
        fb.innerHTML=`✅ To'g'ri! <b>${w.v1}</b> → <b>${w.v2}</b> → <b>${w.v3}</b>`;
      } else {
        IV.wrong.push(w);
        fb.className='sp-feedback wrong';
        let msg='❌ ';
        if(!v2ok) msg+=`V2: <b>${w.v2}</b> `;
        if(!v3ok) msg+=`V3: <b>${w.v3}</b>`;
        fb.innerHTML=msg;
        speak(`${ivNorm(w.v2)}, ${ivNorm(w.v3)}`);
      }
      fb.style.display='block';
      setTimeout(()=>{ IV.idx++; ivRenderVoiceCard(); }, 2200);
    }
  });
}

document.getElementById('iv-v-hint').addEventListener('click',()=>{
  const w=IV.words[IV.idx]; if(!w) return;
  $('iv-v2-hint').textContent=w.v2;
  $('iv-v3-hint').textContent=w.v3;
  speak(`${w.v1}, ${ivNorm(w.v2)}, ${ivNorm(w.v3)}`);
});
document.getElementById('iv-v-skip').addEventListener('click',()=>{
  if(IV.idx<IV.words.length) IV.wrong.push(IV.words[IV.idx]);
  IV.idx++; ivRenderVoiceCard();
});
document.getElementById('irv-voice-back').addEventListener('click',()=>{
  $('irv-voice').style.display='none';
  $('irv-modes').style.display='block';
});

// ── SPELL MODE ──
let _ivActiveField='v2';

function ivFocusField(field){
  _ivActiveField=field;
  $(field==='v2'?'iv-sp-inp2':'iv-sp-inp3').focus();
}

function ivRenderLetterBoxes(containerId, answer, pfx){
  const norm=ivNorm(answer);
  const c=$(containerId); c.innerHTML='';
  norm.split('').forEach((ch,i)=>{
    const b=document.createElement('div');
    if(ch===' '){ b.className='sp-box space'; }
    else { b.className='sp-box'+(i===0?' active sp-cursor':''); b.id=`${pfx}-${i}`; }
    c.appendChild(b);
  });
}

function ivUpdateBoxes(val, answer, pfx){
  const norm=ivNorm(answer);
  const inputNoSp=val.toLowerCase().replace(/ /g,'');
  document.querySelectorAll(`[id^="${pfx}-"]`).forEach(b=>b.classList.remove('sp-cursor','active'));
  // move cursor to next empty box
  let cc=0;
  for(let bi=0;bi<norm.length;bi++){
    if(norm[bi]===' ')continue;
    if(cc===inputNoSp.length){ const b=document.getElementById(`${pfx}-${bi}`); if(b){b.classList.add('active','sp-cursor');} break; }
    cc++;
  }
  // fill letters
  let li=0;
  for(let i=0;i<norm.length;i++){
    if(norm[i]===' ')continue;
    const b=document.getElementById(`${pfx}-${i}`); if(!b){li++;continue;}
    const ch=inputNoSp[li]||'';
    b.textContent=ch;
    b.className=(ch==='')?((li===inputNoSp.length)?'sp-box active sp-cursor':'sp-box'):'sp-box';
    li++;
  }
}

function ivColorBoxes(containerId, typed, answer, isCorrect){
  const norm=ivNorm(answer);
  const t=typed.toLowerCase().replace(/ /g,'');
  const boxes=[...$(containerId).querySelectorAll('.sp-box:not(.space)')];
  if(isCorrect){
    boxes.forEach((b,i)=>{ b.textContent=t[i]||norm[i]||''; b.className='sp-box correct'; });
  } else {
    boxes.forEach((b,i)=>{ b.textContent=norm[i]||''; b.className='sp-box wrong'; });
  }
}

function ivRenderSpellCard(){
  if(IV.idx>=IV.words.length){ ivShowScore(); return; }
  const w=IV.words[IV.idx];
  $('iv-sp-prog').textContent=`${IV.idx+1} / ${IV.words.length}`;
  $('iv-sp-score').textContent=`✅ ${IV.score}`;
  $('iv-sp-fill').style.width=(IV.idx/IV.words.length*100)+'%';
  $('iv-sp-v1').textContent=w.v1;
  ivRenderLetterBoxes('iv-v2-letters', w.v2, 'iv2b');
  ivRenderLetterBoxes('iv-v3-letters', w.v3, 'iv3b');
  const inp2=$('iv-sp-inp2'), inp3=$('iv-sp-inp3');
  inp2.value=''; inp3.value='';
  inp2.disabled=false; inp3.disabled=false;
  $('iv-sp-fb').style.display='none';
  _ivActiveField='v2';
  speak(w.v1);
  setTimeout(()=>{ inp2.focus(); $('iv-v2-row').style.opacity='1'; $('iv-v3-row').style.opacity='0.55'; }, 120);
}

function ivCheckSpell(){
  const w=IV.words[IV.idx];
  const v2val=$('iv-sp-inp2').value.trim();
  const v3val=$('iv-sp-inp3').value.trim();
  if(!v2val||!v3val){ toast("Ikkala shaklni ham to'ldiring!"); return; }
  const v2ok=w.v2.split('/').some(a=>v2val.toLowerCase()===a.trim().toLowerCase());
  const v3ok=w.v3.split('/').some(a=>v3val.toLowerCase()===a.trim().toLowerCase());
  const ok=v2ok&&v3ok;
  ivColorBoxes('iv-v2-letters', v2val, w.v2, v2ok);
  ivColorBoxes('iv-v3-letters', v3val, w.v3, v3ok);
  const fb=$('iv-sp-fb');
  if(ok){
    IV.score++;
    fb.className='sp-feedback correct';
    fb.textContent="✅ To'g'ri!";
  } else {
    IV.wrong.push(w);
    fb.className='sp-feedback wrong';
    fb.innerHTML=`❌ To'g'ri: V2 — <b>${w.v2}</b>, V3 — <b>${w.v3}</b>`;
    speak(`${ivNorm(w.v2)}, ${ivNorm(w.v3)}`);
  }
  fb.style.display='block';
  inp2.disabled=true; inp3.disabled=true;
  setTimeout(()=>{ IV.idx++; ivRenderSpellCard(); }, 2200);
}

document.getElementById('iv-sp-inp2').addEventListener('input',e=>{ const w=IV.words[IV.idx]; if(w) ivUpdateBoxes(e.target.value,w.v2,'iv2b'); });
document.getElementById('iv-sp-inp3').addEventListener('input',e=>{ const w=IV.words[IV.idx]; if(w) ivUpdateBoxes(e.target.value,w.v3,'iv3b'); });
document.getElementById('iv-sp-inp2').addEventListener('keydown',e=>{ if(e.key==='Enter'){ _ivActiveField='v3'; $('iv-sp-inp3').focus(); $('iv-v2-row').style.opacity='0.55'; $('iv-v3-row').style.opacity='1'; } });
document.getElementById('iv-sp-inp3').addEventListener('keydown',e=>{ if(e.key==='Enter') ivCheckSpell(); });
document.getElementById('iv-sp-inp2').addEventListener('focus',()=>{ _ivActiveField='v2'; $('iv-v2-row').style.opacity='1'; $('iv-v3-row').style.opacity='0.55'; });
document.getElementById('iv-sp-inp3').addEventListener('focus',()=>{ _ivActiveField='v3'; $('iv-v2-row').style.opacity='0.55'; $('iv-v3-row').style.opacity='1'; });
document.getElementById('iv-sp-check').addEventListener('click', ivCheckSpell);
document.getElementById('iv-sp-hint').addEventListener('click',()=>{
  const w=IV.words[IV.idx]; if(!w) return;
  toast(`💡 V2: ${ivNorm(w.v2)} · V3: ${ivNorm(w.v3)}`);
});
document.getElementById('iv-sp-skip').addEventListener('click',()=>{
  if(IV.idx<IV.words.length) IV.wrong.push(IV.words[IV.idx]);
  IV.idx++; ivRenderSpellCard();
});
document.getElementById('irv-spell-back').addEventListener('click',()=>{
  $('irv-spell').style.display='none';
  $('irv-modes').style.display='block';
});

// ── SCORE ──
function ivShowScore(){
  $('irv-voice').style.display='none';
  $('irv-spell').style.display='none';
  $('irv-score').style.display='block';
  const total=IV.words.length;
  const pct=Math.round((IV.score/total)*100);
  $('iv-sc-num').textContent=IV.score;
  $('iv-sc-total').textContent=`/ ${total} ta fe'l`;
  $('iv-sc-msg').textContent=scoreMsg(pct);
  const wlist=$('iv-sc-wrong'); wlist.innerHTML='';
  if(IV.wrong.length>0){
    const title=document.createElement('div');
    title.style.cssText='font-size:11px;font-weight:700;letter-spacing:.08em;color:var(--text3);text-transform:uppercase;margin-bottom:8px;';
    title.textContent="Xato fe'llar:"; wlist.appendChild(title);
    IV.wrong.forEach(w=>{
      const row=document.createElement('div');
      row.style.cssText='background:var(--s2);border:1px solid var(--border);border-radius:10px;padding:10px 14px;display:flex;justify-content:space-between;align-items:center;gap:8px;flex-wrap:wrap;';
      row.innerHTML=`<span style="font-weight:700;color:var(--text);min-width:80px;">${w.v1}</span><span style="color:var(--accent);">${w.v2}</span><span style="color:var(--purple-light);">${w.v3}</span>`;
      wlist.appendChild(row);
    });
  }
}
document.getElementById('iv-sc-retry').addEventListener('click',()=>{
  $('irv-score').style.display='none';
  ivStart(IV.mode);
});
document.getElementById('iv-sc-home').addEventListener('click',()=>{
  $('irv-score').style.display='none';
  $('irv-home').style.display='block';
});
