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

// ── Harf bo'yicha dinamik guruhlar ──
const IV_LETTER_GROUPS = (()=>{
  const map={};
  IVERBS_DATA.forEach(v=>{ const l=v[0][0].toUpperCase(); if(!map[l]) map[l]=[]; map[l].push(v); });
  return Object.keys(map).sort().map(l=>({ letter:l, words:map[l] }));
})();

const _IV_COLORS=[
  'linear-gradient(135deg,#6C3CE1,#A855F7)',
  'linear-gradient(135deg,#0891B2,#06B6D4)',
  'linear-gradient(135deg,#D97706,#F59E0B)',
  'linear-gradient(135deg,#059669,#10B981)',
  'linear-gradient(135deg,#DB2777,#F472B6)',
  'linear-gradient(135deg,#7C3AED,#8B5CF6)',
  'linear-gradient(135deg,#EA580C,#FB923C)',
  'linear-gradient(135deg,#1D4ED8,#60A5FA)',
];

const IV = { mode:'voice', groupIdx:0, words:[], idx:0, score:0, wrong:[], voiceStep:'v2', _v2ok:true };

// take first slash-variant, lowercase
function ivNorm(s){ return s.split('/')[0].toLowerCase().trim(); }

// check if text contains any slash-variant of answer
function ivMatch(text, answer){
  const t = text.toLowerCase();
  return answer.split('/').some(a => t.includes(a.trim().toLowerCase()));
}

// ── GROUPS HOME ──
function ivRenderGroups(){
  const grid=$('irv-unit-grid');
  grid.innerHTML='';
  grid.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(72px,1fr));gap:10px;';
  IV_LETTER_GROUPS.forEach((g,i)=>{
    const bg=_IV_COLORS[i%_IV_COLORS.length];
    const c=document.createElement('div');
    c.style.cssText=`background:${bg};border-radius:18px;padding:18px 6px 14px;text-align:center;cursor:pointer;transition:transform .18s,box-shadow .18s;user-select:none;`;
    c.innerHTML=`<div style="font-size:30px;font-weight:900;color:#fff;line-height:1;letter-spacing:-1px;">${g.letter}</div><div style="font-size:10px;font-weight:700;color:rgba(255,255,255,0.75);margin-top:7px;line-height:1.3;">${g.words.length}<br>ta fe'l</div>`;
    c.addEventListener('mouseenter',()=>{ c.style.transform='translateY(-3px)'; c.style.boxShadow='0 10px 28px rgba(0,0,0,0.35)'; });
    c.addEventListener('mouseleave',()=>{ c.style.transform=''; c.style.boxShadow=''; });
    c.addEventListener('click',()=>ivShowModes(i));
    grid.appendChild(c);
  });
  ivRenderFullList();
}

// ── TO'LIQ RO'YXAT ──
function ivRenderFullList(){
  const container=$('irv-full-list'); if(!container) return;
  container.innerHTML='';

  // Sarlavha
  const hdr=document.createElement('div');
  hdr.style.cssText='font-size:18px;font-weight:800;color:var(--text);margin:28px 0 14px;';
  hdr.textContent="📋 To'liq ro'yxat (243 ta fe'l)";
  container.appendChild(hdr);

  // Search input
  const searchWrap=document.createElement('div');
  searchWrap.style.cssText='position:relative;margin-bottom:16px;';
  searchWrap.innerHTML=`<svg style="position:absolute;left:13px;top:50%;transform:translateY(-50%);color:var(--text3);pointer-events:none;" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg><input id="irv-search" type="text" placeholder="Fe'l qidirish..." autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" style="width:100%;background:var(--s2);border:1px solid var(--border);border-radius:12px;padding:10px 14px 10px 38px;color:var(--text);font-size:14px;font-family:inherit;outline:none;transition:border-color .2s;" />`;
  container.appendChild(searchWrap);
  searchWrap.querySelector('#irv-search').addEventListener('focus',e=>e.target.style.borderColor='var(--accent)');
  searchWrap.querySelector('#irv-search').addEventListener('blur',e=>e.target.style.borderColor='var(--border)');

  // Jadval konteyneri
  const listWrap=document.createElement('div');
  listWrap.id='irv-list-wrap';
  container.appendChild(listWrap);

  function renderList(filter){
    listWrap.innerHTML='';
    const q=(filter||'').toLowerCase().trim();
    const filtered=q ? IVERBS_DATA.filter(v=>v[0].includes(q)||v[1].toLowerCase().includes(q)||v[2].toLowerCase().includes(q)) : null;
    const data=filtered||IVERBS_DATA;

    if(!data.length){
      const empty=document.createElement('div');
      empty.style.cssText='text-align:center;color:var(--text3);padding:24px;font-size:14px;';
      empty.textContent="Hech narsa topilmadi";
      listWrap.appendChild(empty);
      return;
    }

    if(q){
      // Qidiruv natijasi — harfsiz
      const tbl=ivMakeTable(data,false);
      listWrap.appendChild(tbl);
    } else {
      // Harflar bo'yicha guruhlash
      const groups={};
      IVERBS_DATA.forEach(v=>{
        const letter=v[0][0].toUpperCase();
        if(!groups[letter]) groups[letter]=[];
        groups[letter].push(v);
      });
      Object.keys(groups).sort().forEach(letter=>{
        const letHdr=document.createElement('div');
        letHdr.style.cssText='display:flex;align-items:center;gap:10px;margin:20px 0 8px;';
        letHdr.innerHTML=`<div style="width:32px;height:32px;border-radius:10px;background:var(--pdim);border:1px solid rgba(108,60,225,.3);display:flex;align-items:center;justify-content:center;font-size:15px;font-weight:900;color:var(--purple-light);">${letter}</div><div style="flex:1;height:1px;background:var(--border);"></div>`;
        listWrap.appendChild(letHdr);
        listWrap.appendChild(ivMakeTable(groups[letter],false));
      });
    }
  }

  function ivMakeTable(data, showHeader){
    const wrap=document.createElement('div');
    wrap.style.cssText='width:100%;border-radius:12px;overflow:hidden;border:1px solid var(--border);';
    const th=document.createElement('div');
    th.style.cssText='display:grid;grid-template-columns:1fr 1fr 1fr;background:var(--s3);padding:8px 12px;font-size:10px;font-weight:700;letter-spacing:.08em;color:var(--text2);text-transform:uppercase;';
    th.innerHTML='<div>Infinitive</div><div>V2</div><div>V3</div>';
    wrap.appendChild(th);
    data.forEach((v,i)=>{
      const row=document.createElement('div');
      row.style.cssText=`display:grid;grid-template-columns:1fr 1fr 1fr;padding:8px 12px;font-size:13px;border-top:1px solid var(--border);background:${i%2===0?'var(--s1)':'var(--s2)'};`;
      row.innerHTML=`<div style="font-weight:700;color:var(--text);">${v[0]}</div><div style="color:var(--accent);">${v[1]}</div><div style="color:var(--purple-light);">${v[2]}</div>`;
      wrap.appendChild(row);
    });
    return wrap;
  }

  renderList('');
  searchWrap.querySelector('#irv-search').addEventListener('input',e=>renderList(e.target.value));
}

function ivShowModes(gi){
  IV.groupIdx=gi;
  const g=IV_LETTER_GROUPS[gi];
  const bg=_IV_COLORS[gi%_IV_COLORS.length];
  $('irv-home').style.display='none';
  $('irv-modes').style.display='block';
  $('irv-group-name').innerHTML=`<span style="display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:12px;background:${bg};font-size:20px;font-weight:900;color:#fff;margin-right:10px;vertical-align:middle;">${g.letter}</span>${g.letter} harfi — ${g.words.length} ta fe'l`;
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
  const g=IV_LETTER_GROUPS[IV.groupIdx];
  IV.words=g.words.map(w=>({v1:w[0],v2:w[1],v3:w[2]}));
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
  IV.voiceStep='v2';
  $('iv-vtbox').textContent='V2 (Past Tense) ni aytib yuboring...';
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
      const fb=$('iv-v-fb');
      if(IV.voiceStep==='v2'){
        const v2ok=ivMatch(text,w.v2);
        IV._v2ok=v2ok;
        $('iv-v2-hint').textContent=w.v2;
        if(v2ok){
          fb.className='sp-feedback correct';
          fb.innerHTML=`✅ V2 to'g'ri! <b>${w.v2}</b> — endi V3 ni aytib yuboring`;
        } else {
          fb.className='sp-feedback wrong';
          fb.innerHTML=`❌ V2 xato. To'g'risi: <b>${w.v2}</b> — endi V3 ni aytib yuboring`;
          speak(ivNorm(w.v2));
        }
        fb.style.display='block';
        IV.voiceStep='v3';
        $('iv-vtbox').textContent='V3 (Past Participle) ni aytib yuboring...';
      } else {
        const v3ok=ivMatch(text,w.v3);
        const v2ok=IV._v2ok;
        const ok=v2ok&&v3ok;
        $('iv-v3-hint').textContent=w.v3;
        if(ok){
          IV.score++;
          fb.className='sp-feedback correct';
          fb.innerHTML=`✅ To'g'ri! <b>${w.v1}</b> → <b>${w.v2}</b> → <b>${w.v3}</b>`;
        } else {
          IV.wrong.push(w);
          fb.className='sp-feedback wrong';
          let msg='❌ ';
          if(!v2ok) msg+=`V2: <b>${w.v2}</b>  `;
          if(!v3ok) msg+=`V3: <b>${w.v3}</b>`;
          fb.innerHTML=msg;
          if(!v3ok) speak(ivNorm(w.v3));
        }
        fb.style.display='block';
        setTimeout(()=>{ IV.idx++; ivRenderVoiceCard(); }, 2200);
      }
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
  $('iv-sp-inp2').disabled=true; $('iv-sp-inp3').disabled=true;
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
  const field=_ivActiveField;
  const answer=field==='v2'?w.v2:w.v3;
  const inp=field==='v2'?$('iv-sp-inp2'):$('iv-sp-inp3');
  const pfx=field==='v2'?'iv2b':'iv3b';
  const norm=ivNorm(answer);
  const curLen=inp.value.replace(/ /g,'').length;
  if(curLen<norm.replace(/ /g,'').length){
    inp.value=norm.slice(0,curLen+1);
    ivUpdateBoxes(inp.value,answer,pfx);
    inp.focus();
  }
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
