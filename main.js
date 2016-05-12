'use strict';

var app = require('app');
var BrowserWindow = require('browser-window');

var mainWindow = null;

app.on('read', function() {
  mainWindow = new BrowserWindow({
    frame: false,
    height: 700,
    resizeable: false,
    width: 700,
    fullscreen: true, // test this out? No idea if it works...
  });

  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});
