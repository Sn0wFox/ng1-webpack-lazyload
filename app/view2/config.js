'use strict';

// We define this here so we load the whole module and its template
// in a single chunk file
let bundle = function() {
  return import('./view2.js')
    .then((module) => {
      return {
        module: module,
        template: require('./view2.html')
      };
    })
};

module.exports = function($stateProvider) {
  $stateProvider.state({
    name: 'root.view2',
    url: '/view2',
    views: {
      '@': {
        // View2 module is meant to be lazily loaded,
        // so we must provide a templateProvider instead of a templateUrl.
        // Otherwise, the ui-router will load the template by its own
        // and won't use the chunk bundle
        templateProvider: function() {
          return bundle().then(function(b) {
            return b.template;
          });
        },
        controller: 'View2Ctrl'
      }
    },
    resolve: {
      loadLazyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        // Here we define a split point
        return bundle().then(function(b) {
          $ocLazyLoad.load({
            name: b.module.name
          });
          return module;
        });
      }]
    }
  });
};

