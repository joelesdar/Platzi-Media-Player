var AutoPause = /** @class */ (function () {
    function AutoPause() {
        this.threshold = 0.25;
        this.handleIntersection = this.handleIntersection.bind(this);
        this.handleVisibilityChange = this.handleVisibilityChange.bind(this);
    }
    AutoPause.prototype.run = function (player) {
        this.player = player;
        var observer = new IntersectionObserver(this.handleIntersection, { threshold: this.threshold }); // IntersectionObserver(handler, config)
        observer.observe(this.player.media);
        document.addEventListener("visibilitychange", this.handleVisibilityChange);
    };
    AutoPause.prototype.handleIntersection = function (entries) {
        var entry = entries[0];
        var isVisible = entry.intersectionRatio >= this.threshold;
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    AutoPause.prototype.handleVisibilityChange = function () {
        var isVisible = document.visibilityState === "visible";
        if (isVisible) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    };
    return AutoPause;
}());
export default AutoPause;
