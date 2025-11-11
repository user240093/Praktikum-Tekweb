// Ambil elemen tombol dan menu
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});

// ===== Fade-in Animation saat Scroll =====
window.addEventListener('scroll', () => {
  const projectContainer = document.getElementById('project-container');
  const position = projectContainer.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (position < screenHeight - 100) {
    projectContainer.classList.remove('opacity-0', 'translate-y-10');
    projectContainer.classList.add('opacity-100', 'translate-y-0');
  }
});

// Toggle menu mobile
menuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

// Tutup menu otomatis saat klik link navigasi
document.querySelectorAll('#mobile-menu a').forEach(link => {
  link.addEventListener('click', () => {
    mobileMenu.classList.add('hidden');
  });
});
