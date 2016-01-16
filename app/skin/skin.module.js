(function() {
  'use strict';

  var text = {
    app: {
      name: 'BitCloud Self Service'
    },
    login: {
      brand: '<strong>BitCloud</strong> 自助服务',
      message: '<strong>欢迎使用BitCloud自助云服务!</strong>'
    }
  };

  angular.module('app.skin', [])
    .value('Text', text)
    .config(configure);

  /** @ngInject */
  function configure(routerHelperProvider, exceptionHandlerProvider) {
    exceptionHandlerProvider.configure('[ManageIQ] ');
    routerHelperProvider.configure({docTitle: 'BitCloud: '});
  }
})();
