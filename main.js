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
// I have a feeling that I only really need to load this, then do everything in the html document using HTML5. 
// variables that I will need,
var artist = 'Vincent Giles';
var yearOfComp = '2015';
var compTitle = etc; // get metadata information
var audio = document.createElement('audio');
audio.src = etc; // here is where the file goes || this should be able to be loaded dynamically within the loop.



// make a looping audio player. if the piece is finished, moved to the next, then the next, then do the whole thing again


// meanwhile, display the relevant information in the UI.
