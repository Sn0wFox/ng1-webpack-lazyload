'use strict';

angular
  .module('myApp.view2', [])
  .config(function($stateProvider) {
    $stateProvider.state({
      name: 'root.view2',
      url: '/view2',
      views: {
        '@': {
          templateUrl: 'view2/view2.html',
          controller: 'View1Ctrl'
        }
      }
    })
  })
  .controller('View2Ctrl', function() {

  });