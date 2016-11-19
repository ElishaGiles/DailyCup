angular.module('tiara', ['ui.router']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "./views/home.html"
    })
    // .state('meet', {
    //   url: '/meet-tiara',
    //   templateUrl: "./meet.html"
    // })
    .state('mobile', {
      url: '/mobile',
      templateUrl: "./views/mobile.html"
    })
    .state('menu', {
      url: '/meet-tiara',
      templateUrl: "./views/mobile.html"
    })
    .state('fitness', {
      url: "/fitness",
      templateUrl: "./views/fitness.html"
    })
    .state('enlightenment', {
      url: "/enlightenment",
      templateUrl: "./views/enlightenment.html"
    })
    .state('sustainability', {
      url: "/sustainability",
      templateUrl: "./views/sustainability.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "./views/contact.html"
    })

});
