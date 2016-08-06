'use strict';

describe('Controller: DetailsctrlCtrl', function () {

  // load the controller's module
  beforeEach(module('informacionSeriesPeliculasApp'));

  var DetailsctrlCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DetailsctrlCtrl = $controller('DetailsctrlCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DetailsctrlCtrl.awesomeThings.length).toBe(3);
  });
});
