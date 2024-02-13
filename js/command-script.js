document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('background-video');
  
    // Set the playback rate to 0.5 for half speed
    video.playbackRate = 1;
  });
  
  window.onscroll = function() {
    let currentScrollPos = window.pageYOffset;
    
    if (prevScrollPos > currentScrollPos) {
      document.getElementById("main-header").style.top = "0";
    } else {
      document.getElementById("main-header").style.top = "-200px"; // Changer la valeur en fonction de la hauteur de votre header
    }


};
