angular.module("Main")

    .filter("dayFilter", [function () {
        return function (array, dayOfWeek) {
            return array.filter(function (item, index) {
                item.index = item.index || index;
                return item.dayOfWeek === dayOfWeek;
            })
        }
    }]);