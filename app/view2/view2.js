'use strict';

angular
  .module('myApp.view2', [])
  .controller('View2Ctrl', function($scope) {
    $scope.me = 'lazily loaded module';
  });