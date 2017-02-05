(function(){
	"use strict";
	angular.module("angular-rest")
	.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function(
			$stateProvider, $locationProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		var homestate = {
			name: "home",
			url: "/",
			component: "mainView"
		};
		$stateProvider.state(homestate);
		$locationProvider.html5Mode(true);
	}]);
})();