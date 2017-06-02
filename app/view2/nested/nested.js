'use strict';

module.exports = {
  module: angular
    .module('myApp.view2.nested', [])
    .controller('View2NestedCtrl', function($scope) {
      console.log('NestedCtrl');
      $scope.me = 'nested module';
    }),
  template: require('./nested.html')
};
