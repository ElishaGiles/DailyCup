angular.module('tiara', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./index.html"
    })
    .state('meet', {
      url: '/meet-tiara',
      templateUrl: "./meet.html"
    })



});
