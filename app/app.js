'use strict';
var angular   = require('angular');
var uiRouter  = require('angular-ui-router');
var view1     = require('./view1/view1');
var view2     = require('./view2/view2');

// console.log(uiRouter);

// Declare app level module which depends on views, and components
angular
  .module('myApp', [
    uiRouter.default,
    view1,
    view2
  ])
  .config(['$stateProvider', function($stateProvider) {
    $stateProvider.state({
      name: 'root'
    });
  }]);
