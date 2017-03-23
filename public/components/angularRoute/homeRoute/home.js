angular.module("Main")
.controller('homeController', ['$scope', '$uibModal', 'tacoService', "userSigninService", "VacationService", function ($scope, $uibModal, tacoService, userSigninService, VacationService) {
    $scope.user = userSigninService.getUserHome()
    if($scope.user) {
        VacationService.getVacations($scope.user)
            .then (function (response) {
                $scope.vacation = response;
                console.log($scope.vacation);
            })
    }
    $scope.modalDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    $scope.addRestaurant = function (newRestaurant, day) {
        console.log($scope.newDayOfWeek);
        console.log(newRestaurant, "hope its all there");
    };

    $scope.zoomatoDisplay = [];

    $scope.getZoomato = function () {
        tacoService.getRequest()
            .then(function (response) {
                $scope.zoomatoDisplay = response;
            })
    };
    $scope.getZoomato();


    $scope.results = function (index) {
                $scope.restaurant = $scope.zoomatoDisplay.restaurants[index];
                console.log($scope.zoomatoDisplay.restaurants[index]);
                var modalInstance = $uibModal.open({
                    animation: true,
                    templateUrl: "modal.html",
                    scope: $scope,
                    size: "lg",
                    controller: "CloseRestaurantModal"
                });
    }

}]);