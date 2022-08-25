
(function(window){
  var ByeSpeaker = {}
  ByeSpeaker.name = window
  var speakWord = "Good Bye";
  ByeSpeaker.sayBye = function (name) {
      console.log(speakWord + " " + name);
    }
  window.ByeSpeaker = ByeSpeaker;
})(window);