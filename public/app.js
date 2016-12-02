angular.module('tiara', ['ui.router', 'ngAnimate']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "../views/home.html"
    })
    .state('meet-tiara', {
      url: '/meet-tiara',
      templateUrl: "../views/meet.html"
    })
    .state('menu', {
      url: '/meet-tiara',
      templateUrl: "../views/mobile.html"
    })
    .state('fitness', {
      url: "/fitness",
      templateUrl: "../views/fitness.html"
    })
    .state('enlightenment', {
      url: "/enlightenment",
      templateUrl: "../views/enlightenment.html"
    })
    .state('sustainability', {
      url: "/sustainability",
      templateUrl: "../views/sustainability.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "../views/contact.html",
      controller: 'contact-ctrl'
    })

});
