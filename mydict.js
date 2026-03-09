var MYD_PACKETS_KEY = 'speakup_myd_packets';
function mydCap(s){return s?s.charAt(0).toUpperCase()+s.slice(1):s;}

// ── So'zlarni words.txt dan yuklab, paketlarga bo'lib saqlash ──
function mydLoadWordsFromFile(){
  var loading = document.getElementById('myd-loading');
  var empty   = document.getElementById('myd-empty');
  var statusTxt = document.getElementById('myd-status-text');

  function showLoading(){ if(loading) loading.style.display='block'; if(empty) empty.style.display='none'; }
  function showEmpty(msg){
    if(loading) loading.style.display='none';
    if(empty){ empty.style.display='block'; empty.querySelector('p').textContent = msg||'So\'z topilmadi'; }
    if(statusTxt) statusTxt.textContent = msg||'So\'z topilmadi';
  }
  function showDone(n, p){
    if(loading) loading.style.display='none';
    if(empty) empty.style.display='none';
    if(statusTxt) statusTxt.textContent = n+' ta so\'z · '+p+' ta paket tayyor';
  }

  showLoading();

  fetch('words.txt?v='+Date.now())
    .then(function(r){
      if(!r.ok) throw new Error('words.txt topilmadi ('+r.status+')');
      return r.text();
    })
    .then(function(text){
      // Faylni parse qilish
      var lines = text.split(/\r?\n/).filter(function(l){ return l.trim() && !l.trim().startsWith('#'); });
      var words = [];
      lines.forEach(function(line){
        var sep = line.indexOf(',') !== -1 ? ',' : (line.indexOf('/') !== -1 ? '/' : null);
        if(!sep) return;
        var firstSep = line.indexOf(sep);
        var en = line.slice(0, firstSep).trim();
        var uz = line.slice(firstSep + 1).trim();
        if(en && uz) words.push({en:en, uz:uz});
      });

      if(words.length === 0){ showEmpty('words.txt bo\'sh'); return; }

      // Paketlarga bo\'lish (har 20 tadan)
      var packets = [];
      for(var i=0; i<words.length; i+=20){
        var chunk = words.slice(i, i+20);
        var num = packets.length + 1;
        packets.push({
          id: num,
          name: 'Paket ' + num,
          date: '',
          words: chunk
        });
      }
      // Oxirgi paket 3 tadan kam bo'lsa oldingi bilan birlashtir
      if(packets.length > 1 && packets[packets.length-1].words.length < 3){
        var last = packets.pop().words;
        packets[packets.length-1].words = packets[packets.length-1].words.concat(last);
      }

      localStorage.setItem(MYD_PACKETS_KEY, JSON.stringify(packets));
      showDone(words.length, packets.length);
      mydRenderPackets();
    })
    .catch(function(err){
      console.warn('words.txt yuklanmadi:', err);
      showEmpty('words.txt topilmadi');
      mydRenderPackets();
    });
}

function mydGetPackets(){ try{ return JSON.parse(localStorage.getItem(MYD_PACKETS_KEY)||'[]'); }catch(e){ return []; } }
function mydSavePackets(arr){ localStorage.setItem(MYD_PACKETS_KEY, JSON.stringify(arr)); }

function mydShuffleArr(arr){
  for(var i=arr.length-1;i>0;i--){var j=Math.floor(Math.random()*(i+1));var t=arr[i];arr[i]=arr[j];arr[j]=t;}
  return arr;
}

function mydRenderPackets(){
  var packets = mydGetPackets();
  var wrap = document.getElementById('myd-packets-list');
  if(!wrap) return;
  wrap.innerHTML = '';
  if(packets.length === 0) return;

  packets.forEach(function(pkt, idx){
    var div = document.createElement('div');
    div.className = 'myd-packet';
    var preview = pkt.words.slice(0,4).map(function(w){ return w.en; }).join(', ') + (pkt.words.length>4?'...':'');
    div.innerHTML =
      '<div class="myd-packet-icon">📦</div>' +
      '<div class="myd-packet-body">' +
        '<div class="myd-packet-name">'+pkt.name+'</div>' +
        '<div class="myd-packet-meta">'+pkt.words.length+' ta so\'z</div>' +
        '<div class="myd-packet-words">'+preview+'</div>' +
      '</div>' +
      '<div class="myd-packet-actions">' +
        '<button class="myd-pk-play" onclick="startMydGame('+idx+')">▶ Boshlash</button>' +
      '</div>';
    wrap.appendChild(div);
  });
}

// ── SPELLING O'YINI ──
var MYD = { words:[], idx:0, score:0, wrong:[], currentPktIdx:-1 };

function startMydGame(pktIdx){
  var pkt = mydGetPackets()[pktIdx];
  if(!pkt){ showToast('⚠️ Paket topilmadi'); return; }
  MYD.currentPktIdx = pktIdx;
  MYD.words = mydShuffleArr(pkt.words.slice());
  MYD.idx=0; MYD.score=0; MYD.wrong=[];
  document.getElementById('myd-home').style.display='none';
  document.getElementById('myd-score').style.display='none';
  document.getElementById('myd-game').style.display='block';
  mydRenderCard();
}

function mydRenderCard(){
  if(MYD.idx >= MYD.words.length){ mydShowScore(); return; }
  var w = MYD.words[MYD.idx];
  var answer = w.en.toLowerCase();
  var total = MYD.words.length;
  document.getElementById('myd-prog-txt').textContent = (MYD.idx+1)+' / '+total;
  document.getElementById('myd-prog-fill').style.width = (MYD.idx/total*100)+'%';
  document.getElementById('myd-sp-feedback').style.display = 'none';
  var charIdx = 0;
  var wordBlocks = answer.split(' ').map(function(word){
    var letterDivs = word.split('').map(function(ch){
      var i = charIdx;
      var isFirst = (charIdx === 0);
      charIdx++;
      return '<div class="sp-box'+(isFirst?' active sp-cursor':'')+'" id="myd-box-'+i+'"></div>';
    }).join('');
    charIdx++;
    return '<div class="myd-word-group">'+letterDivs+'</div>';
  }).join('<div class="myd-word-gap"></div>');

  document.getElementById('myd-sp-wrap').innerHTML =
    '<div class="myd-word-emoji">📝</div>' +
    '<div class="sp-uz-word">'+mydCap(w.uz)+'</div>' +
    '<div class="myd-letters-wrap" id="myd-sp-letters">'+wordBlocks+'</div>';
  var inp = document.getElementById('myd-sp-input');
  inp.value = ''; inp.disabled = false;
  var cb = document.getElementById('myd-check-btn'); if(cb) cb.disabled = false;
  setTimeout(function(){
    inp.focus();
    setTimeout(function(){
      var letters = document.getElementById('myd-sp-letters');
      if(letters) letters.scrollIntoView({behavior:'smooth', block:'center'});
    }, 400);
  }, 80);
}

document.getElementById('myd-sp-input').addEventListener('input', function(){
  var w = MYD.words[MYD.idx]; if(!w) return;
  var answer = w.en.toLowerCase();
  var typed = this.value.toLowerCase();
  var typedNoSpace = typed.replace(/ /g,'');
  var answerNoSpace = answer.replace(/ /g,'');
  var tIdx = 0;
  for(var i=0; i<answer.length; i++){
    if(answer[i] === ' ') continue;
    var box = document.getElementById('myd-box-'+i); if(!box) continue;
    if(tIdx < typedNoSpace.length){
      box.textContent = typedNoSpace[tIdx];
      box.className = 'sp-box ' + (typedNoSpace[tIdx]===answerNoSpace[tIdx]?'correct':'wrong');
    } else {
      box.textContent = '';
      box.className = 'sp-box' + (tIdx===typedNoSpace.length?' active sp-cursor':'');
    }
    tIdx++;
  }
});

document.getElementById('myd-sp-input').addEventListener('keydown', function(e){
  if(e.key==='Enter') mydCheck();
});
// Android composing (Samsung klaviatura va boshqalar) uchun
document.getElementById('myd-sp-input').addEventListener('compositionend', function(){
  var ev = new Event('input',{bubbles:true});
  document.getElementById('myd-sp-input').dispatchEvent(ev);
});

function mydSpeakWord(word, onDone){
  if(!window.speechSynthesis){ setTimeout(onDone, 300); return; }
  window.speechSynthesis.cancel();
  var utter = new SpeechSynthesisUtterance(word);
  utter.lang = (typeof S !== 'undefined' && S.accent) ? S.accent : 'en-US';
  utter.rate = (typeof S !== 'undefined' && S.speed)  ? S.speed  : 0.85;
  utter.pitch = 1;
  var voices = window.speechSynthesis.getVoices();
  var v = null;
  if(typeof S !== 'undefined' && S.pickedVoice){
    v = voices.find(function(x){ return x.name === S.pickedVoice.name; });
  }
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
  var typed = document.getElementById('myd-sp-input').value.trim().toLowerCase();
  if(!typed) return;
  var fb = document.getElementById('myd-sp-feedback');
  document.getElementById('myd-sp-input').disabled = true;
  var cb = document.getElementById('myd-check-btn'); if(cb) cb.disabled = true;
  var answerClean = answer.replace(/ /g,'');
  var typedClean = typed.replace(/ /g,'');

  if(typedClean === answerClean){
    MYD.score++;
    fb.className='sp-feedback correct';
    fb.innerHTML='✅ To\'g\'ri! &nbsp;<span style="color:var(--text2);font-size:12px;">🔊 talaffuz...</span>';
    fb.style.display='block';
    setTimeout(function(){
      mydSpeakWord(w.en, function(){ document.getElementById('myd-sp-input').disabled=false; MYD.idx++; mydRenderCard(); });
    }, 400);
  } else {
    MYD.wrong.push({uz:w.uz, en:w.en, typed:typed});
    fb.className='sp-feedback wrong';
    fb.innerHTML='❌ Noto\'g\'ri. To\'g\'ri: <b>'+w.en+'</b> &nbsp;<span style="color:var(--text2);font-size:12px;">🔊 talaffuz...</span>';
    fb.style.display='block';
    answer.split('').forEach(function(ch,i){
      if(ch===' ') return;
      var box=document.getElementById('myd-box-'+i);
      if(box){ box.textContent=ch; box.className='sp-box hint'; }
    });
    setTimeout(function(){
      mydSpeakWord(w.en, function(){ document.getElementById('myd-sp-input').disabled=false; document.getElementById('myd-sp-input').value=''; MYD.idx++; mydRenderCard(); });
    }, 700);
  }
}

document.getElementById('myd-hint-btn').addEventListener('click', function(){
  var w=MYD.words[MYD.idx]; if(!w) return;
  var inp=document.getElementById('myd-sp-input');
  var answerNoSp = w.en.toLowerCase().replace(/ /g,'');
  var curNoSp = inp.value.replace(/ /g,'');
  if(curNoSp.length < answerNoSp.length){
    inp.value = answerNoSp.slice(0, curNoSp.length+1);
    inp.dispatchEvent(new Event('input'));
  }
  inp.focus();
  var len = inp.value.length;
  inp.setSelectionRange(len, len);
});

document.getElementById('myd-skip-btn').addEventListener('click', function(){
  var w=MYD.words[MYD.idx]; if(!w) return;
  MYD.wrong.push({uz:w.uz, en:w.en, typed:"(o'tkazildi)"});
  document.getElementById('myd-sp-input').disabled=true;
  mydSpeakWord(w.en, function(){ document.getElementById('myd-sp-input').disabled=false; MYD.idx++; mydRenderCard(); });
});

document.getElementById('myd-back-btn').addEventListener('click', function(){
  window.speechSynthesis && window.speechSynthesis.cancel();
  document.getElementById('myd-game').style.display='none';
  document.getElementById('myd-home').style.display='block';
});
document.getElementById('myd-score-back').addEventListener('click', function(){
  document.getElementById('myd-score').style.display='none';
  document.getElementById('myd-home').style.display='block';
});
document.getElementById('myd-retry-btn').addEventListener('click', function(){
  if(MYD.currentPktIdx >= 0) startMydGame(MYD.currentPktIdx);
});

function mydShowScore(){
  document.getElementById('myd-game').style.display='none';
  document.getElementById('myd-score').style.display='block';
  var total=MYD.words.length;
  document.getElementById('myd-sc-num').textContent=MYD.score;
  document.getElementById('myd-sc-total').textContent='/ '+total+' ta so\'z';
  document.getElementById('myd-sc-msg').textContent=scoreMsg(Math.round(MYD.score/total*100));
  var wl=document.getElementById('myd-wrong-list'); wl.innerHTML='';
  MYD.wrong.forEach(function(w){
    var d=document.createElement('div');
    d.style.cssText='background:var(--rdim);border:1px solid rgba(255,90,90,.2);border-radius:10px;padding:9px 12px;font-size:13px;';
    d.innerHTML='<span style="color:var(--text2)">'+mydCap(w.uz)+'</span> → <b style="color:var(--red)">'+w.typed+'</b> → <b style="color:var(--green)">'+w.en+'</b>';
    wl.appendChild(d);
  });
  document.getElementById('myd-prog-fill').style.width='100%';
}

// Sayt ochilganda avtomatik yuklash
mydLoadWordsFromFile();
