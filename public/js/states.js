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
		var newarticle = {
			name: "home.newarticle",
			url: "newarticle",
			component: "articleForm"
		};
		$stateProvider.state(homestate);
		$stateProvider.state(newarticle);
		$locationProvider.html5Mode(true);
	}]);
})();