(function(){
	"use strict";
	angular.module("angular-rest")
	.component("mainView", {
		bindings: {
			articles: "<"
		},
		template:
			'<div>' +
				'<a ui-sref="home.mainview.newarticle">Create New Article</a>' + 
				'<p ng-repeat="article in $ctrl.articles track by $index"><a ui-sref="home.article({slug: article.slug})">{{article.title}}</a></p>' +
				'<ui-view></ui-view>' +
		    '</div>' +
			'<h1>Welcome to homepage</h1>'
	});
})();