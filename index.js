var PeerRelay = require('peer-relay');

var peer = new PeerRelay({
	host: process.env.NOW_URL,
	port: process.env.PORT || 80,
	bootstrap: process.env.BOOT || []
});