'use strict';

/**
 * @ngdoc function
 * @name informacionSeriesPeliculasApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the informacionSeriesPeliculasApp
 */
angular.module('informacionSeriesPeliculasApp')
  .controller('MainCtrl', function ($scope, $http) {
   		var busqueda = false;
		var page = 1;
		$scope.nothing = false;
		$scope.items = [];

		$scope.buscar = function(scroll){
			if(scroll == 0){
				console.log('no hay scroll');
				busqueda = true;
				page = 1;
				$http.get('http://www.omdbapi.com/?s='+$scope.busqueda+'&page='+page+'&r=json')
				.success(function(data){
					$scope.items = [];
					if (data.Response == 'False'){
						$scope.nothing = true;
					}
					else{
						console.log('data', data);
					for(var i = 0; i < data.Search.length; i++) {
     					$scope.items.push(data.Search[i]);
   					 }
   					 console.log('items', $scope.items);
   					 $scope.nothing = false;
					}

					
				})
				.error(function(error){
					console.log('error', error);
				});
			}

			else if(scroll == 1 && busqueda == true){
				console.log('si hay scroll');
				page++;
				$http.get('http://www.omdbapi.com/?s='+$scope.busqueda+'&page='+page+'&r=json')
				.success(function(data){
					console.log('data', data);
					for(var i = 0; i < 10; i++) {
     					$scope.items.push(data.Search[i]);
   					 }
   					  console.log('items', $scope.items);

				})
				.error(function(error){
					console.log('error', error);
				});
			}
			else{
			}
			
		}
  

  });
