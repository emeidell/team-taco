angular.module("Main")
.controller('homeController', ['$scope', '$uibModal', 'tacoService', function ($scope, $uibModal, tacoService) {
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


    $scope.results = function (index) {
                $scope.restaurant = $scope.zoomatoDisplay.restaurants[index]
                console.log($scope.zoomatoDisplay.restaurants[index]);
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "modal.html",
                    scope: $scope,
                    size: "lg",
                    controller: "CloseRecipeModal"
                })
    }
    $scope.string = function(){
        console.log("string");
    }
}]);