angular.module("Main")

.filter("mealFilter", [function () {
    return function (array, meal) {
        return array.filter(item => item.meal === meal);
    }
}]);