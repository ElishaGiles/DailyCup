angular.module('tiara', ['ui.router', 'ngAnimate']).config(function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: "../views/html/home.html"
    })
    .state('meet-tiara', {
      url: '/meet-tiara',
      templateUrl: "../views/html/meet.html"
    })
    .state('menu', {
      url: '/meet-tiara',
      templateUrl: "../views/html/mobile.html"
    })
    .state('fitness', {
      url: "/fitness",
      templateUrl: "../views/html/fitness.html"
    })
    .state('enlightenment', {
      url: "/enlightenment",
      templateUrl: "../views/html/enlightenment.html"
    })
    .state('sustainability', {
      url: "/sustainability",
      templateUrl: "../views/html/sustainability.html"
    })
    .state('contact', {
      url: "/contact",
      templateUrl: "../views/html/contact.html",
      controller: 'contact-ctrl'
    })
    .state('shouldI', {
      url: "/shouldIWorkout",
      templateUrl: "../views/html/shouldI.html",
      controller: "weatherCtrl"
    })
    .state('login', {
      url: "/login",
      templateUrl: "../views/html/login.html",
      controller: "loginCtrl"
    })
    .state('recipes', {
      url: "/recipes",
      templateUrl: "../views/html/recipes.html"
    })
    .state('register', {
      url: "/register",
      templateUrl: "../views/html/register.html",
      controller: "registerCtrl"
    })
    .state('blog', {
      url: "/blog",
      templateUrl: "../views/html/blog.html"
    })
    .state('a-blog', {
      url: "/blog/1234",
      templateUrl: "../views/admin/a-blog.html",
      controller: "aBlogCtrl"
    })

});
