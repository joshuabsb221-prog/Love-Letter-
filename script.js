
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
},{threshold:0.16});
reveals.forEach(el => io.observe(el));

document.getElementById('heartButton').addEventListener('click', () => {
  document.getElementById('secret').classList.add('show');
});
