angular.module('blank_angular', ['ui.router', 'ui.router.stateHelper', 'ui.bootstrap'])
  .config(function ($locationProvider, $stateProvider, $urlRouterProvider) {
    'use strict';
    $locationProvider.html5Mode(true);
    $stateProvider
        .state('ba', {
            url: '/',
            views: {
                'ba-main': {
                    templateUrl: 'app/states/main.tpl.html',
                    controller: 'MainCtrl as MainCtrl'
                }
            }
        });
    $urlRouterProvider.otherwise('/');
  })
;
