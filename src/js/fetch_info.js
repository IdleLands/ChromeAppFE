(function(){
  window.config = {};
  var configs = ['main'];
  var completed = 0;
  for(var i=0,j=configs.length;i<j;i++){
    var xhr = new XMLHttpRequest();
    xhr.name = configs[i];
    xhr.onload = function(){
      window.data[this.name] = JSON.parse(this.responseText);
      completed++;
      if(completed === j) start();
    };
    xhr.open('GET', chrome.extension.getURL(['/src/config/',this.name,'.json'].join('')), true);
    xhr.send();
  }
})();