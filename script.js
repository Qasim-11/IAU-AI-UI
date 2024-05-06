document.addEventListener('keydown', function(event) {
    if (event.code === 'Space') {
        event.preventDefault();
        var soundWave = document.querySelector('.sound-wave');
        if (soundWave.classList.contains('stopped')) {
            // Restart the original sound animations
            soundWave.classList.remove('stopped');
            soundWave.querySelectorAll('.bar').forEach(bar => {
                bar.style.animation = ''; // Clear any inline animation styles to revert to CSS defaults
            });
        } else {
            // Transition to a stopped state smoothly
            soundWave.classList.add('stopped');
            soundWave.querySelectorAll('.bar').forEach(bar => {
                var currentHeight = getComputedStyle(bar).height; // More accurate capture using computed style
                bar.style.animation = 'none'; // Stop existing animations
                setTimeout(() => {
                    // Apply a new short animation to transition to minimal activity
                    bar.style.height = currentHeight; // Set current height just before starting animation
                    bar.style.animation = `reduceHeightFromCurrent 0.8s forwards`;
                }, 10); // Short delay to ensure changes are applied after animation is cleared
            });
        }
    }
});


function toggleMode() {
    var element = document.body;
    var icon = document.querySelector('.toggle-icon');
    element.classList.toggle("dark-mode");
  
    if (element.classList.contains("dark-mode")) {
      icon.classList.remove("fa-moon");
      icon.classList.add("fa-sun");
    } else {
      icon.classList.remove("fa-sun");
      icon.classList.add("fa-moon");
    }
  }
  
