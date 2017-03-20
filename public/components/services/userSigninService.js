angular.module("Main")
.service("userSigninService", ['$http', '$localStorage', 'tokenService', '$location', function ($http, $localStorage, tokenService, $location) {
    var self = this;
    this.user = $localStorage.user || {};

    this.newUserPost = function (newUser) {
        console.log(newUser);
        return $http.post('/auth/signup', newUser)
    };

    this.loginPost = function (anotherUser) {
        console.log(anotherUser)
        return $http.post('/auth/login', anotherUser).then(function (response) {
            tokenService.setToken(response.data.token);
            $localStorage.user = response.data.user;
            self.user = response.data.user;
            return response.data;
        })
    };

    this.logout = function () {
        tokenService.removeToken();
        $location.path('/landing')
    };

}]);