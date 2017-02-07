(function(){
	"use strict";
	angular.module("angular-rest")
	.component("rootComponent", {
		bindings: {
			articles: "<"
		},
		controller: ["$rootScope", function($rootScope){
			var vm = this;
			$rootScope.$on("article:updated", function(event, article){
				var index = -1;
				for (var i = 0; i < vm.articles.length; i++) {
					if (vm.articles[i].slug === article.slug) {
						index = i;
						break;
					}
				}
				if (index !== -1) {
					vm.articles[index] = article;
				}
			});
			$rootScope.$on("article:created", function(event, article){
				vm.articles.push(article);
			});
		}],
		template: '<ui-view></ui-view>'
	});
})();