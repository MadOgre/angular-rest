(function(){
	"use strict";
	angular.module("angular-rest", ["ui.router"])
	.run(function($transitions, $state) {
		$transitions.onError({}, function(){
			$state.go("home.mainview");
		});
	});
})();