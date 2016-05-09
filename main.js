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

// variables that I will need
const audioFileOne = etc; // locate file on disk
const audioFileTwo = etc; // locate file on disk
const audioFileThree = etc; // locate file on disk

var artist = 'Vincent Giles';
var yearOfComp = '2015';
var compTitle = etc; // get metadata information

// make a looping audio player. if the piece is finished, moved to the next, then the next, then do the whole thing again


// meanwhile, display the relevant information in the UI.
