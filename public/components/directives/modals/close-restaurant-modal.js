var app = angular.module("Main");

app.controller("CloseRecipeModal", ['$scope', '$uibModalInstance', function ($scope, $uibModalInstance) {

    $scope.cancel = function() {
        $uibModalInstance.dismiss();

    };
}]);
