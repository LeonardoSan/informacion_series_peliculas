'use strict';

/**
 * @ngdoc function
 * @name informacionSeriesPeliculasApp.controller:DetailsCtrl
 * @description
 * # DetailsCtrl
 * Controller of the informacionSeriesPeliculasApp
 */
angular.module('informacionSeriesPeliculasApp')
  .controller('DetailsCtrl', function ($scope, $http, $routeParams) {
    var id = $routeParams.id;
		$http.get('http://www.omdbapi.com/?i='+id+'&plot=full&r=json')
			.success(function(data){
				console.log('data', data);
				$scope.datos = data;
				if($scope.datos.totalSeasons == null){
					$scope.seasons = false;
				}
			})
			.error(function(error){
				console.log('error', error);
			});
  });
