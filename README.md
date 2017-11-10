PeerRelay Now
=============

A [PeerRelay](http://github.com/treygriffith/peer-relay) Node.js server for deployment on [Now](now.sh).

Setup
-----

### Easy

1. [Install Now](https://zeit.co/download)
2. `$ now treygriffith/peer-relay-now`

### Almost as easy

1. [Install Now](https://zeit.co/download)
2. `$ git clone git@github.com:treygriffith/peer-relay-now.git`
3. `cd peer-relay-now`
4. `now`

Configuration
-------------

All configuration is via environment variables. [See the Now documentation for how to set environment variables.](https://zeit.co/docs/features/env-and-secrets)

- `PORT`: Port for Now to bind to. Defaults to 443 since Now.sh upgrades traffic to SSL.
- `BOOT`: Comma separated list of Websocket URLs to bootstrap the PeerRelay network, e.g. `'wss://peer-relay-now-vpleytitgb.now.sh:443,wss://peer-relay-now-ewtvbrtgkp.now.sh:443'`
- `SECURE`: Boolean to indicate where this is being served over `wss://`. Defaults to true since Now.sh upgrades.