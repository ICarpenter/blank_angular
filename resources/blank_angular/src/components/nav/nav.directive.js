angular.module('ba')
    .directive('nav', function () {
        'use strict';
        return {
            restrict: 'E',
            controller: 'NavbarCtrl',
            controllerAs: 'NavbarCtrl',
            templateUrl: 'components/nav/nav.tpl.html'
        };
    });
