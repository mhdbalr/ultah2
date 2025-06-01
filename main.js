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
  // Tambahkan ini di fungsi updateMessage()
  // Efek bintang jatuh di Pesan ke-5 (index 4)
  if (currentPage === 4) {
    showShootingStar();
  }


  // Efek bunga jatuh di Pesan ke-7 (index 6)
  if (currentPage === 6) {
    showFallingFlowers();
  }

  // Efek hati di Pesan ke-10 (index 9)
  if (currentPage === 9) {
    showFloatingHearts();
  }
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

// Efek bunga jatuh
function showFallingFlowers() {
  for (let i = 0; i < 15; i++) {
    const flower = document.createElement('div');
    flower.classList.add('falling-flower');
    flower.style.left = `${Math.random() * 100}vw`;
    flower.style.animationDuration = `${3 + Math.random() * 2}s`;
    document.body.appendChild(flower);
    setTimeout(() => flower.remove(), 6000);
  }
}

// Efek hati bertebaran
function showFloatingHearts() {
  for (let i = 0; i < 20; i++) {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = `${Math.random() * 100}vw`;
    heart.style.bottom = '0';
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
  }
}
// Tambahkan fungsi baru ini di akhir file JS kamu

// Efek bintang jatuh dari kanan atas ke kiri bawah
function showShootingStar() {
  for (let i = 0; i < 5; i++) {
    setTimeout(() => {
      const star = document.createElement('div');
      star.classList.add('shooting-star');
      star.style.left = `${Math.random() * window.innerWidth}px`;
      star.style.top = `${Math.random() * window.innerHeight / 2}px`;
      document.body.appendChild(star);
      setTimeout(() => {
        star.remove();
      }, 2000);
    }, i * 300);
  }
}


