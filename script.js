function changePage(page) {
  const frame = document.getElementById('main-frame');
  const sound = document.getElementById('shutter-sound');
  sound.currentTime = 0;
  sound.play();

  // Add delay for realism
  setTimeout(() => {
    frame.src = 'pages/' + page;
  }, 200);
}
