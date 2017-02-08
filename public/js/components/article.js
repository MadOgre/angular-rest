(function(){
	"use strict";
	angular.module("angular-rest")
	.component("article", {
		bindings: {
			article: "<",
		},
		controller: ["$state", "articlesService", function($state, articlesService) {
			var vm = this;
			vm.$onInit = function(){
				if (!vm.article.data) {
					$state.go("home.mainview");
				}
			};
			vm.deleteArticle = function() {
				if (window.confirm("This will permanently delete the article")) {
					articlesService.deleteArticle(vm.article.data.slug)
					.then(function(){
						$state.go("home.mainview", {}, {reload: true});
					});					
				}
			};
		}],
		template:
			'<h1>{{$ctrl.article.data.title}}</h1>' +
			'<p>{{$ctrl.article.data.body}}</p>' +
			'<p>Created on: {{$ctrl.article.data.created_at | date : "MMMM d yyyy, h:mm:ss a"}}</p>' +
			'<p ng-if="$ctrl.article.data.updated_at">Updated at: {{$ctrl.article.data.updated_at | date : "MMMM d yyyy, h:mm:ss a"}}</p>' +
			'<a ui-sref="home.mainview">Back to articles listing</a><br>' + 
			'<a ui-sref="home.article.edit">Edit this article</a><br>' +
			'<a class="deletelink" href="" ng-click="$ctrl.deleteArticle()">Delete this article</a>' +
			'<ui-view></ui-view>'
	});
})();