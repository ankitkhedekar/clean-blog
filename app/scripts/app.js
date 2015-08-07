'use strict';

/**
 * @ngdoc overview
 * @name cleanBlogApp
 * @description
 * # cleanBlogApp
 *
 * Main module of the application.
 */
angular
  .module('cleanBlogApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'LocalStorageModule'
  ])
  .config(function (localStorageServiceProvider) {
    localStorageServiceProvider.setPrefix('cb');
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .when('/post', {
        templateUrl: 'views/post.html',
        controller: 'PostCtrl',
        controllerAs: 'post'
      })
      .when('/contact', {
        templateUrl: 'views/contact.html',
        controller: 'ContactCtrl',
        controllerAs: 'contact'
      })
      .otherwise({
        redirectTo: '/'
      });

    //$locationProvider.html5Mode(true);
  });
