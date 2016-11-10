angular.module('tiara', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./home.html"
    })
    .state('meet', {
      url: '/meet-tiara',
      templateUrl: "./meet.html"
    })
    .state('mobile', {
      url: '/mobile',
      templateUrl: "./mobile.html"
    })


});
