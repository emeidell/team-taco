angular.module("Main")
.service('tacoService', ['$http', function ($http) {
    var self = this;
    this.tacoGetRequest = [];

    this.getRequest = function (query) {
        if(query) {
            var querryString = "?";
            for (var key in query) {
                querryString += key + query[key] + "&"
            }
            querryString = querryString.split("");
            querryString.pop();
            querryString.join();
        } else {
            query = "";
        }

        return $http.get('/zoomato' + query).then(function (response) {
            self.zoomatoResponse = response.data;
            return self.zoomatoResponse;
        })
    }

    this.getZoomatoLocationId = function (city) {
        return $http.get('/zoomato/city?city=' + city)
            .then(function (response) {
                var query = {
                    'entity_id': response.data['location_suggestions'][0].entity_id,
                    'entity_type': response.data['location_suggestions'][0].entity_type
                }
                return query;
            },
            function (response) {
                console.log(response);
                alert("HI, tooo bad!")
            })
            .then(function (response) {
               return self.getRequest(query)
            },
            function (response) {
                console.log(response);
                alert("double Error");
            })
    }

}]);