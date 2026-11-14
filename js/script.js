const $ = id => document.getElementById(id);
const HEART = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.5 5.8 4.5c2.2 0 3.6 1.2 4.2 2.3.6-1.1 2-2.3 4.2-2.3 3.8 0 5.5 3.9 3.8 7.3C19.500 16.400 12 21 12 21z"/></svg>';
const IMG_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>';
const MUSIC_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M9 18V5l11-2v13"/><circle cx="6.5" cy="18" r="2.5"/><circle cx="17.500" cy="16" r="2.5"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));

$('heroTitle').textContent = CONFIG.heroTitle;
$('heroSub').textContent = CONFIG.heroSub;
$('mainQuote').textContent = CONFIG.mainQuote;
$('mainSign').textContent = CONFIG.mainSign;
$('memTitle').textContent = CONFIG.memoriesTitle;
$('memSub').textContent = CONFIG.memoriesSub;
$('songTitle').textContent = CONFIG.songsTitle;
$('letterTitle').textContent = CONFIG.letterTitle;
$('letterSign').textContent = CONFIG.letterSign;
document.title = CONFIG.heroTitle;

const feature = CONFIG.memories.find(m => m.img) || CONFIG.songs.find(s => s.cover);
if (feature) {
  const image = feature.img || feature.cover;
  $('featureImage').innerHTML = `<img src="${esc(image)}" alt="${esc(feature.caption || feature.title)}">`;
} else {
  $('featureImage').innerHTML = `<div class="feature-empty">${IMG_ICON}<span>Add your favorite photo in CONFIG.memories</span></div>`;
}

/* memories */
$('memGrid').innerHTML = CONFIG.memories.map(m => `
  <article class="card memory">
    <div class="thumb tall">
      ${m.img ? `<img src="${esc(m.img)}" alt="" loading="lazy">` : `<div class="empty">${IMG_ICON}<span>Add photo</span></div>`}
    </div>
    <span class="heart-sep">${HEART}</span>
    <p class="caption">"${esc(m.caption)}"</p>
  </article>`).join('');

/* songs */
const player = $('player');
$('songGrid').innerHTML = CONFIG.songs.map((s, i) => `
  <article class="card song" data-i="${i}">
    <div class="thumb">
      ${s.cover ? `<img src="${esc(s.cover)}" alt="" loading="lazy">` : `<div class="empty">${MUSIC_ICON}<span>Add cover</span></div>`}
      <button class="play" aria-label="Play ${esc(s.title)}" ${s.audio ? '' : 'disabled title="Add an mp3 in CONFIG.songs"'}>
        <svg class="tri" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        <svg class="pause" viewBox="0 0 24 24"><path d="M6 5h4v14H6zM14 5h4v14h-4z"/></svg>
      </button>
    </div>
    <div class="name">${esc(s.title)}</div>
    <div class="sub">${esc(s.sub)}</div>
  </article>`).join('');

let current = -1;
document.querySelectorAll('.song .play').forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.song'), i = +card.dataset.i;
    if (current === i && !player.paused) { player.pause(); return; }
    if (current !== i) { player.src = CONFIG.songs[i].audio; current = i; }
    player.play();
  });
});
player.addEventListener('play', () => document.querySelectorAll('.song').forEach(c => c.classList.toggle('playing', +c.dataset.i === current)));
player.addEventListener('pause', () => document.querySelectorAll('.song').forEach(c => c.classList.remove('playing')));
player.addEventListener('ended', () => document.querySelectorAll('.song').forEach(c => c.classList.remove('playing')));

/* reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: .1 });
document.querySelectorAll('.card').forEach((c, i) => { c.style.transitionDelay = (i % 4) * 80 + 'ms'; io.observe(c); });

/* floating hearts */
const hl = $('hearts');
setInterval(() => {
  const h = document.createElement('span');
  h.className = 'float-heart';
  h.innerHTML = HEART;
  const size = 10 + Math.random() * 22;
  h.style.cssText = `left:${Math.random()*100}%;font-size:${size}px;animation-duration:${9 + Math.random()*9}s`;
  hl.appendChild(h);
  setTimeout(() => h.remove(), 19000);
}, 900);

/* letter modal with typewriter */
let typer = null;
function openLetter() {
  $('modal').classList.add('open');
  const el = $('typed'), sign = $('letterSign');
  el.textContent = ''; sign.classList.remove('show');
  let i = 0; clearInterval(typer);
  typer = setInterval(() => {
    el.textContent += CONFIG.letter[i++];
    el.parentElement.scrollTop = el.parentElement.scrollHeight;
    if (i >= CONFIG.letter.length) { clearInterval(typer); sign.classList.add('show'); }
  }, 38);
}
function closeLetter() { clearInterval(typer); $('modal').classList.remove('open'); }
$('openLetter').onclick = openLetter;
$('closeLetter').onclick = closeLetter;
$('modal').addEventListener('click', e => { if (e.target.id === 'modal') closeLetter(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeLetter(); });
