(function(){
	"use strict";
	angular.module("angular-rest")
	.component("newArticleForm", {
		controller: ["articlesService", "$state", function(articlesService, $state){
			var vm = this;
			vm.submitForm = function() {
				articlesService.postArticle({title: vm.title, body: vm.body})
				.then(function(){
					$state.go("^", {}, {reload: true});
				});
			};
			vm.cancel = function() {
				$state.go("^");
			};
		}],
		template: '<form name="newArticleForm" class="article-form"  ng-submit="newArticleForm.$valid && $ctrl.submitForm()" novalidate>' +
					'<input required autofocus ng-model="$ctrl.title" name="title" placeholder="title"><br>' +
					'<input ng-model="$ctrl.body" name="body" placeholder="body"><br>' +
					'<button type="submit">Submit</button>' +
					'<button type="button" ng-click="$ctrl.cancel()">Cancel</button>' +
				  '</form>'
	});
})();