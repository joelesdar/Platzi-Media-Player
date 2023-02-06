// Clase MediaPlayer
// Esta función especial crea el objeto en memoria y lo inicializa. Se escribe y funciona como un constructor
var MediaPlayer = /** @class */ (function () {
    function MediaPlayer(config) {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this.initPlayer();
        this.initPlugins();
    }
    MediaPlayer.prototype.initPlayer = function () {
        var _a;
        this.container = document.createElement('div');
        this.container.style.position = 'relative';
        (_a = this.media.parentNode) === null || _a === void 0 ? void 0 : _a.insertBefore(this.container, this.media);
        this.container.appendChild(this.media);
    };
    MediaPlayer.prototype.initPlugins = function () {
        var _this = this;
        this.plugins.forEach(function (plugin) {
            plugin.run(_this);
        });
    };
    MediaPlayer.prototype.play = function () {
        this.media.play();
    };
    MediaPlayer.prototype.pause = function () {
        this.media.pause();
    };
    MediaPlayer.prototype.mute = function () {
        this.media.muted = true;
    };
    MediaPlayer.prototype.unmute = function () {
        this.media.muted = false;
    };
    MediaPlayer.prototype.togglePlay = function () {
        if (this.media.paused) {
            this.play();
        }
        else {
            this.pause();
        }
    };
    MediaPlayer.prototype.toggleMute = function () {
        if (this.media.muted) {
            this.unmute();
        }
        else {
            this.mute();
        }
    };
    return MediaPlayer;
}());
export default MediaPlayer;
