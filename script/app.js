const meinPorsche = new Audio('../assets/mein-porsche.mp3');

const audioBtn = document.querySelector('.play-audio');

const audioHandler = function () {
  let clicked = false;

  audioBtn.addEventListener('click', function () {
    if (!clicked) {
      meinPorsche.play();
      audioBtn.innerText = 'Pause Audio';
    } else {
      meinPorsche.pause();
      audioBtn.innerText = 'Play Audio';
    }
    clicked = !clicked;
  });
};

audioHandler();
