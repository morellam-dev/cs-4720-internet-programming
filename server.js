// server.js
const liveServer = require("live-server");

const params = {
  file: "index.html", // When set, serve this file (server root relative) for every 404 (useful for single-page applications)
  wait: 1000, // Waits for all changes, before reloading. Defaults to 0 sec.
  ignore: ".*"
};
liveServer.start(params);