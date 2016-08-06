'use strict';

/**
 * @ngdoc directive
 * @name informacionSeriesPeliculasApp.directive:restricted
 * @description
 * # restricted
 */
angular.module('informacionSeriesPeliculasApp')
  .directive('restricted', function () {
    return {
        restrict: "A",
        link: function(scope, elem, attrs) {
            var limit = parseInt(attrs.limitTo);
            angular.element(elem).on("keypress", function(e) {
                if(e.key == '@' || e.key == '#'){
                	e.preventDefault();
                }
            });
        }
    }
  });
