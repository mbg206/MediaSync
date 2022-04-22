# MediaSync
Syncs HTMLMediaElements together

## Usage
First, add the script to your HTML file (`<script src="mediasync.js"></script>`)

Then, use `HTMLMediaElement.syncTo(HTMLMediaElement)` to sync an HTMLMediaElement to another HTMLMediaElement.

## Example
```javascript
const video = document.querySelector('video');
const audio = document.querySelector('audio');
audio.syncTo(video);
```
This will sync the `audio` element to the `video` element. Can be used if a video has a seperate video and audio file.