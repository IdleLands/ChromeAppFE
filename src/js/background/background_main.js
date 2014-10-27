chrome.app.runtime.onLaunched.addListener(function(e) {
  chrome.app.window.create('src/main.html', {
    id: "IdleLands-App-AshlynnInWonderland",
    bounds: {
      width: 500,
      height: 600
    },
    minWidth: 500,
    minHeight: 600,
    frame: 'none'
  });
});