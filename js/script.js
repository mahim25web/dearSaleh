const $ = id => document.getElementById(id);
const HEART = '<svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor"><path d="M12 21s-7.5-4.6-10-9.2C.3 8.4 2 4.5 5.8 4.5c2.2 0 3.6 1.2 4.2 2.3.6-1.1 2-2.3 4.2-2.3 3.8 0 5.5 3.9 3.8 7.3C19.500 16.400 12 21 12 21z"/></svg>';
const IMG_ICON = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="4" width="18" height="16" rx="3"/><circle cx="9" cy="10" r="1.8"/><path d="M4 18l5-5 4 4 3-3 4 4"/></svg>';
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const spotifyEmbedUrl = value => {
  if (!value) return '';
  try {
    const url = new URL(value);
    const track = url.pathname.match(/^\/(?:embed\/)?track\/([A-Za-z0-9]{22})\/?$/);
    if (url.protocol !== 'https:' || url.hostname !== 'open.spotify.com' || !track) return '';
    return `https://open.spotify.com/embed/track/${track[1]}?utm_source=generator`;
  } catch {
    return '';
  }
};

$('heroTitle').textContent = CONFIG.heroTitle;
$('heroSub').textContent = CONFIG.heroSub;
$('mainQuote').textContent = CONFIG.mainQuote;
$('mainSign').textContent = CONFIG.mainSign;
$('loveNote').textContent = CONFIG.loveNote;
$('loveNoteSign').textContent = CONFIG.loveNoteSign;
$('memTitle').textContent = CONFIG.memoriesTitle;
$('memSub').textContent = CONFIG.memoriesSub;
$('songTitle').textContent = CONFIG.songsTitle;
$('letterTitle').textContent = CONFIG.letterTitle;
$('letterSign').textContent = CONFIG.letterSign;
document.title = CONFIG.heroTitle;

const feature = CONFIG.memories.find(m => m.img) || CONFIG.songs.find(s => s.coverImage);
if (feature) {
  const image = feature.img || feature.coverImage;
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

/* Spotify embeds */
$('songGrid').innerHTML = CONFIG.songs.map(s => {
  const embedUrl = spotifyEmbedUrl(s.spotifyUrl);
  const hasInvalidUrl = s.spotifyUrl && !embedUrl;
  if (hasInvalidUrl) console.error(`Invalid Spotify track URL for "${s.title}". Use an open.spotify.com track or embed URL.`);
  return `
    <article class="card song">
      ${s.coverImage ? `<img class="song-cover" src="${esc(s.coverImage)}" alt="" loading="lazy">` : ''}
      <div class="name">${esc(s.title)}</div>
      ${s.sub ? `<div class="sub">${esc(s.sub)}</div>` : ''}
      ${embedUrl
        ? `<iframe class="spotify-embed" src="${embedUrl}" title="Spotify player: ${esc(s.title)}" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>`
        : `<p class="spotify-placeholder">${hasInvalidUrl ? 'Invalid Spotify link. Add a track or embed URL.' : 'Add a Spotify track link in CONFIG.songs.'}</p>`}
    </article>`;
}).join('');

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
