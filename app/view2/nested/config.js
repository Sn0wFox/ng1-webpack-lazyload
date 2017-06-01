'use strict';

// We define this here so we load the whole module and its template
// in a single chunk file
// let bundle = function() {
//   return import('./nested')
//     .then(module => module)
// };

module.exports = function($stateProvider, bundle) {
  $stateProvider.state({
    name: 'root.view2.nested',
    url: '/nested',
    views: {
      '@': {
        templateProvider: function() {
          return bundle().then(function(b) {
            return b.template;
          });
        },
        controller: 'View2NestedCtrl'
      }
    },
    resolve: {
      loadNestedCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        return bundle().then(function(b) {
          $ocLazyLoad.load({
            name: b.module.name
          });
          return b.module;
        });
      }]
    }
  });
};

