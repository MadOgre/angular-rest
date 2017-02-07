(function(){
	"use strict";
	angular.module("angular-rest")
	.component("editArticleForm", {
		bindings: {
			article: "<"
		},
		controller: ["articlesService", "$state", "$rootScope", function(articlesService, $state, $rootScope){
			var vm = this;
			vm.submitForm = function() {
				articlesService.updateArticle(vm.article.data.slug, {title: vm.article.data.title, body: vm.article.data.body}, vm.article)
				.then(function(data){
					$rootScope.$emit("article:updated", data.data);
					$state.go("^");
				});
			};
		}],
		template: '<form class="article-form">' +
					'<input ng-model="$ctrl.article.data.title" name="title" placeholder="title"><br>' +
					'<input ng-model="$ctrl.article.data.body" name="body" placeholder="body"><br>' +
					'<button ng-click="$ctrl.submitForm()">Submit</button>' +
				  '</form>'
	});
})();