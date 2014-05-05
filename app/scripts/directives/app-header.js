'use strict';

angular.module('ngCraClientApp')
  .directive('appHeader', function () {
    return {
      templateUrl: 'views/app-header.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the appHeader directive');
      }
    };
  });
