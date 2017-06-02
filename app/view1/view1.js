'use strict';

import angular from 'angular';
import config from './config';

export default (function() {
  return angular
    .module('myApp.view1', [])
    .config(['$stateProvider', config])
    .controller('View1Ctrl', ($ocLazyLoad) => {
      console.log($ocLazyLoad);
      console.log('View1 controller, line 23! -> What does source map say?');
    }).name
})();
