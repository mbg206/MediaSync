HTMLMediaElement.prototype.syncTo = function(mediaElement) {
    if (!mediaElement instanceof HTMLMediaElement) {
        throw "Input element is not a media element!";
    }

    // pausing
    mediaElement.addEventListener('pause', () => this.pause());

    // playing
    mediaElement.addEventListener('play', () => {
        this.currentTime = mediaElement.currentTime;
        this.play();
    });

    // time changes
    mediaElement.addEventListener('timeupdate', () => {
        if (Math.abs(this.currentTime - mediaElement.currentTime) > 0.1) {
            this.currentTime = mediaElement.currentTime;
        }
    });

    // settings
    mediaElement.addEventListener('ratechange', () => this.playbackRate = mediaElement.playbackRate);
    mediaElement.addEventListener('volumechange', () => {
        this.muted = mediaElement.muted;
        this.volume = mediaElement.volume;
    });

    // initialization
    this.playbackRate = mediaElement.playbackRate;
    this.currentTime = mediaElement.currentTime;
    if (mediaElement.paused) this.pause();
    else this.play();
}