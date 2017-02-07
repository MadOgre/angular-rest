(function(){
	"use strict";
	angular.module("angular-rest")
	.config(["$stateProvider", "$locationProvider", "$urlRouterProvider", function(
			$stateProvider, $locationProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise("/");
		var homestate = {
			name: "home",
			abstract: true,
			component: "rootComponent",
			resolve: {
				articles: ["articlesService", function(articlesService) {
					return articlesService.getAllArticles().then(function(data){
						return data.data;
					});
				}]
			}
		};
		var mainview = {
			name: "home.mainview",
			url: "/",
			component: "mainView"
		};
		var newarticle = {
			name: "home.mainview.newarticle",
			component: "newArticleForm"
		};
		var article = {
			name: "home.article",
			url: "/article/{slug}",
			component: "article",
			resolve: {
				article: ["articlesService", "$stateParams", function(articlesService, $stateParams) {
					return articlesService.getArticle($stateParams.slug);
				}]
			}
		};
		var editarticle = {
			name: "home.article.edit",
			component: "editArticleForm"
		};
		$stateProvider.state(homestate);
		$stateProvider.state(mainview);
		$stateProvider.state(newarticle);
		$stateProvider.state(editarticle);
		$stateProvider.state(article);
		$locationProvider.html5Mode(true);
	}]);
})();