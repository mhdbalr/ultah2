function startScrapbookFromSplash() {
  const splash = document.getElementById('splashScreen');
  const scrapbook = document.getElementById('scrapbookContent');
  splash.style.transition = 'opacity 1s ease';
  splash.style.opacity = 0;
  setTimeout(() => {
    splash.style.display = 'none';
    scrapbook.style.display = 'block';
    startScrapbook(); // fungsi kamu untuk mulai isi halaman scrapbook
  }, 1000);
}

function updateMessage() {
  document.getElementById('pageMessage').innerText = messages[currentPage];
 if (currentPage === messages.length - 1) {
  document.getElementById('cakeAnimation').style.display = 'block';
  showConfetti();
} else {
  document.getElementById('cakeAnimation').style.display = 'none';
}
}
function showConfetti() {
  const confettiContainer = document.getElementById('confettiContainer');
  confettiContainer.innerHTML = '';
  confettiContainer.style.display = 'block';

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = ['#ff80ab', '#ff4081', '#f48fb1', '#fce4ec'][Math.floor(Math.random() * 4)];
    confetti.style.animationDuration = 2 + Math.random() * 2 + 's';
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    confettiContainer.style.display = 'none';
  }, 4000);
}
function showConfetti() {
  const confettiContainer = document.getElementById('confettiContainer');
  confettiContainer.innerHTML = '';
  confettiContainer.style.display = 'block';

  for (let i = 0; i < 100; i++) {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti-piece');
    confetti.style.position = 'fixed';
    confetti.style.width = '10px';
    confetti.style.height = '10px';
    confetti.style.backgroundColor = ['#ff80ab', '#ff4081', '#f48fb1', '#fce4ec'][Math.floor(Math.random() * 4)];
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.top = Math.random() * 100 + 'vh';
    confetti.style.opacity = 0.8;
    confetti.style.borderRadius = '50%';
    confetti.style.animation = `confetti-fall ${2 + Math.random() * 2}s linear forwards`;
    confetti.style.animationDelay = (Math.random() * 2) + 's';
    confettiContainer.appendChild(confetti);
  }

  setTimeout(() => {
    confettiContainer.style.display = 'none';
    confettiContainer.innerHTML = '';
  }, 4000);
}


