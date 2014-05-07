'use strict';

angular
  .module('ngCraClientApp')
  .config(function ($routeProvider, $locationProvider, DaysProvider, ProjectsProvider) {
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
          days: DaysProvider.loadCurrentMonth,
          projects: ProjectsProvider.loadProjects
        }
      })
      .when('/calendar', {
        templateUrl: 'views/calendar.html',
        controller: 'CalendarCtrl'
      })
      .when('/settings', {
        templateUrl: 'views/settings.html',
        controller: 'SettingsCtrl',
        resolve: {
          user: function (Users) {
            return Users.get().$promise;
          }
        }
      })
      .otherwise({
        redirectTo: '/'
      });
    $locationProvider.html5Mode(true);
  });
