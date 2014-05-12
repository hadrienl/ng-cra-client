'use strict';

angular.module('ngCraClientApp')
  .controller('SettingsCtrl', function ($scope) {
    $scope.userEdit = angular.copy($scope.user);

    $scope.submit = function (valid) {
      if (valid) {
        $scope.userEdit.$save()
          .$promise
          .then(function() {
            console.log('OK');
            angular.extend($scope.user, $scope.userEdit);
          })
          .catch(function(err) {
            console.error(err);
          });
      }
    };
  });