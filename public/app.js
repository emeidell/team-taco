angular.module("Main", ['ngRoute', 'ngStorage', "ui.bootstrap"])
.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: './components/angularRoute/homeRoute/home.html',
            controller: 'homeController'
        })
        .when("/vacation", {
            templateUrl: './components/angularRoute/vacationRoute/vacation.html',
            controller: 'vacationController'
        })
        .when("/profile", {
            templateUrl: './components/angularRoute/profile/profile.html'
        })
        .when('/landing', {
            controller: 'landingController',
            templateUrl: './components/angularRoute/landing-page/landing.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});