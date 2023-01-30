// Clase MediaPlayer
// Esta función especial crea el objeto en memoria y lo inicializa. Se escribe y funciona como un constructor
function MediaPlayer(config) {
  this.media = config.element;
  this.plugins = config.plugins || [];
  console.log(this.media);

  this._initPlugins();
}

MediaPlayer.prototype._initPlugins = function() {
  this.plugins.forEach(plugin => {
    plugin.run(this);
  })
}

// Métodos de la clase
// Javascript tradicional utiliza funciones y herencia basada en prototipos para simular a las clases
MediaPlayer.prototype.play = function() {
  this.media.play();
}

MediaPlayer.prototype.pause = function() {
  this.media.pause();
}

MediaPlayer.prototype.mute = function() {
  this.media.muted = true;
}

MediaPlayer.prototype.togglePlay = function() {
  if(this.media.paused) {
    this.play();
  } else {
    this.pause();
  }
}

MediaPlayer.prototype.toggleMute = function() {
  this.media.muted = !this.media.muted;
}

export default MediaPlayer;