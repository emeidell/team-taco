angular.module("Main")

.controller("vacationController", ["$scope", "VacationService", "$localStorage", function ($scope, VacationService, $localStorage) {

    $scope.user = $localStorage.user;
    $scope.vacations = [];

    $scope.getVacations = function ($scope.user) {
        VacationService.getVacations($scope.user)
            .then(function (response) {
                $scope.vacations = response;
                console.log($scope.vacations);
            })
    }

}]);
