(function(){
	"use strict";
	angular.module("angular-rest")
	.component("article", {
		bindings: {
			article: "<",
		},
		controller: ["$state", function($state) {
			var vm = this;
			vm.$onInit = function(){
				if (!vm.article.data) {
					$state.go("home.mainview");
				}
			};

		}],
		template:
			'<h1>{{$ctrl.article.data.title}}</h1>' +
			'<p>{{$ctrl.article.data.body}}</p>' +
			'<p>Created on: {{$ctrl.article.data.created_at | date : "MMMM d yyyy, h:mm:ss a"}}</p>' +
			'<a ui-sref="home.mainview">Back to articles listing</a><br>' + 
			'<a ui-sref="home.article.edit">Edit this article</a>' +
			'<ui-view></ui-view>'
	});
})();