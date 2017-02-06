(function(){
	"use strict";
	angular.module("angular-rest")
	.component("mainView", {
		bindings: {
			articles: "<"
		},
		controller: function(){
			var vm = this;
			vm.addArticle = function(article) {
				vm.articles.push(article);
			};
		},
		template:
			'<div>' +
				'<a ui-sref="home.newarticle">Create New Article</a>' + 
				'<p ng-repeat="article in $ctrl.articles track by $index"><a ui-sref="article({slug: article.slug})">{{article.title}}</a></p>' +
				'<ui-view cb="$ctrl.addArticle(article)"></ui-view>' +
		    '</div>' +
			'<h1>Welcome to homepage</h1>'
	});
})();