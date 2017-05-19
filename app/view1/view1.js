'use strict';

angular
  .module('myApp.view1', [])
  .config(function($stateProvider) {
    $stateProvider.state({
      name: 'root.view1',
      url: '/view1',
      views: {
        '@': {
          templateUrl: 'view1/view1.html',
          controller: 'View1Ctrl'
        }
      }
    });
  })
  .controller('View1Ctrl', function() {

  });