function loadPage(page) {
  const frame = document.getElementById('frame');
  const sound = new Audio('assets/shutter.mp3');
  sound.play();
  frame.src = 'pages/' + page;
}
