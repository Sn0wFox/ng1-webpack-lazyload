'use strict';

import angular from 'angular';

/**
 * The view2 module is meant to be lazily loaded.
 * Therefore, its configuration is exported in the file config.js.
 * The module which will load it will only have to import its config.
 */
module.exports = {
  module: angular
    .module('myApp.view2', [require('./nested/nested').module.name])
    .controller('View2Ctrl', function($scope) {
      console.log('Thrown from lazily loaded module, line 13');
      $scope.me = 'lazily loaded module';
    }),
  template: require('./view2.html'),
  nested: require('./nested/nested')
};
