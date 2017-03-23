var app = angular.module("Main");

app.controller("CloseRestaurantModal", ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

    $scope.modalDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    $scope.modalMeals = [];

    $scope.cancel = function() {
        $uibModalInstance.dismiss();

    };
}]);
