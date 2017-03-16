angular.module("Main", ['ngRoute'])
.config(function ($routeProvider) {
    $routeProvider
        .when("/home", {
            templateUrl: './components/angularRoute/homeRoute/home.html',
            controller: 'homeController'
        })
        .when("/vacation", {
            templateUrl: './components/angularRoute/vacationRoute/vacation.html'
        })
        .when("/profile", {
            templateUrl: './components/angularRoute/'
        })
        .when('/landing', {
            controller: 'landingController',
            templateUrl: './components/angularRoute/landing-page/landing.html'
        })
        .otherwise({
            redirectTo: '/home'
        });
});