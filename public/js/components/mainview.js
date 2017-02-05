(function(){
	"use strict";
	angular.module("angular-rest")
	.component("mainView", {
		template:
			'<div>' +
				'<h1 ng-repeat="article in $ctrl.articles track by $index">{{article.title}}</h1>' +
				'<article-form cb="$ctrl.addArticle(article)"></article-form>' +
		    '</div>' +
			'<h1>Welcome to homepage</h1>',
		controller: ["articlesService", function(articlesService){
			var vm = this;
			articlesService.getAllArticles()
			.then(function(data){
				vm.articles = data.data;
			});
			vm.addArticle = function(article) {
				vm.articles.push(article);
			};
		}]
	});
})();