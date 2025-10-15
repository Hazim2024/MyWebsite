// Basecoat theme toggle
(() => {
  const apply = (dark) => {
    document.documentElement.classList.toggle('dark', dark);
    try { localStorage.setItem('themeMode', dark ? 'dark' : 'light'); } catch (_) {}
  };

  document.addEventListener('basecoat:theme', (event) => {
    const mode = event.detail?.mode;
    apply(mode === 'dark' ? true : mode === 'light' ? false : !document.documentElement.classList.contains('dark'));
  });
})();

// AOS initialization
AOS.init({
  duration: 700,
  once: true,
});

// Back to top button
let backtotop = document.querySelector('.back-to-top');
if (backtotop) {
  const toggleBacktotop = () => {
    if (window.scrollY > 100) {
      backtotop.classList.add('active');
    } else {
      backtotop.classList.remove('active');
    }
  }

  // Run on page load
  window.addEventListener('load', toggleBacktotop);

  // Run on scroll
  window.addEventListener('scroll', toggleBacktotop);

  // Smooth scroll to top
  backtotop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Hide preloader after page fully loads
window.addEventListener('load', () => {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.style.transition = 'opacity 0.5s ease';
    preloader.style.opacity = '0';
    // Allow clicks immediately
    preloader.style.pointerEvents = 'none';
    setTimeout(() => preloader.remove(), 500);
  }
});

  // JavaScript function to trigger download
  function downloadCV(fileName) {
    const link = document.createElement('a');
    link.href = fileName;
    link.download = fileName;
    link.click();
  }
  
