(function(){
	"use strict";
	angular.module("angular-rest")
	.component("articleForm", {
		bindings: {
			cb: "&"
		},
		controller: ["articlesService", function(articlesService){
			var vm = this;
			vm.submitForm = function() {
				articlesService.postArticle({title: vm.title, body: vm.body})
				.then(function(data){
					vm.title = "";
					vm.body = "";
					vm.cb({article: data.data});
				});
			};
		}],
		template: '<form>' +
					'<input ng-model="$ctrl.title" name="title" placeholder="title"><br>' +
					'<input ng-model="$ctrl.body" name="body" placeholder="body"><br>' +
					'<button ng-click="$ctrl.submitForm()">Submit</button>' +
				  '</form>'
	});
})();