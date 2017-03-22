angular.module("Main")
.controller('homeController', ['$scope', '$uibModal', 'tacoService', "userSigninService", "VacationService", function ($scope, $uibModal, tacoService, userSigninService, VacationService) {
    $scope.user = userSigninService.getUserHome()
    if($scope.user) {
        $scope.vacation = VacationService.getVacations($scope.user)
        console.log($scope.vacation, "string")
    }

    $scope.zoomatoDisplay = [];

    $scope.getZoomato = function () {
        tacoService.getRequest()
            .then(function (response) {
                $scope.zoomatoDisplay = response;
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

}]);