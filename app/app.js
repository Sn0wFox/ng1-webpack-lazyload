'use strict';
// var angular  = require('angular');
// var uiRouter = require('ui-router');

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    'ui.router',
    'myApp.view1',
    'myApp.view2'
  ])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
      name: 'root',
      url: '/'
    });
  }]);
