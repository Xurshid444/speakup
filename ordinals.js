// ════════════════════════════════════════════════
// ORDINAL NUMBERS MODULE
// ════════════════════════════════════════════════

const ORDINALS_DATA = [
  ['1st',  'first'],
  ['2nd',  'second'],
  ['3rd',  'third'],
  ['4th',  'fourth'],
  ['5th',  'fifth'],
  ['6th',  'sixth'],
  ['7th',  'seventh'],
  ['8th',  'eighth'],
  ['9th',  'ninth'],
  ['10th', 'tenth'],
  ['11th', 'eleventh'],
  ['12th', 'twelfth'],
  ['13th', 'thirteenth'],
  ['14th', 'fourteenth'],
  ['15th', 'fifteenth'],
  ['16th', 'sixteenth'],
  ['17th', 'seventeenth'],
  ['18th', 'eighteenth'],
  ['19th', 'nineteenth'],
  ['20th', 'twentieth'],
  ['21st', 'twenty-first'],
  ['22nd', 'twenty-second'],
  ['23rd', 'twenty-third'],
  ['24th', 'twenty-fourth'],
  ['25th', 'twenty-fifth'],
  ['26th', 'twenty-sixth'],
  ['27th', 'twenty-seventh'],
  ['28th', 'twenty-eighth'],
  ['29th', 'twenty-ninth'],
  ['30th', 'thirtieth'],
  ['40th', 'fortieth'],
  ['50th', 'fiftieth'],
  ['60th', 'sixtieth'],
  ['70th', 'seventieth'],
  ['80th', 'eightieth'],
  ['90th', 'ninetieth'],
  ['100th', 'hundredth'],
  ['200th', 'two hundredth'],
  ['1,000th', 'one thousandth'],
  ['10,000th', 'ten thousandth'],
  ['100,000th', 'one hundred thousandth'],
  ['1,000,000th', 'one millionth'],
  ['10,000,000th', 'ten millionth'],
  ['100,000,000th', 'one hundred millionth'],
  ['1,000,000,000th', 'one billionth'],
];

const ORD = { mode: 'spell', idx: 0, score: 0, wrong: [], words: [] };

function ordInit() {
  ordRenderList();

  $('ord-voice-btn').addEventListener('click', () => ordStart('voice'));
  $('ord-spell-btn').addEventListener('click', () => ordStart('spell'));
  $('ord-back-home').addEventListener('click', ordGoHome);
  $('ord-next-btn').addEventListener('click', ordNext);
  $('ord-score-back').addEventListener('click', ordGoHome);
  $('ord-score-retry').addEventListener('click', () => ordStart(ORD.mode));
  $('ord-ans-input').addEventListener('keydown', e => { if (e.key === 'Enter') ordCheck(); });
  $('ord-check-btn').addEventListener('click', ordCheck);
  $('ord-play-btn').addEventListener('click', () => speak(ORDINALS_DATA[ORD.words[ORD.idx]][1]));
}

// ── Full list ──
function ordRenderList() {
  const wrap = $('ord-full-list');
  wrap.innerHTML = '';
  const spkSVG = `<svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11,5 6,9 2,9 2,15 6,15 11,19"/><path d="M15.54,8.46a5,5,0,0,1,0,7.07"/></svg>`;

  const tbl = document.createElement('div');
  tbl.style.cssText = 'border:1px solid var(--border);border-radius:12px;overflow:hidden;';

  const hdr = document.createElement('div');
  hdr.style.cssText = 'display:grid;grid-template-columns:100px 1fr 36px;background:var(--s3);padding:8px 14px;font-size:10px;font-weight:700;letter-spacing:.08em;color:var(--text2);text-transform:uppercase;';
  hdr.innerHTML = '<div>Raqam</div><div>So\'z</div><div></div>';
  tbl.appendChild(hdr);

  ORDINALS_DATA.forEach((item, i) => {
    const row = document.createElement('div');
    row.style.cssText = `display:grid;grid-template-columns:100px 1fr 36px;padding:10px 14px;border-top:1px solid var(--border);background:${i % 2 === 0 ? 'var(--s1)' : 'var(--s2)'};align-items:center;`;

    const numEl = document.createElement('span');
    numEl.style.cssText = 'font-size:17px;font-weight:700;color:var(--text);';
    numEl.textContent = item[0];

    const wordEl = document.createElement('span');
    wordEl.style.cssText = 'font-size:16px;color:var(--accent);';
    wordEl.textContent = item[1];

    const btn = document.createElement('button');
    btn.style.cssText = 'background:none;border:none;padding:4px;cursor:pointer;color:var(--text3);border-radius:6px;display:flex;align-items:center;justify-content:center;transition:color .15s;';
    btn.innerHTML = spkSVG;
    btn.addEventListener('mouseenter', () => btn.style.color = 'var(--accent)');
    btn.addEventListener('mouseleave', () => btn.style.color = 'var(--text3)');
    btn.addEventListener('click', () => {
      speak(item[1]);
      btn.style.color = 'var(--accent)';
      setTimeout(() => btn.style.color = 'var(--text3)', 1000);
    });

    row.appendChild(numEl);
    row.appendChild(wordEl);
    row.appendChild(btn);
    tbl.appendChild(row);
  });

  wrap.appendChild(tbl);
}

// ── Start game ──
function ordStart(mode) {
  ORD.mode = mode;
  ORD.words = ORDINALS_DATA.map((_, i) => i);
  // shuffle
  for (let i = ORD.words.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [ORD.words[i], ORD.words[j]] = [ORD.words[j], ORD.words[i]];
  }
  ORD.idx = 0; ORD.score = 0; ORD.wrong = [];
  $('ord-home').style.display = 'none';
  $('ord-score').style.display = 'none';
  $('ord-game').style.display = 'block';
  ordRenderCard();
}

function ordGoHome() {
  $('ord-game').style.display = 'none';
  $('ord-score').style.display = 'none';
  $('ord-home').style.display = 'block';
}

// ── Render card ──
function ordRenderCard() {
  const item = ORDINALS_DATA[ORD.words[ORD.idx]];
  const total = ORD.words.length;
  const prog = Math.round((ORD.idx / total) * 100);

  $('ord-progress-bar').style.width = prog + '%';
  $('ord-progress-txt').textContent = `${ORD.idx + 1} / ${total}`;
  $('ord-feedback').textContent = '';
  $('ord-feedback').style.color = '';
  $('ord-next-btn').style.display = 'none';
  $('ord-ans-input').value = '';
  $('ord-ans-input').disabled = false;
  $('ord-ans-input').style.borderColor = '';
  $('ord-check-btn').style.display = '';
  $('ord-play-btn').style.display = ORD.mode === 'voice' ? '' : 'none';

  if (ORD.mode === 'voice') {
    // Show number, hear → type the written word
    $('ord-card-label').textContent = 'Eshiting va yozing:';
    $('ord-card-main').textContent = item[0];
    $('ord-ans-input').placeholder = 'Masalan: twenty-first';
    setTimeout(() => speak(item[1]), 300);
  } else {
    // Show number, type the written word (no audio auto-play)
    $('ord-card-label').textContent = 'Qanday o\'qiladi? Yozing:';
    $('ord-card-main').textContent = item[0];
    $('ord-ans-input').placeholder = 'Masalan: twenty-first';
  }

  setTimeout(() => $('ord-ans-input').focus(), 100);
}

// ── Check answer ──
function ordCheck() {
  const item = ORDINALS_DATA[ORD.words[ORD.idx]];
  const correct = item[1].toLowerCase().trim();
  const typed = $('ord-ans-input').value.toLowerCase().trim();
  if (!typed) return;

  $('ord-ans-input').disabled = true;
  $('ord-check-btn').style.display = 'none';
  $('ord-next-btn').style.display = '';

  if (typed === correct) {
    ORD.score++;
    $('ord-feedback').textContent = '✓ To\'g\'ri!';
    $('ord-feedback').style.color = 'var(--green,#10b981)';
    $('ord-ans-input').style.borderColor = 'var(--green,#10b981)';
  } else {
    ORD.wrong.push(ORD.words[ORD.idx]);
    $('ord-feedback').textContent = `✗  To'g'risi: ${item[1]}`;
    $('ord-feedback').style.color = 'var(--red,#ef4444)';
    $('ord-ans-input').style.borderColor = 'var(--red,#ef4444)';
    speak(item[1]);
  }
}

// ── Next ──
function ordNext() {
  ORD.idx++;
  if (ORD.idx >= ORD.words.length) {
    ordShowScore();
  } else {
    ordRenderCard();
  }
}

// ── Score ──
function ordShowScore() {
  $('ord-game').style.display = 'none';
  $('ord-score').style.display = 'block';
  const pct = Math.round((ORD.score / ORD.words.length) * 100);
  $('ord-score-pct').textContent = pct + '%';
  $('ord-score-msg').textContent = scoreMsg(pct);
  $('ord-score-detail').textContent = `${ORD.score} / ${ORD.words.length} to'g'ri`;
  const wr = $('ord-wrong-list');
  wr.innerHTML = '';
  if (ORD.wrong.length) {
    wr.innerHTML = '<div style="font-size:13px;color:var(--text2);margin-bottom:8px;">Xato qilinganlar:</div>';
    ORD.wrong.forEach(wi => {
      const item = ORDINALS_DATA[wi];
      const d = document.createElement('div');
      d.style.cssText = 'display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--s2);border-radius:8px;margin-bottom:6px;';
      d.innerHTML = `<span style="font-weight:700;color:var(--text)">${item[0]}</span><span style="color:var(--accent)">${item[1]}</span>`;
      wr.appendChild(d);
    });
  }
}
