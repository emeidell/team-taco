angular.module("Main")

.controller("vacationController", ["$scope", "VacationService", "userSigninService", function ($scope, VacationService, userSigninService) {

    $scope.user = userSigninService.getUser();

    $scope.vacation = {};
    $scope.meals = [];
    $scope.days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    $scope.getVacations = function () {
        VacationService.getVacations($scope.user)
            .then(function (response) {
                $scope.vacation = response;
                $scope.meals = response.vacationDetails.mealSchedule;
                console.log($scope.vacation);
            })
    };

    $scope.removeRestaurant = function (index) {
        console.log(index, $scope.meals[index]);

        //testing for now will uncomment next two lines after I make sure I am getting the right stuff passing through

        //$scope.vacation.vacationDetails.mealSchedule.splice(index, 1);
        //VacationService.updateVacation($scope.vacation);
    }

}]);
