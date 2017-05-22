'use strict';

module.exports = angular
  .module('myApp.view1', [])
  .config(function($stateProvider) {
    $stateProvider.state({
      name: 'root.view1',
      url: '/view1',
      views: {
        '@': {
          // If we use the classic templateUrl property,
          // the template will be loaded externally,
          // unless we use another build tool
          templateProvider: function() {
            return require('./view1.html');
          },
          controller: 'View1Ctrl'
        }
      }
    });
  })
  .controller('View1Ctrl', function() {
    console.log('View1 controller, line 23! -> What does source map say?');
  }).name;