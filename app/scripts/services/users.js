'use strict';

angular.module('ngCraClientApp')
  .factory('Users', function Users($http, $q) {
    function Users(config) {
      this.uid = null;
      this.username = '';
      this.firstname = '';
      this.lastname = '';
      _.extend(this, config);
    }

    Users.get = function (config) {
      var deferred = $q.defer(),
        ret = new Users();

      config = config || {};

      $http({
        method: 'get',
        url: '/api/users/' + (config.uid || '')
      })
        .success(function (data) {
          _.extend(ret, data);
          deferred.resolve(ret);
        })
        .error(function (err) {
          deferred.reject(err);
        });

      ret.$promise = deferred.promise;

      return ret;
    };

    Users.checkUsername = function (username) {
      var deferred = $q.defer();

      $http({
        method: 'get',
        url: '/api/users/username/exists/' + username
      })
        .success(function (data) {
          deferred.resolve(parseInt(data));
        })
        .error(function (err) {
          deferred.reject(err);
        });

      return deferred.promise;
    };

    Users.prototype.$login = function (username, password) {
      var deferred = $q.defer(),
        self = this;

      $http({
        method: 'post',
        url: '/api/auth/login',
        data: {
          username: username,
          password: password
        }
      })
        .success(function (data) {
          deferred.resolve(_.extend(self, data));
        })
        .error(function (err) {
          deferred.reject(err);
        });

      self.$promise = deferred.promise;

      return this;
    };

    Users.prototype.$logout = function () {
      var deferred = $q.defer(),
        self = this;

      $http({
        method: 'get',
        url: '/api/auth/logout'
      })
        .success(function () {
          _.extend(self, new Users());
          deferred.resolve(self);
        })
        .error(function (err) {
          deferred.reject(err);
        });

      self.$promise = deferred.promise;

      return this;
    };

    Users.prototype.$save = function () {
      var deferred = $q.defer(),
        self = this;

      $http({
        method: 'put',
        url: '/api/users/' + self.uid,
        data: this
      })
        .success(function () {
          deferred.resolve(self);
        })
        .error(function (err) {
          deferred.reject(err);
        });

      self.$promise = deferred.promise;

      return this;
    };

    return Users;
  });
