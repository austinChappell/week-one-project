let logo = document.querySelector('#logo');

logo.addEventListener('mouseover', function() {
  this.src = 'images/bent-creek-logo-coral.png';
});

logo.addEventListener('mouseleave', function() {
  this.src = 'images/bent-creek-logo.png';
});
