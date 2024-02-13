document.addEventListener('DOMContentLoaded', function() {
  let prevScrollPos = window.pageYOffset;

  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("main-header").style.top = "0";
    } else {
      document.getElementById("main-header").style.top = "-200px"; // Changer la valeur en fonction de la hauteur de votre header
    }

    prevScrollPos = currentScrollPos;
  };

  document.getElementById("soundImage").addEventListener("click", function() {
    var audio = document.getElementById("clickSound");
    audio.play();
  });

  var mainContent = document.getElementById('content');
  setTimeout(function() {
      mainContent.style.opacity = 1;
  }, 100);
});
