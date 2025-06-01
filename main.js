// ... fungsi startScrapbook, updateMessage, prevPage, nextPage

function startScrapbookFromSplash() {
  const splash = document.getElementById('splashScreen');
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = 'none';
    startScrapbook(); // masuk ke tampilan scrapbook
  }, 1000);
}
