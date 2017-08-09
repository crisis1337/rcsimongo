(function() {
  'use strict';

  angular
    .module('rcsiweb2')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      })              .state('home.form', {
                          url: '/form',
                          templateUrl: 'app/main/form.html',
                          controller: 'FormController',
                          controllerAs: 'vmForm'
                      })

                      // nested states
                      // each of these sections will have their own view
                      // url will be nested (/form/profile)
                      .state('home.form.profile', {
                          url: '/profile',
                          templateUrl: 'app/main/form-profile.html'
                      })

                      // url will be /form/interests
                      .state('home.form.pastmeds', {
                          url: '/pastmeds',
                          templateUrl: 'app/main/form-pastmeds.html'
                      })

                      // url will be /form/payment
                      .state('home.form.physical', {
                          url: '/retrieve',
                          templateUrl: 'app/main/form-physical.html'
                      }).state('home.retrieve', {
                                                   url: '/details',
                                                   templateUrl: 'app/main/retrieve.html',
                                                   controller: 'DetailsController',
                                                   controllerAs: 'vmDetails'
                                               })


                      ;
      ////



              // route to show our basic form (/form)


    $urlRouterProvider.otherwise('/');
  }

})();
