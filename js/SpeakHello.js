
(function(window){
  var HejSpeaker = {}
  HejSpeaker.name = window
  var speakWord = "Hello";
  HejSpeaker.sayHej = function (name) {
      console.log(speakWord + " " + name);
    }
  window.HejSpeaker = HejSpeaker;
})(window);