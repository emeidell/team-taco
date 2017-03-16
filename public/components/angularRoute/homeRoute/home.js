angular.module("Main")
.controller('homeController', ['$scope', 'tacoService', function ($scope, tacoService) {
    $scope.zoomatoDisplay = [];

    $scope.getZoomato = function () {
        console.log("im working");
        tacoService.getRequest()
            .then(function (response) {
                $scope.zoomatoDisplay = response;
                console.log($scope.zoomatoDisplay);
            })
    };
    $scope.getZoomato();
}]);