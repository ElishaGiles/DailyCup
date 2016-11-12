angular.module('tiara', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./home.html"
    })
    // .state('meet', {
    //   url: '/meet-tiara',
    //   templateUrl: "./meet.html"
    // })
    .state('mobile', {
      url: '/mobile',
      templateUrl: "./mobile.html"
    })
    .state('menu', {
      url: '/meet-tiara',
      templateUrl: "./mobile.html"
    })
    .state('menuSlide', {
      url: '/menuSlide',
      templateUrl: "./menuSlide.html"
    })
    .state('sustainability', {
      url: "/sustainability",
      templateUrl: "./sustainability.html"
    })
    .state('enlightenment', {
      url: "/enlightenment",
      templateUrl: "./enlightenment.html"
    })

});
