'use strict';

/**
 * The view2 module is meant to be lazily loaded.
 * Therefore, its configuration is exported in the file config.js.
 * The module which will load it will only have to import its config.
 */
module.exports = angular
  .module('myApp.view2', [])
  .controller('View2Ctrl', function($scope) {
    console.log('Thrown from lazily loaded module, line 11');
    $scope.me = 'lazily loaded module';
  });