angular.module("Main")
    .service("AuthInterceptor", ["$q", "$location", "tokenService", function ($q, $location, TokenService) {
        this.request = function(config) {
            var token = TokenService.getToken();
            if (token) {
                config.headers = config.headers || {};
                config.headers.Authorization = "Bearer " + token;
            }
            config.headers.bob = "Not really";
            return config;
        };

        this.responseError = function(response) {
            if (response.status === 401) {
                TokenService.removeToken();
                $location.path("/landing");
            }
            return $q.reject(response);
        };
    }]);