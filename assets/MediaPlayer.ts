// Clase MediaPlayer
// Esta función especial crea el objeto en memoria y lo inicializa. Se escribe y funciona como un constructor
class MediaPlayer {
  media: HTMLMediaElement;
  plugins: Array<any>;

  constructor(config) {
    this.media = config.element;
    this.plugins = config.plugins || [];
    this.initPlugins();
  }

  private initPlugins() {
    this.plugins.forEach(plugin => {
      plugin.run(this);
    });
  }

  play() {
    this.media.play();
  }

  pause() {
    this.media.pause();
  }

  mute() {
    this.media.muted = true;
  }

  unmute() {
    this.media.muted = false;
  }

  togglePlay() {
    if (this.media.paused) {
      this.play();
    } else {
      this.pause();
    }
  }

  toggleMute() {
    if(this.media.muted) {
      this.unmute();
    } else {
      this.mute();
    }
  }
}







export default MediaPlayer;