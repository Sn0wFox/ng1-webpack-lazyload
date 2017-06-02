'use strict';

export default function config($stateProvider) {
  // 'ngInject';
  $stateProvider.state({
    name: 'root.view1',
    url: '/view1',
    views: {
      '@': {
        // If we use the classic templateUrl property,
        // the template will be loaded externally,
        // unless we use another build tool
        templateProvider: function() {
          return require('./view1.html');
        },
        controller: 'View1Ctrl'
      }
    }
  });
};