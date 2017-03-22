angular.module("Main")
.service("userSigninService", ['$http', '$localStorage', 'tokenService', '$location', function ($http, $localStorage, tokenService, $location) {
    var self = this;

    this.newUserPost = function (newUser) {
        return $http.post('/auth/signup', newUser)
    };

    this.getUser = function () {
        return $localStorage.user || $location.path('/landing');
    };

    this.getUserHome = function () {
        return $localStorage.user || "";
    };

    this.loginPost = function (anotherUser) {
        console.log(anotherUser);
        return $http.post('/auth/login', anotherUser).then(function (response) {
            console.log(response);
            tokenService.setToken(response.data.token);
            $localStorage.user = response.data.user;

            return response.data;
        })
    };

    this.logout = function () {
        tokenService.removeToken();
        $location.path('/landing')
    };

}]);