import Ads from './Ads';
var AdsPlugin = /** @class */ (function () {
    function AdsPlugin() {
        this.ads = Ads.getInstance();
        this.adsContainer = document.createElement("div");
        this.handleTimeUpdate = this.handleTimeUpdate.bind(this);
    }
    AdsPlugin.prototype.run = function (player) {
        this.player = player;
        this.player.container.appendChild(this.adsContainer);
        this.media = this.player.media;
        this.media.addEventListener('timeupdate', this.handleTimeUpdate);
    };
    AdsPlugin.prototype.handleTimeUpdate = function () {
        var currentTime = Math.floor(this.media.currentTime);
        if (currentTime % 30 === 0) {
            this.renderAd();
        }
    };
    AdsPlugin.prototype.renderAd = function () {
        var _this = this;
        if (this.currentAd) {
            return;
        }
        var ad = this.ads.getAd();
        this.currentAd = ad;
        this.adsContainer.innerHTML = "\n    <div class=\"ads\">\n      <a  class=\"ads__link\" href=\"".concat(ad === null || ad === void 0 ? void 0 : ad.url, "\" target=\"_blank\">\n        <img class=\"ads__img\" src=\"").concat(ad === null || ad === void 0 ? void 0 : ad.imageUrl, "\" />\n        <div class=\"ads__info\">\n          <h5 class=\"ads__title\">").concat(ad === null || ad === void 0 ? void 0 : ad.title, "</h5>\n          <p class=\"ads__body\">").concat(ad === null || ad === void 0 ? void 0 : ad.body, "</p>\n        </div>\n      </a>\n    </div>\n    ");
        setTimeout(function () {
            _this.currentAd = null;
            _this.adsContainer.innerHTML = '';
        }, 10000);
    };
    return AdsPlugin;
}());
export default AdsPlugin;
