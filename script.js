const lines = [
    "Productor Musical.",
    "Beatmaker.",
    "Mezcla, Rec y Mastering.",
    "Curso de Producción.",
    "Set para eventos.",
    "Nanu Boumper EP Proximamente X_X."
  ];
  
  let i = 0;
  let j = 0;
  let currentLine = '';
  const speed = 50;
  const element = document.getElementById("typewriter");
  
  function type() {
    if (j < lines[i].length) {
      currentLine += lines[i].charAt(j);
      element.innerHTML = currentLine;
      j++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        currentLine = '';
        j = 0;
        i = (i + 1) % lines.length;
        element.innerHTML = '';
        setTimeout(type, 500);
      }, 1500);
    }
  }
  
  type();
  
  // Sonido de fondo
  const audio = document.getElementById("bgAudio");
  function toggleAudio() {
    audio.muted = !audio.muted;
  }
  
  // Autoplay solo después de interacción
  window.addEventListener('click', () => {
    if (audio.paused) {
      audio.play().catch(e => console.log("Autoplay bloqueado hasta interacción."));
    }
  }, { once: true });
  
  // Konami Code
  const code = [38,38,40,40,37,37,39,39,66,65];
  let konamiIndex = 0;
  
  document.addEventListener("keydown", function(e) {
    if (e.keyCode === code[konamiIndex]) {
      konamiIndex++;
      if (konamiIndex === code.length) {
        alert("Manifiesto Boumper X desbloqueado:\n\n«No sigo el mainstream, lo recodifico. Boumper X no es un nombre, es un glitch en el sistema.»");
        konamiIndex = 0;
      }
    } else {
      konamiIndex = 0;
    }
  });
  
