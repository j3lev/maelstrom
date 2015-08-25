module ui {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($routeProvider: ng.route.IRouteProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .when('/about', {
          templateUrl: 'app/about/about.html',
          controller: 'AboutCtrl',
          controllerAs: 'about'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  }
}
