'use strict';

describe('Controller: TodayCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCraClientApp'));

  var TodayCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    TodayCtrl = $controller('TodayCtrl', {
      $scope: scope
    });
  }));

  it('should write a test', function () {
    
  });
});
