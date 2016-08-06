'use strict';

describe('Directive: restricted', function () {

  // load the directive's module
  beforeEach(module('informacionSeriesPeliculasApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<restricted></restricted>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the restricted directive');
  }));
});
