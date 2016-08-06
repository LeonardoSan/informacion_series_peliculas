'use strict';

/**
 * @ngdoc overview
 * @name informacionSeriesPeliculasApp
 * @description
 * # informacionSeriesPeliculasApp
 *
 * Main module of the application.
 */
angular
  .module('informacionSeriesPeliculasApp', [
    'ngRoute',
    'infinite-scroll'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/imdbID/:id', {
        templateUrl: 'views/details.html',
        controller: 'DetailsCtrl',
        controllerAs: 'details'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
