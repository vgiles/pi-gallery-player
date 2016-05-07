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
  });

  mainWindow.loadUrl('file://' + __dirname + '/app/index.html');
});
