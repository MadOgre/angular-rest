(function(){
	"use strict";
	angular.module("angular-rest")
	.service("articlesService", ["$http", function($http){
		var vm = this;
		vm.getAllArticles = function() {
			return $http.get("/api/articles");
		};
		vm.postArticle = function(article) {
			return $http.post("/api/article", article);
		};
		vm.getArticle = function(slug) {
			return $http.get("/api/article/" + slug);
		};
		vm.updateArticle = function(slug, payload) {
			return $http.put("/api/article/" + slug, payload);
		};
	}]);
})();