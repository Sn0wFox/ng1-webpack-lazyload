'use strict';

// NOTE: since we are using webpack and babel for code splitting using import(),
//       we can use the handy es6 import syntax instead of require:
//       https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Statements/import

import angular  from 'angular';                     // Angular is imported here and not in the html
import uiRouter from 'angular-ui-router';           // Same for needed other modules (from npm, bower one is legacy)
import view1    from'./view1/view1';                // A needed static module
import lazy     from 'oclazyload/dist/ocLazyLoad';  // To lazily load modules
import view2LazyConfig from './view2/config';       // Config for lazily loaded module View2

console.log(uiRouter);
console.log('Thrown from line 14');

/**
 * The top level module, like we always do with AngularJS.
 * The only difference is that needed modules are imported before.
 *
 * NOTES:
 *    - By default, modules usually export their name.
 *    - Since we are using bower and not npm for angular module,
 *      sometimes the import syntax will be les straightforward:
 *      see oclazyload import.
 */
angular
  .module('myApp', [
    uiRouter,
    lazy,             // Standard export, i.e. the module's name
    view1             // Custom module, following the standard export
  ])
  .config(function($stateProvider) {
    $stateProvider.state({
      name: 'root'
    });

    // Finally, configure lazy modules thanks to exported config
    view2LazyConfig($stateProvider);
  });
