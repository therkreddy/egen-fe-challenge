'use strict';

  var app = angular.module('app', ['ui.router']);

  app.config(['$stateProvider', '$urlRouterProvider',
     function($stateProvider, $urlRouterProvider) {
      // routes
      $urlRouterProvider.otherwise('home');
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
    }
  ]);

