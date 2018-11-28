export function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

export function playSound(e) {
  const note = e;
  const keys = {
    C: '/src/utils/sounds/clap.wav',
  };
  const source = keys[note];
  console.log('src: ', source);

  const player = new Audio(source);
  console.log(player.src);
  player.play(source);
}
