angular.module("Main")

    .filter("mealFilter", [function () {
        return function (array, dayOfWeek) {
            return array.filter(function (item, index) {
                item.index = item.index || index;
                return item.dayOfWeek === dayOfWeek;
            })
        }
    }]);