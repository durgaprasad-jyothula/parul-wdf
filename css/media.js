function updateWidthDisplay() {
    var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    document.getElementById('widthDisplay').textContent = 'Screen Width is: ' + width + 'px';
  }

  // Initial update on page load
  updateWidthDisplay();

  // Update on window resize
  window.addEventListener('resize', updateWidthDisplay);