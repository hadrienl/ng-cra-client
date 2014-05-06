'use strict';

angular
  .module('ngCraClientApp')
  .config(function ($routeProvider, $locationProvider, DaysProvider) {
    $routeProvider
      .when('/login', {
        templateUrl: 'views/login.html',
        controller: 'LoginCtrl'
      })
      .when('/logout', {
        templateUrl: 'views/logout.html',
        controller: 'LogoutCtrl'
      })
      .when('/', {
        templateUrl: 'views/today.html',
        controller: 'TodayCtrl',
        resolve: {
          days: DaysProvider.loadCurrentMonth
        }
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
