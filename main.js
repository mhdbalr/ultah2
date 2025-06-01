function startScrapbookFromSplash() {
  const splash = document.getElementById('splashScreen');
  splash.style.transition = 'opacity 1s ease';
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = 'none';
    startScrapbook(); // masuk ke tampilan scrapbook
  }, 1000);
}
