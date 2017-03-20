angular.module('Main')
    .config(["$httpProvider", function ($httpProvider) {
        $httpProvider.interceptors.push("AuthInterceptor");
    }]);