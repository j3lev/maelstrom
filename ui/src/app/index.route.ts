module ui {
  'use strict';

  export class RouterConfig {
    /** @ngInject */
    constructor($routeProvider: ng.route.IRouteProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'app/routes/main/main.html',
          controller: 'MainController',
          controllerAs: 'main'
        })
        .otherwise({
          redirectTo: '/'
        });
    }
  }
}
