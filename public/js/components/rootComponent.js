(function(){
	"use strict";
	angular.module("angular-rest")
	.component("rootComponent", {
		bindings: {
			articles: "<"
		},
		template: '<ui-view></ui-view>'
	});
})();