var apiRequest = (function(){
  var argParser = function(obj){
    var joinArray = [];
    for(var x in obj){
      joinArray.push([encodeURIComponent(x), '=', encodeURIComponent(obj[x])].join(''));
    }
    return joinArray.join('&');
  };

  var apiRequest = function(type, call, data, callback){
    var xhr = new XMLHttpRequest();
    xhr.onload = function(){
      callback(JSON.parse(this.responseText));
    };
    var parsed = argParser(data);
    xhr.open(type, ['http://api.idle.land/',call.replace('.','/')].join(''), true);
    xhr.setRequestHeader('Content-type','application/x-www-form-urlencoded');
    xhr.send(['?', parsed].join(''));
  };
  return apiRequest;
})();

// apiRequest('PUT','player.auth',{
//   identifier: 'Ashlynn#AshTest1',
//   name: 'AshTest1',
//   password: 'theashentreesfollow'
// },function(json){
//   console.log(json);
// });