(function(){
	"use strict";
	angular.module("angular-rest")
	.service("articlesService", ["$http", function($http){
		var vm = this;
		var promise = $http.get("/api/articles");
		vm.getAllArticles = function() {
			return promise;
		};
		vm.postArticle = function(article) {
			return $http.post("/api/article", article);
		};
	}]);
})();