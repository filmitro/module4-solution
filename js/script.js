
(function(window){
var names = ["Yaakov", "john", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
for(var i=0; i < names.length; i++){
		if(names[i].charAt(0)=="J"||names[i].charAt(0)=="j"){
			ByeSpeaker.sayBye(names[i]);
		}
		else(HejSpeaker.sayHej(names[i]))	
	};
})(window);
