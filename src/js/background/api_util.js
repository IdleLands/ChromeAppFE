var apiRequest = function(type, call, data, callback){
  var xhr = new XMLHttpRequest();
  xhr.onload = function(){
    callback(JSON.parse(this.responseText));
  };
  xhr.open(type, ('http://api.idle.land/' + call.replace('.','/')), true);
  xhr.setRequestHeader('Content-type','application/json');
  xhr.send(argParser(data));
};

