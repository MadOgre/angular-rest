(function(){
	"use strict";
	angular.module("angular-rest")
	.component("mainView", {
		template:
			'<div>' +
				'<a ui-sref="home.newarticle">Create New Article</a>' + 
				'<p ng-repeat="article in $ctrl.articles track by $index">{{article.title}}</p>' +
				'<ui-view cb="$ctrl.addArticle(article)"></ui-view>' +
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