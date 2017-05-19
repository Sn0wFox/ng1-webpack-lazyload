'use strict';
var angular   = require('angular');
var uiRouter  = require('angular-ui-router');
var view1     = require('./view1/view1');
var lazy      = require('oclazyload/dist/ocLazyLoad');

var view2LazyConfig = require('./view2/config');

console.log(lazy);

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    uiRouter.default,
    lazy,
    view1
  ])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
      name: 'root'
    });

    view2LazyConfig($stateProvider);
  }]);
