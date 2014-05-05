'use strict';

angular.module('ngCraClientApp')
  .directive('appNav', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the appNav directive');
      }
    };
  });
