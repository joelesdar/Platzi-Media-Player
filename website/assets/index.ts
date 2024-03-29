import MediaPlayer from '@joelesdar/mediaplayer'
import AutoPlay from '@joelesdar/mediaplayer/lib/plugins/AutoPlay';
import AutoPause from '@joelesdar/mediaplayer/lib/plugins/AutoPause';
import Ads from '@joelesdar/mediaplayer/lib/plugins/Ads';

// Seleccionamos las etiquetas (html) que vamos a manipular
const video = document.getElementById("video");
const player = new MediaPlayer({ element: video, plugins: [new AutoPlay(), new AutoPause(), new Ads()] });
const playButton: HTMLElement = document.getElementById("play-button") as HTMLElement;
const muteButton: HTMLElement = document.getElementById("mute-button") as HTMLElement;

playButton.onclick = () => player.togglePlay();
muteButton.onclick = () => player.toggleMute();

if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js').catch(error => {
    console.log(error.message);
  })
}