(function(global){
	var A = function (){
		console.log('A');
		B();
	}

	function B(){
		console.log("B");
		C();
	}

	function C(){
		console.log("C");
		D();
	}

	var D = function(){
		var rest = "DEFGHIJKLMNOPQRSTUVWXYZ".split("");
		for(var i=0; i<rest.length; i++){
			console.log(rest[i]);
		}
	}
	return A;
})(window)();