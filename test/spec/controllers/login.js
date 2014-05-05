'use strict';

describe('Controller: LoginCtrl with authed user', function () {

  // load the controller's module
  beforeEach(module('ngCraClientApp'));

  var LoginCtrl,
    scope,
    $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Users) {
    scope = $rootScope.$new();
    $location = {
      path: jasmine.createSpy('path')
    };
    scope.user = new Users({
      uid: 1
    });
    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      $location: $location
    });
  }));

  it('should redirect if user is logged', function () {
    expect($location.path).toHaveBeenCalledWith('/')
  });
});

describe('Controller: LoginCtrl', function () {

  // load the controller's module
  beforeEach(module('ngCraClientApp'));

  var LoginCtrl,
    scope,
    $httpBackend,
    $location;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Users, _$httpBackend_) {
    scope = $rootScope.$new();

    $httpBackend = _$httpBackend_;
    $location = {
      path: jasmine.createSpy('path')
    };

    scope.user = new Users();

    LoginCtrl = $controller('LoginCtrl', {
      $scope: scope,
      $location: $location
    });
  }));

  it('should try to auth user', function () {
    spyOn(scope.user, '$login').andCallThrough();
    scope.username = 'foo';
    scope.password = 'bar';
    $httpBackend.expectPOST('/api/login')
      .respond({uid: 1, username: 'hadrien'});

    scope.submit();

    expect(scope.user.$login).toHaveBeenCalledWith('foo', 'bar');

    $httpBackend.flush();

    expect($location.path).toHaveBeenCalledWith('/');
  });
});
