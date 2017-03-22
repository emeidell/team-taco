angular.module("Main")
    .filter("restaurant", function() {
        return function(input, restaurant) {
            var filtered = input.filter(function(item) {
                return item.restaurant === restaurant;
            });
            return filtered;
        }
    })
