(function(){
	"use strict";
	angular.module("angular-rest")
	.component("article", {
		bindings: {
			article: "<"
		},
		controller: ["$state", function($state) {
			var vm = this;
			vm.$onInit = function(){
				if (!vm.article.data) {
					$state.go("home");
				}
			};

		}],
		template:
			'<h1>{{$ctrl.article.data.title}}</h1>' +
			'<p>{{$ctrl.article.data.body}}</p>' +
			'<p>Created on: {{$ctrl.article.data.created_at | date : "MMMM d yyyy, h:mm:ss a"}}</p>' +
			'<a ui-sref="home">Back to articles listing</a>'
	});
})();