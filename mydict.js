var MYD_PACKETS_KEY = 'speakup_myd_packets';
var MYD_PENDING_KEY = 'speakup_myd_pending';

function mydGetPackets(){ try{ return JSON.parse(localStorage.getItem(MYD_PACKETS_KEY)||'[]'); }catch(e){ return []; } }
function mydSavePackets(arr){ localStorage.setItem(MYD_PACKETS_KEY, JSON.stringify(arr)); }
function mydGetPending(){ try{ return JSON.parse(localStorage.getItem(MYD_PENDING_KEY)||'[]'); }catch(e){ return []; } }
function mydSavePending(arr){ localStorage.setItem(MYD_PENDING_KEY, JSON.stringify(arr)); }

function mydShuffleArr(arr){
  for(var i=arr.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=arr[i];arr[i]=arr[j];arr[j]=t;}
  return arr;
}

function mydAddWords(newWords){
  var packets = mydGetPackets();
  var pending = mydGetPending();
  var added = 0;
  var allSet = new Set(
    packets.flatMap(function(p){ return p.words.map(function(w){ return w.en.toLowerCase(); }); })
    .concat(pending.map(function(w){ return w.en.toLowerCase(); }))
  );
  newWords.forEach(function(w){
    if(w.en && w.uz && !allSet.has(w.en.toLowerCase())){
      pending.push({en:w.en, uz:w.uz});
      allSet.add(w.en.toLowerCase());
      added++;
    }
  });
  while(pending.length >= 20){
    var chunk = pending.splice(0, 20);
    var num = packets.length + 1;
    var now = new Date();
    var date = now.getDate()+'.'+(now.getMonth()+1)+'.'+now.getFullYear();
    packets.push({id:Date.now(), name:'Paket '+num, date:date, words:chunk});
  }
  mydSavePackets(packets);
  mydSavePending(pending);
  return added;
}

function mydRenderPackets(){
  var packets = mydGetPackets();
  var pending = mydGetPending();
  var wrap = $('myd-packets-list');
  var empty = $('myd-empty');
  if(!wrap) return;
  wrap.innerHTML = '';

  if(packets.length === 0 && pending.length === 0){
    if(empty) empty.style.display = 'block';
    return;
  }
  if(empty) empty.style.display = 'none';

  packets.forEach(function(pkt, idx){
    var div = document.createElement('div');
    div.className = 'myd-packet';
    var preview = pkt.words.slice(0,4).map(function(w){ return w.en; }).join(', ') + (pkt.words.length>4?'...':'');
    div.innerHTML =
      '<div class="myd-packet-icon">📦</div>' +
      '<div class="myd-packet-body">' +
        '<div class="myd-packet-name">'+pkt.name+'</div>' +
        '<div class="myd-packet-meta">'+pkt.words.length+' ta so\'z · '+pkt.date+'</div>' +
        '<div class="myd-packet-words">'+preview+'</div>' +
      '</div>' +
      '<div class="myd-packet-actions">' +
        '<button class="myd-pk-play" onclick="startMydGame('+idx+')">▶ Boshlash</button>' +
        '<button class="myd-pk-icon-btn myd-pk-edit" onclick="mydOpenEdit('+idx+')" title="Tahrirlash">✏️</button>' +
        '<button class="myd-pk-icon-btn myd-pk-del" onclick="mydDeletePacket('+idx+')" title="O\'chirish">🗑</button>' +
      '</div>';
    wrap.appendChild(div);
  });

  if(pending.length > 0){
    var div2 = document.createElement('div');
    div2.className = 'myd-packet';
    div2.style.cssText = 'border-style:dashed;opacity:.85;';
    var preview2 = pending.slice(0,4).map(function(w){ return w.en; }).join(', ') + (pending.length>4?'...':'');
    var canPlay = pending.length >= 3;
    div2.innerHTML =
      '<div class="myd-packet-icon" style="background:rgba(255,209,102,.1);border-color:rgba(255,209,102,.2);">⏳</div>' +
      '<div class="myd-packet-body">' +
        '<div class="myd-packet-name" style="color:var(--gold)">To\'liqlanmoqda</div>' +
        '<div class="myd-packet-meta">'+pending.length+' / 20 so\'z · '+(20-pending.length)+' ta qoldi</div>' +
        '<div class="myd-packet-words">'+preview2+'</div>' +
      '</div>' +
      '<div class="myd-packet-actions">' +
        '<button class="myd-pk-play" onclick="startMydGamePending()" style="background:linear-gradient(120deg,var(--gold),#f59e0b);" '+(canPlay?'':'disabled')+'>' +
          (canPlay ? '▶ Boshlash' : '⏳ Kam') +
        '</button>' +
        '<button class="myd-pk-icon-btn myd-pk-del" onclick="mydClearPending()" title="Tozalash">🗑</button>' +
      '</div>';
    wrap.appendChild(div2);
  }
}

function mydDeletePacket(idx){
  if(!confirm('Bu paketni o\'chirasizmi?')) return;
  var packets = mydGetPackets();
  packets.splice(idx, 1);
  packets.forEach(function(p,i){ if(p.name.indexOf('Paket ')===0) p.name='Paket '+(i+1); });
  mydSavePackets(packets);
  mydRenderPackets();
}

function mydClearPending(){
  if(!confirm('To\'liqlanmagan so\'zlarni o\'chirasizmi?')) return;
  localStorage.removeItem(MYD_PENDING_KEY);
  mydRenderPackets();
}

// Fayl yuklash
$('myd-file').addEventListener('change', function(){
  var file = this.files[0]; if(!file) return;
  var self = this;

  // Progress UI
  function setProgress(pct, title, sub){
    var wrap = $('myd-progress-wrap');
    var bar = $('myd-progress-bar');
    var txt = $('myd-progress-txt');
    var icon = $('myd-upload-icon');
    var titleEl = $('myd-upload-title');
    var subEl = $('myd-upload-sub');
    if(wrap) wrap.style.display = pct >= 0 && pct < 100 ? 'block' : 'none';
    if(bar) bar.style.width = pct + '%';
    if(txt) txt.textContent = pct + '%';
    if(title && titleEl) titleEl.textContent = title;
    if(sub && subEl) subEl.textContent = sub;
    if(icon) icon.textContent = pct >= 100 ? '✅' : (pct > 0 ? '⏳' : '📂');
  }

  setProgress(10, 'Fayl o\'qilmoqda...', file.name);

  var reader = new FileReader();

  reader.onprogress = function(e){
    if(e.lengthComputable){
      var pct = Math.round((e.loaded / e.total) * 80); // 80% gacha — parse uchun joy
      setProgress(10 + pct, 'Fayl o\'qilmoqda...', Math.round(e.loaded/1024)+'KB / '+Math.round(e.total/1024)+'KB');
    }
  };

  reader.onload = function(e){
    setProgress(85, 'So\'zlar tahlil qilinmoqda...', '');

    setTimeout(function(){
      var text = e.target.result;
      var lines = text.split(/\r?\n/).filter(function(l){ return l.trim() && !l.startsWith('#'); });
      var words = [];
      var skipped = 0;

      lines.forEach(function(line){
        // Birinchi ajratuvchini aniqlash: , yoki /
        var sep = line.indexOf(',') !== -1 ? ',' : (line.indexOf('/') !== -1 ? '/' : null);
        if(!sep){ skipped++; return; }

        var firstSep = line.indexOf(sep);
        var en = line.slice(0, firstSep).trim();
        var uz = line.slice(firstSep + 1).trim();

        if(en && uz && en.length > 0 && uz.length > 0){
          words.push({en:en, uz:uz});
        } else {
          skipped++;
        }
      });

      setProgress(95, 'Saqlanmoqda...', words.length + ' ta so\'z topildi');

      setTimeout(function(){
        var added = mydAddWords(words);
        var packets = mydGetPackets(), pending = mydGetPending();
        mydRenderPackets();

        setProgress(100, '', '');
        setTimeout(function(){
          setProgress(-1, 'Fayl tanlang yoki bu yerga tashlang', '.txt yoki .csv · ajratuvchi: apple,olma yoki apple/olma');
        }, 2000);

        var msg = '✅ '+added+' ta yangi so\'z';
        if(skipped > 0) msg += ' · '+skipped+' ta o\'tkazib yuborildi';
        msg += ' · '+packets.length+' paket';
        if(pending.length > 0) msg += ' · '+pending.length+' kutmoqda';
        showToast(msg);
        self.value = '';
      }, 100);
    }, 50);
  };

  reader.onerror = function(){
    setProgress(-1, 'Xato yuz berdi!', 'Qaytadan urinib ko\'ring');
    showToast('❌ Fayl o\'qishda xato');
  };

  reader.readAsText(file, 'UTF-8');
});

// Drag & drop
var dropArea = $('myd-drop');
dropArea.addEventListener('dragover', function(e){ e.preventDefault(); dropArea.classList.add('drag'); });
dropArea.addEventListener('dragleave', function(){ dropArea.classList.remove('drag'); });
dropArea.addEventListener('drop', function(e){
  e.preventDefault(); dropArea.classList.remove('drag');
  var file = e.dataTransfer.files[0]; if(!file) return;
  var dt = new DataTransfer(); dt.items.add(file);
  $('myd-file').files = dt.files;
  $('myd-file').dispatchEvent(new Event('change'));
});

// Qo'lda so'z qo'shish
$('myd-add-btn').addEventListener('click', function(){
  var en = $('myd-en-inp').value.trim(), uz = $('myd-uz-inp').value.trim();
  if(!en || !uz){ showToast('⚠️ Ikkala maydonni to\'ldiring'); return; }
  var added = mydAddWords([{en:en, uz:uz}]);
  if(!added){ showToast('⚠️ Bu so\'z allaqachon bor'); return; }
  $('myd-en-inp').value = ''; $('myd-uz-inp').value = ''; $('myd-en-inp').focus();
  var pending = mydGetPending();
  mydRenderPackets();
  showToast(pending.length > 0 ? '✅ Qo\'shildi · '+(20-pending.length)+' ta qoldi' : '✅ Yangi paket yaratildi!');
});
$('myd-en-inp').addEventListener('keydown', function(e){ if(e.key==='Enter') $('myd-uz-inp').focus(); });
$('myd-uz-inp').addEventListener('keydown', function(e){ if(e.key==='Enter') $('myd-add-btn').click(); });

// ── SPELLING O'YINI ──
var MYD = { words:[], idx:0, score:0, wrong:[], currentPktIdx:-1 };

function startMydGame(pktIdx){
  var pkt = mydGetPackets()[pktIdx];
  if(!pkt){ showToast('⚠️ Paket topilmadi'); return; }
  MYD.currentPktIdx = pktIdx;
  MYD.words = mydShuffleArr(pkt.words.slice());
  MYD.idx=0; MYD.score=0; MYD.wrong=[];
  $('myd-home').style.display='none';
  $('myd-score').style.display='none';
  $('myd-game').style.display='block';
  mydRenderCard();
}

function startMydGamePending(){
  var pending = mydGetPending();
  if(pending.length < 3){ showToast('⚠️ Kamida 3 ta so\'z kerak'); return; }
  MYD.currentPktIdx = -1;
  MYD.words = mydShuffleArr(pending.slice());
  MYD.idx=0; MYD.score=0; MYD.wrong=[];
  $('myd-home').style.display='none';
  $('myd-score').style.display='none';
  $('myd-game').style.display='block';
  mydRenderCard();
}

function mydRenderCard(){
  if(MYD.idx >= MYD.words.length){ mydShowScore(); return; }
  var w = MYD.words[MYD.idx];
  var answer = w.en.toLowerCase();
  var total = MYD.words.length;
  $('myd-prog-txt').textContent = (MYD.idx+1)+' / '+total;
  $('myd-prog-fill').style.width = (MYD.idx/total*100)+'%';
  $('myd-sp-feedback').style.display = 'none';
  // So'zlarni bo'sh joy bo'yicha ajratib, har birini alohida blok qilamiz
  var charIdx = 0;
  var wordBlocks = answer.split(' ').map(function(word){
    var letterDivs = word.split('').map(function(ch){
      var i = charIdx;
      var isFirst = (charIdx === 0);
      charIdx++;
      return '<div class="sp-box'+(isFirst?' active':'')+'" id="myd-box-'+i+'"></div>';
    }).join('');
    charIdx++; // bo'sh joy uchun index oshirish
    return '<div class="myd-word-group">'+letterDivs+'</div>';
  }).join('<div class="myd-word-gap"></div>');

  $('myd-sp-wrap').innerHTML =
    '<div class="myd-word-emoji">📝</div>' +
    '<div class="sp-uz-word">'+w.uz+'</div>' +
    '<div class="myd-letters-wrap" id="myd-sp-letters">'+wordBlocks+'</div>';
  var inp = $('myd-sp-input');
  inp.value = ''; inp.disabled = false;
  var cb = $('myd-check-btn'); if(cb) cb.disabled = false;
  setTimeout(function(){ inp.focus(); }, 80);
}

$('myd-sp-input').addEventListener('input', function(){
  var w = MYD.words[MYD.idx]; if(!w) return;
  var answer = w.en.toLowerCase();
  var typed = this.value.toLowerCase();
  // typed da bo'sh joy yo'q, answer da bor — moslashtirish
  var typedNoSpace = typed.replace(/ /g,'');
  var answerNoSpace = answer.replace(/ /g,'');
  // answer indeksini bo'sh joy hisobga olib yuramiz
  var tIdx = 0; // typed (bo'sh joysiz) indeksi
  for(var i=0; i<answer.length; i++){
    if(answer[i] === ' ') continue; // bo'sh joy katagi yo'q
    var box = document.getElementById('myd-box-'+i); if(!box) continue;
    if(tIdx < typedNoSpace.length){
      box.textContent = typedNoSpace[tIdx];
      box.className = 'sp-box ' + (typedNoSpace[tIdx]===answerNoSpace[tIdx]?'correct':'wrong');
    } else {
      box.textContent = '';
      box.className = 'sp-box' + (tIdx===typedNoSpace.length?' active':'');
    }
    tIdx++;
  }
});

$('myd-sp-input').addEventListener('keydown', function(e){ if(e.key==='Enter') mydCheck(); });

function mydSpeakWord(word, onDone){
  if(!window.speechSynthesis){ setTimeout(onDone, 300); return; }
  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(word);
  // Sozlamalarda tanlangan ovoz va tezlikni ishlatamiz
  utter.lang = (typeof S !== 'undefined' && S.accent) ? S.accent : 'en-US';
  utter.rate = (typeof S !== 'undefined' && S.speed)  ? S.speed  : 0.85;
  utter.pitch = 1;
  var voices = window.speechSynthesis.getVoices();
  // 1. Sozlamalarda tanlangan ovoz (S.pickedVoice)
  var v = null;
  if(typeof S !== 'undefined' && S.pickedVoice){
    v = voices.find(function(x){ return x.name === S.pickedVoice.name; });
  }
  // 2. Tanlangan ovoz yo'q bo'lsa — eng yaxshi ingliz ovozini topamiz
  if(!v) v = voices.find(function(x){ return x.lang==='en-US' && x.name.indexOf('Google')!==-1; });
  if(!v) v = voices.find(function(x){ return x.lang===utter.lang; });
  if(!v) v = voices.find(function(x){ return x.lang.indexOf('en')===0; });
  if(v) utter.voice = v;
  var done = false;
  utter.onend  = function(){ if(!done){ done=true; setTimeout(onDone, 350); } };
  utter.onerror = function(){ if(!done){ done=true; setTimeout(onDone, 300); } };
  setTimeout(function(){ if(!done){ done=true; onDone(); } }, 4000);
  window.speechSynthesis.speak(utter);
}

function mydCheck(){
  if(MYD.idx >= MYD.words.length) return;
  var w = MYD.words[MYD.idx];
  var answer = w.en.toLowerCase();
  var typed = $('myd-sp-input').value.trim().toLowerCase();
  if(!typed) return;
  var fb = $('myd-sp-feedback');
  $('myd-sp-input').disabled = true;
  var cb = $('myd-check-btn'); if(cb) cb.disabled = true;
  // Bo'sh joysiz solishtirish — foydalanuvchi "twohundred" yozsa ham to'g'ri
  var answerClean = answer.replace(/ /g,'');
  var typedClean = typed.replace(/ /g,'');

  if(typedClean === answerClean){
    MYD.score++;
    fb.className='sp-feedback correct';
    fb.innerHTML='✅ To\'g\'ri! &nbsp;<span style="color:var(--text2);font-size:12px;">🔊 talaffuz...</span>';
    fb.style.display='block';
    setTimeout(function(){
      mydSpeakWord(w.en, function(){ $('myd-sp-input').disabled=false; MYD.idx++; mydRenderCard(); });
    }, 400);
  } else {
    MYD.wrong.push({uz:w.uz, en:w.en, typed:typed});
    fb.className='sp-feedback wrong';
    fb.innerHTML='❌ Noto\'g\'ri. To\'g\'ri: <b>'+w.en+'</b> &nbsp;<span style="color:var(--text2);font-size:12px;">🔊 talaffuz...</span>';
    fb.style.display='block';
    answer.split('').forEach(function(ch,i){
      if(ch===' ') return; // bo'sh joy katagi yo'q
      var box=document.getElementById('myd-box-'+i);
      if(box){ box.textContent=ch; box.className='sp-box hint'; }
    });
    setTimeout(function(){
      mydSpeakWord(w.en, function(){ $('myd-sp-input').disabled=false; $('myd-sp-input').value=''; MYD.idx++; mydRenderCard(); });
    }, 700);
  }
}

$('myd-hint-btn').addEventListener('click', function(){
  var w=MYD.words[MYD.idx]; if(!w) return;
  var inp=$('myd-sp-input');
  var answerNoSp = w.en.toLowerCase().replace(/ /g,'');
  var curNoSp = inp.value.replace(/ /g,'');
  if(curNoSp.length < answerNoSp.length){
    inp.value = answerNoSp.slice(0, curNoSp.length+1);
    inp.dispatchEvent(new Event('input'));
  }
  // Cursor ni oxiriga qo'yamiz — yozganda o'ng tomonga qo'shilsin
  inp.focus();
  var len = inp.value.length;
  inp.setSelectionRange(len, len);
});

$('myd-skip-btn').addEventListener('click', function(){
  var w=MYD.words[MYD.idx]; if(!w) return;
  MYD.wrong.push({uz:w.uz, en:w.en, typed:"(o'tkazildi)"});
  $('myd-sp-input').disabled=true;
  mydSpeakWord(w.en, function(){ $('myd-sp-input').disabled=false; MYD.idx++; mydRenderCard(); });
});

$('myd-back-btn').addEventListener('click', function(){
  window.speechSynthesis && window.speechSynthesis.cancel();
  $('myd-game').style.display='none'; $('myd-home').style.display='block';
});
$('myd-score-back').addEventListener('click', function(){ $('myd-score').style.display='none'; $('myd-home').style.display='block'; });
$('myd-retry-btn').addEventListener('click', function(){
  if(MYD.currentPktIdx >= 0) startMydGame(MYD.currentPktIdx); else startMydGamePending();
});

function mydShowScore(){
  $('myd-game').style.display='none'; $('myd-score').style.display='block';
  var total=MYD.words.length;
  $('myd-sc-num').textContent=MYD.score;
  $('myd-sc-total').textContent='/ '+total+' ta so\'z';
  $('myd-sc-msg').textContent=scoreMsg(Math.round(MYD.score/total*100));
  var wl=$('myd-wrong-list'); wl.innerHTML='';
  MYD.wrong.forEach(function(w){
    var d=document.createElement('div');
    d.style.cssText='background:var(--rdim);border:1px solid rgba(255,90,90,.2);border-radius:10px;padding:9px 12px;font-size:13px;';
    d.innerHTML='<span style="color:var(--text2)">'+w.uz+'</span> → <b style="color:var(--red)">'+w.typed+'</b> → <b style="color:var(--green)">'+w.en+'</b>';
    wl.appendChild(d);
  });
  $('myd-prog-fill').style.width='100%';
}

// ── TAHRIRLASH MODAL ──
var MYD_EDIT_IDX = -1;

function mydOpenEdit(pktIdx){
  MYD_EDIT_IDX = pktIdx;
  var pkt = mydGetPackets()[pktIdx]; if(!pkt) return;
  var list = $('myd-edit-list'); list.innerHTML='';
  pkt.words.forEach(function(w,i){
    var row=document.createElement('div'); row.className='myd-edit-row';
    row.innerHTML=
      '<span style="min-width:20px;color:var(--text3);font-size:12px;text-align:right;">'+(i+1)+'</span>'+
      '<input class="myd-edit-inp" data-field="en" value="'+w.en.replace(/"/g,'&quot;')+'" placeholder="English" autocorrect="off" spellcheck="false">'+
      '<input class="myd-edit-inp" data-field="uz" value="'+w.uz.replace(/"/g,'&quot;')+'" placeholder="O\'zbekcha">'+
      '<button class="myd-edit-del" onclick="this.closest(\'.myd-edit-row\').remove();mydReindex()">✕</button>';
    list.appendChild(row);
  });
  $('myd-edit-modal').style.display='flex';
  document.body.style.overflow='hidden';
}

function mydReindex(){
  $('myd-edit-list').querySelectorAll('.myd-edit-row').forEach(function(r,i){
    r.querySelector('span').textContent=i+1;
  });
}

function mydCloseEdit(){
  $('myd-edit-modal').style.display='none';
  document.body.style.overflow='';
}

function mydSaveEdit(){
  if(MYD_EDIT_IDX<0) return;
  var packets=mydGetPackets(), pkt=packets[MYD_EDIT_IDX]; if(!pkt) return;
  var words=[];
  $('myd-edit-list').querySelectorAll('.myd-edit-row').forEach(function(r){
    var en=r.querySelector('[data-field="en"]').value.trim();
    var uz=r.querySelector('[data-field="uz"]').value.trim();
    if(en&&uz) words.push({en:en,uz:uz});
  });
  if(words.length===0){ showToast('⚠️ Kamida 1 ta so\'z bo\'lishi kerak'); return; }
  pkt.words=words;
  mydSavePackets(packets);
  mydCloseEdit();
  mydRenderPackets();
  showToast('✅ Saqlandi — '+words.length+' ta so\'z');
}

document.addEventListener('keydown', function(e){
  if(e.key==='Escape' && $('myd-edit-modal') && $('myd-edit-modal').style.display!=='none') mydCloseEdit();
});

mydRenderPackets();
