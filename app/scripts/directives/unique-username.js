'use strict';

angular.module('ngCraClientApp')
  .directive('uniqueUsername', ['Users', function (Users) {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: function postLink(scope, element, attrs, ngModelCtrl) {
        var original;
        ngModelCtrl.$formatters.unshift(function (modelValue) {
          original = modelValue;
          return modelValue;
        });

        ngModelCtrl.$parsers.push(function (viewValue) {
          if (viewValue && viewValue !== original) {
            Users.checkUsername(viewValue)
              .then(function (exist) {
                if (exist === 1) {
                  ngModelCtrl.$setValidity('uniqueUsername', false);
                } else {
                  ngModelCtrl.$setValidity('uniqueUsername', true);
                }
              })
              .catch(function () {
                ngModelCtrl.$setValidity('uniqueUsername', false);
              });
            return viewValue;
          }
        });
      }
    };
  }]);
