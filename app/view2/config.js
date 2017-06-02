'use strict';

// Thanks to this function, we define a split point in our build.
// Now, all we have to do is to load everything this module need
// through view2.js (or nested imports)
let bundle = function() {
  return import('./view2')
    .then((module) => module)
};

export default ($stateProvider) => {
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
          return bundle().then((b) => {
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

  require('./nested/config')($stateProvider, () => {
    return bundle()
      .then(b => b.nested);
  });
};

