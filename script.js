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

// footer year
document.querySelectorAll('.year').forEach(el => el.textContent = new Date().getFullYear());
