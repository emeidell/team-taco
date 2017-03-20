angular.module("Main")
    .controller('landingController', ['$scope', 'userSigninService', '$localStorage', '$location', function ($scope, userSigninService, $localStorage, $location) {
        $scope.zoomatoDisplay = [];

        $scope.signup = function (user) {
            userSigninService.newUserPost(user)
                .then(function (response) {
                    console.log(response);
                })
        };
        $scope.login = function (user) {
            console.log(user)
            userSigninService.loginPost(user)
                .then(function (data) {
                    $location.path("/home");
                }, function (data) {
                    alert(data.message);
                });
        };

    }]);