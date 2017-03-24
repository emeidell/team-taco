angular.module("Main")
.controller('homeController', ['$scope', '$uibModal', 'tacoService', "userSigninService", "VacationService", function ($scope, $uibModal, tacoService, userSigninService, VacationService) {
    $scope.user = userSigninService.getUserHome()
    if ($scope.user) {
        VacationService.getVacations($scope.user)
            .then(function (response) {
                $scope.vacation = response;
                console.log($scope.vacation);
            })
    }

    $scope.modalDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


        $scope.profileName = $scope.user.displayName.charAt(0).toUpperCase() + $scope.user.displayName.slice(1);
        $scope.zoomatoDisplay = [];

        $scope.getZoomato = function () {
            tacoService.getRequest()
                .then(function (response) {
                    $scope.zoomatoDisplay = response;
                    console.log(response);
                })
        };
        $scope.getZoomato();


    $scope.results = function (index) {
        $scope.restaurant = $scope.zoomatoDisplay.restaurants[index];
        console.log($scope.zoomatoDisplay.restaurants[index]);
        var modalInstance = $uibModal.open({
            animation: true,
            templateUrl: "modal.html",
            // scope: $scope,
            size: "lg",
            controller: "CloseRestaurantModal",
            resolve: {
                options: function() {
                    return {
                        modalDays: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
                        restaurant: $scope.restaurant,
                        modalMeals: ["Breakfast", "Lunch", "Dinner"],
                        vacation: $scope.vacation
                    }
                }
            }
        });

        modalInstance.result.then(function(data) {

            console.log(data);
        });
    }

        $scope.searchButton = function (filterSearch) {
            tacoService.getZoomatoLocationId(filterSearch.city)
                .then(function (response) {
                    $scope.zoomatoDisplay = response;
                })
        };
    }]);