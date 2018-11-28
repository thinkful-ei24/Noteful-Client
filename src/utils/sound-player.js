export function removeTransition(e) {
  if (e.propertyName !== 'transform') return;
  e.target.classList.remove('playing');
}

const A = require('./sounds/piano/A.mp3');
const AsBb = require('./sounds/piano/As-Bb.mp3');
const B = require('./sounds/piano/B.mp3');
const C = require('./sounds/piano/C.mp3');
const CsDb = require('./sounds/piano/Cs-Db.mp3');
const D = require('./sounds/piano/D.mp3');
const DsEb = require('./sounds/piano/Ds-Eb.mp3');
const E = require('./sounds/piano/E.mp3');
const F = require('./sounds/piano/F.mp3');
const FsGb = require('./sounds/piano/Fs-Gb.mp3');
const G = require('./sounds/piano/G.mp3');
const GsAb = require('./sounds/piano/Gs-Ab.mp3');


export function playSound(e) {
  const note = e;
  const keys = {
    A: A,
    B: B,
    C: C,
    D: D,
    E: E,
    F: F,
    G: G
  };
  const source = keys[note];
  const player = new Audio(source);
  player.autoplay = false;
  player.play(source);
}


