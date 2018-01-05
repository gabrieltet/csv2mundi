angular.module('fileController', [])

	.controller('mainController', ['$scope','$http','Files', function($scope, $http, Files) {
		$scope.loading = true;

		Files.get()
			.success(function(data) {
				$scope.files = data;
				$scope.loading = false;
				if ($scope.files.length == 0){
					$scope.isEmpty = false;
				}
			});
}]);