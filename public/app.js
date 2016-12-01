angular.module('tiara', ['ui.router', 'ngAnimate']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./views/home.html"
    })
    .state('meet-tiara', {
      url: '/meet-tiara',
      templateUrl: "./views/meet.html",
      controller: "mobileController"
    })
    .state('menu', {
      url: '/meet-tiara',
      templateUrl: "./views/mobile.html",
      controller: "mobileController"

    })
    .state('fitness', {
      url: "/fitness",
      templateUrl: "./views/fitness.html",
      controller: "mobileController"
    })
    .state('enlightenment', {
      url: "/enlightenment",
      templateUrl: "./views/enlightenment.html",
      controller: "mobileController"
    })
    .state('sustainability', {
      url: "/sustainability",
      templateUrl: "./views/sustainability.html",
      controller: "mobileController"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "./views/contact.html",
      controller: 'contact-ctrl'
    })

});
