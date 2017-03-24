var app = angular.module("Main");

app.controller("CloseRestaurantModal", ['$scope', '$uibModalInstance', 'options', function ($scope, $uibModalInstance, options) {

    $scope.modalDays = options.modalDays;
    $scope.modalMeals = options.modalMeals;
    console.log($scope.modalDays);
    $scope.restaurant = options.restaurant;
    $scope.vacation = options.vacation;

    $scope.addRestaurant = function (newRestaurant, day, meal) {
        console.log($scope.newDayOfWeek);
        console.log("New Restaurant:", newRestaurant);
        console.log("Day:", day);
        console.log("Meal: ", meal);
        var restaurantToAdd = {
            dayOfWeek: day,
            meal: meal,
            restaurant: newRestaurant
        };

        $uibModalInstance.close(restaurantToAdd);
    };

    $scope.cancel = function() {
        $uibModalInstance.dismiss();
    };
}]);
