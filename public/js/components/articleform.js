(function(){
	"use strict";
	angular.module("angular-rest")
	.component("articleForm", {
		bindings: {
			cb: "&"
		},
		controller: ["articlesService", "$state", function(articlesService, $state){
			var vm = this;
			vm.submitForm = function() {
				articlesService.postArticle({title: vm.title, body: vm.body})
				.then(function(data){
					vm.title = "";
					vm.body = "";
					vm.cb({article: data.data});
					$state.go("home");
				});
			};
		}],
		template: '<form class="article-form">' +
					'<input ng-model="$ctrl.title" name="title" placeholder="title"><br>' +
					'<input ng-model="$ctrl.body" name="body" placeholder="body"><br>' +
					'<button ng-click="$ctrl.submitForm()">Submit</button>' +
				  '</form>'
	});
})();