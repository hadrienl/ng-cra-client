'use strict';

angular.module('ngCraClientApp')
  .controller('SettingsCtrl', function ($scope, user) {

    $scope.user = user;

    $scope.submit = function (valid) {
      if (valid) {
        user.$save()
          .$promise
          .then(function() {
            console.log('OK');
          })
          .catch(function(err) {
            console.error(err);
          });
      }
    };
  });