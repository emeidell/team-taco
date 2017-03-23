angular.module("Main")
    .controller('homeController', ['$scope', '$uibModal', 'tacoService', "userSigninService", "VacationService", function ($scope, $uibModal, tacoService, userSigninService, VacationService) {
        $scope.user = userSigninService.getUserHome()
        if ($scope.user) {
            $scope.vacation = VacationService.getVacations($scope.user)
            console.log($scope.user);
        }


        $scope.profileName = $scope.user.displayName.charAt(0).toUpperCase() + $scope.user.displayName.slice(1);
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
            var modalInstance = $uibModal.open({
                animation: true,
                templateUrl: "modal.html",
                scope: $scope,
                size: "lg",
                controller: "CloseRecipeModal"
            })
        };

        $scope.searchButton = function (filterSearch) {
            tacoService.getZoomatoLocationId(filterSearch.city)
                .then(function (response) {
                    $scope.zoomatoDisplay = response;
                })
        };
    }]);