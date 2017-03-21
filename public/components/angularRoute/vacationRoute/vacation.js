angular.module("Main")

.controller("vacationController", ["$scope", "VacationService", "userSigninService", function ($scope, VacationService, userSigninService) {

    $scope.user = userSigninService.getUser();

    $scope.vacation = {};

    $scope.getVacations = function () {
        VacationService.getVacations($scope.user)
            .then(function (response) {
                $scope.vacation = response;
                console.log($scope.vacation);
            })
    };

    $scope.removeRestaurant = function (index) {
        $scope.vacation.vacationDetails.mealSchedule.splice(index, 1);
        VacationService.updateVacation($scope.vacation);
    }

}]);
