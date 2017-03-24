angular.module("Main")
.directive("restaurantModal", function () {
    return {
        restrict: "E",
        templateUrl: "components/directives/modals/restaurant-modal.html"
    }
});
