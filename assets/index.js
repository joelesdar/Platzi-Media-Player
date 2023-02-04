import MediaPlayer from './MediaPlayer.js'
import AutoPlay from './plugins/AutoPlay.js';
import AutoPause from './plugins/AutoPause.js';

// Seleccionamos las etiquetas (html) que vamos a manipular
const video = document.getElementById("video");
const playButton = document.getElementById("play-button");
const muteButton = document.getElementById("mute-button");

const player = new MediaPlayer({ element: video, plugins: [new AutoPlay, new AutoPause] });
playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  })
}