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
  box.style.flexGrow = (w / h).toFixed(4); // side-by-side images end up equal height
}
document.querySelectorAll('.media').forEach(box => {
  // Ignore hero AND the portfolio page grids so they don't overlap
  if (box.parentElement.classList.contains('hero') || box.closest('.case-media')) return; 
  
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
