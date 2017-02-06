(function(){
	"use strict";
	angular.module("angular-rest")
	.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function(
			$stateProvider, $locationProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		var homestate = {
			name: "home",
			url: "/",
			component: "mainView",
			resolve: {
				articles: ["articlesService", function(articlesService) {
					return articlesService.getAllArticles().then(function(data){
						return data.data;
					});
				}]
			}
		};
		var newarticle = {
			name: "home.newarticle",
			url: "newarticle",
			component: "articleForm"
		};
		var article = {
			name: "article",
			url: "/article/{slug}",
			component: "article",
			resolve: {
				article: ["articlesService", "$stateParams", function(articlesService, $stateParams) {
					return articlesService.getArticle($stateParams.slug);
				}]
			}
		};
		$stateProvider.state(homestate);
		$stateProvider.state(newarticle);
		$stateProvider.state(article);
		$locationProvider.html5Mode(true);
	}]);
})();