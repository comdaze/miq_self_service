(function() {
  'use strict';

  angular.module('app.config')
    .config(navigation)
    .run(init);

  /** @ngInject */
  function navigation(NavigationProvider) {
    NavigationProvider.configure({
      items: {
        primary: {
          dashboard: {
            title: '仪表盘',
            state: 'dashboard',
            icon: 'fa fa-dashboard'
          },
          services: {
            title: '我的服务',
            state: 'services',
            icon: 'fa fa-file-o'
          },
          requests: {
            title: '我的申请',
            state: 'requests',
            icon: 'fa fa-file-text-o'
          },
          marketplace: {
            title: '服务目录',
            state: 'marketplace',
            icon: 'fa fa-copy'
          }
        },
        secondary: {
          help: {
            title: '帮助',
            icon: 'fa fa-question-circle',
            state: 'help'
          },
          about: {
            title: '关于我',
            icon: 'fa fa-user',
            state: 'about-me'
          },
          search: {
            title: '搜索',
            icon: 'fa fa-search',
            state: 'search'
          }
        }
      }
    });
  }

  /** @ngInject */
  function init(lodash, CollectionsApi, Navigation, NavCounts) {
    NavCounts.add('services', fetchServices, 60 * 1000);
    NavCounts.add('requests', fetchRequests, 60 * 1000);
    NavCounts.add('marketplace', fetchServiceTemplates, 60 * 1000);

    function fetchRequests() {
      CollectionsApi.query('service_requests').then(lodash.partial(updateCount, 'requests'));
    }

    function fetchServices() {
      CollectionsApi.query('services').then(lodash.partial(updateCount, 'services'));
    }

    function fetchServiceTemplates() {
      CollectionsApi.query('service_templates').then(lodash.partial(updateCount, 'marketplace'));
    }

    function updateCount(item, data) {
      Navigation.items.primary[item].count = data.count;
    }
  }
})();
