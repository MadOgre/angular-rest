(function(){
	"use strict";
	angular.module("angular-rest")
	.component("editArticleForm", {
		bindings: {
			article: "<"
		},
		controller: ["articlesService", "$state", function(articlesService, $state){
			var vm = this;
			vm.submitForm = function() {
				articlesService.updateArticle(vm.article.data.slug, {title: vm.article.data.title, body: vm.article.data.body}, vm.article)
				.then(function(){
					$state.go("^", {}, {reload: true});
				});
			};
			vm.cancel = function() {
				$state.go("^");
			};
		}],
		template: '<form name="editArticleForm" class="article-form" ng-submit="editArticleForm.$valid && $ctrl.submitForm()" novalidate>' +
					'<input required autofocus ng-model="$ctrl.article.data.title" name="title" placeholder="title"><br>' +
					'<input ng-model="$ctrl.article.data.body" name="body" placeholder="body"><br>' +
					'<button type="submit">Submit</button>' +
					'<button type="button" ng-click="$ctrl.cancel()">Cancel</button>' +
				  '</form>'
	});
})();