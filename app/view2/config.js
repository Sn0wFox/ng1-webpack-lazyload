'use strict';

module.exports = function($stateProvider) {
  $stateProvider.state({
    name: 'root.view2',
    url: '/view2',
    views: {
      '@': {
        templateUrl: 'view2/view2.html',
        controller: 'View2Ctrl'
      }
    },
    resolve: {
      loadLazyCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
        return $ocLazyLoad.load(['view2/view2.js', 'view2/view2.html']);
      }]
    }
  })
};