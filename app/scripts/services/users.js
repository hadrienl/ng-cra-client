'use strict';

angular.module('ngCraClientApp')
  .service('Users', function Users($http, $q) {
    function Users(config) {
      _.extend(this, config);
    }
    Users.get = function() {
      var deferred = $q.defer(),
        ret = new Users();

      $http({
        method: 'get',
        url: '/api/test'
      })
      .success(function(data) {
        _.extend(ret, data);
      })
      .error(function(err) {
        console.log(err);
      });

      ret.$promise = deferred.promise;

      return ret;
    };
    return Users;
  });
