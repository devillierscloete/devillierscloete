// nav toggle
const burger = document.querySelector('.burger');
const menu = document.querySelector('.nav ul');
if (burger && menu) burger.addEventListener('click', () => menu.classList.toggle('open'));

// scroll reveal
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => io.observe(el));

// portfolio filters
const buttons = document.querySelectorAll('.filters button');
const cases = document.querySelectorAll('.case');
buttons.forEach(btn => btn.addEventListener('click', () => {
  buttons.forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const f = btn.dataset.filter;
  cases.forEach(c => c.classList.toggle('hide', f !== 'all' && !c.dataset.tags.split(' ').includes(f)));
}));

// match every image / video slot to the real shape of its file
function fitMedia(box, w, h) {
  if (!w || !h) return;
  box.style.aspectRatio = w + ' / ' + h;
  box.dataset.ratio = (w / h).toFixed(4);
  // a row of images: size the columns by shape so every image in it is the same height
  const row = box.parentElement;
  if (row && /(^|\s)grid-(2|3|eq)(\s|$)/.test(row.className)) {
    const kids = [...row.children].filter(k => k.classList.contains('media'));
    if (kids.length === row.children.length) {
      const r = kids.map(k => parseFloat(k.dataset.ratio) || 16 / 9);
      const sum = r.reduce((a, b) => a + b, 0);
      // fractions are scaled to total 100 so the row always fills the full width
      row.style.gridTemplateColumns = r.map(x => 'minmax(0, ' + ((x / sum) * 100).toFixed(3) + 'fr)').join(' ');
    }
  }
}
document.querySelectorAll('.media').forEach(box => {
  if (box.parentElement.classList.contains('hero')) return; // hero stays full-bleed
  const img = box.querySelector('img');
  const vid = box.querySelector('video');
  if (img) {
    const go = () => fitMedia(box, img.naturalWidth, img.naturalHeight);
    if (img.complete && img.naturalWidth) go(); else img.addEventListener('load', go);
  }
  if (vid) {
    const go = () => fitMedia(box, vid.videoWidth, vid.videoHeight);
    if (vid.readyState >= 1) go(); else vid.addEventListener('loadedmetadata', go);
  }
});

// footer year
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
