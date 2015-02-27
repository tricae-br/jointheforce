'use strict';

/**
 * @ngdoc function
 * @name things4cutiesApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the things4cutiesApp
 */
angular.module('things4cutiesApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
