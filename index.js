var PeerRelay = require('peer-relay');
var electronWebRTC = require('electron-webrtc');
var bootstrap;

if(process.env.BOOT) {
	bootstrap = process.env.BOOT.split(',');
} else {
	bootstrap = [];
}

var peer = new PeerRelay({
	host: process.env.NOW_URL.slice('https://'.length),
	port: process.env.PORT || 443,
	bootstrap: bootstrap,
	secure: process.env.SECURE || true,
	wrtc: electronWebRTC
});