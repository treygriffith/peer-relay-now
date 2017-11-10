var PeerRelay = require('peer-relay');
var bootstrap;

if(process.env.BOOT) {
	bootstrap = process.env.BOOT.split(',');
} else {
	bootstrap = [];
}

var peer = new PeerRelay({
	host: process.env.NOW_URL.slice('https://'.length),
	port: process.env.PORT || 80,
	bootstrap: bootstrap
});