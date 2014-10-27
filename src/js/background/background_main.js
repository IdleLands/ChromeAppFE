chrome.app.runtime.onLaunched.addListener(function(e) {
  chrome.app.window.create('src/main.html', {
    id: "IdleLandsApp",
    frame: 'none'
  });
});