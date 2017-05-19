'use strict';

module.exports = function($stateProvider) {
  $stateProvider.state({
    name: 'root.view2',
    url: '/view2',
    views: {
      '@': {
        // templateUrl: 'view2/view2.html',
        templateProvider: function() {
          return import('./view2.html').then(function(template) {
            return template;
          });
        },
        controller: 'View2Ctrl'
      }
    },
    resolve: {
      loadLazyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // Here we define a split point
        return import('./view2.js').then(function(module) {
          $ocLazyLoad.load({
            name: module.name
          });
          return module;
        });
      }]
    }
  });
};

