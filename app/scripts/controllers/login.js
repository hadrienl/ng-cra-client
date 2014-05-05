'use strict';

angular.module('ngCraClientApp')
  .controller('LoginCtrl', function ($scope, $location) {

    /**
     * If user is already logged, redirect to /
     */
    if ($scope.user.uid) {
      $location.path('/');
      return;
    }

    $scope.submit = function() {
      $scope.user.$login(
          $scope.username,
          $scope.password
        )
        .$promise
        .then(function() {
          $location.path('/');
        });
    };
  });
