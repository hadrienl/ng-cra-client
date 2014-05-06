'use strict';

describe('Controller: TodayCtrl', function () {

  var now = new Date('2014-05-07');

  // load the controller's module
  beforeEach(module('ngCraClientApp'));
  beforeEach(module(function($provide) {
    $provide.value('now', now);
  }));

  var TodayCtrl,
    scope,
    days;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, Days) {
    scope = $rootScope.$new();

    days = [new Days({
      date: new Date('2014-05-01'),
      morning: 'plm',
      afternoon: 'ng-cra'
    }), new Days({
      date: new Date('2014-05-02'),
      morning: 'ng-cra',
      afternoon: 'ng-cra'
    }), new Days({
      date: new Date('2014-05-03'),
      morning: 'plm',
      afternoon: 'plm'
    }), new Days({
      date: new Date('2014-05-04'),
      morning: 'ng-cra',
      afternoon: 'ng-cra'
    }), new Days({
      date: new Date('2014-05-05'),
      morning: 'plm',
      afternoon: 'ng-cra'
    })];

    TodayCtrl = $controller('TodayCtrl', {
      $scope: scope,
      days: days
    });
  }));

  it('should get a day', function () {
    var day = scope.getDay(new Date('2014-05-01'));
    expect(day.date).toEqual(new Date('2014-05-01'));
    expect(day.morning).toBe('plm');
    expect(day.afternoon).toBe('ng-cra');

    day = scope.getDay(new Date('2014-05-03'));
    expect(day.date).toEqual(new Date('2014-05-03'));
    expect(day.morning).toBe('plm');
    expect(day.afternoon).toBe('plm');

    day = scope.getDay(new Date('2014-05-20'));
    expect(day.date).toEqual(new Date('2014-05-20'));
    expect(day.morning).toBe(null);
    expect(day.afternoon).toBe(null);
  });

  it('should get last project', function() {
    expect(scope.getLastProject()).toBe('ng-cra');
  });

  it('should follow steps 1', function() {
    expect(scope.step).toBe(1);
    scope.day.morning = 'plm';
    scope.step1();
    expect(scope.day.afternoon).toBe('plm');
    expect(scope.step).toBe(3);
  });
});
