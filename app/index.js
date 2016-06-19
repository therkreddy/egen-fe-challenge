'use strict';

  var app = angular.module('app', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider',
     function($stateProvider, $urlRouterProvider) {
      // routes
      $urlRouterProvider.otherwise('users');
      $stateProvider
        .state('home', {
                  url: '/home',
          templateUrl: './templates/home.html',
          controller: 'HomeController',
        })
         .state('message', {
                  url: '/message',
          templateUrl: './templates/message.html',
          controller: 'HomeController',
        })
         .state('users', {
                  url: '/users',
          templateUrl: './templates/users.html',
          controller: 'UserController',
        })
        .state('register', {
                  url: '/register',
          templateUrl: './templates/user-register.html',
          controller: 'UserController',
        })
        .state('userDetail', {
                  url: '/userDetail',
          templateUrl: './templates/userDetail.html',
          controller: 'UserController',
        })
    }
  ]);

  app.constant('_', window._);

  app.run(function($rootScope) {
    $rootScope._ = window._;
  });

