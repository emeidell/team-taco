angular.module("Main")
.service('tacoService', ['$http', function ($http) {
    var self = this;
    this.tacoGetRequest = [];

    this.getRequest = function (query) {
        if(query) {
            var queryString = "?";
            for (var key in query) {
                queryString += key + query[key] + "&"
            }
            queryString = queryString.split("");
            queryString.pop();
            queryString.join("");
        } else {
            queryString = "";
        }
        console.log(queryString);
        return $http.get('/zoomato' + queryString).then(function (response) {
            self.zoomatoResponse = response.data;
            return self.zoomatoResponse;
        })
    }

    this.getZoomatoLocationId = function (city) {
        return $http.get('/zoomato/city?city=' + city)
            .then(function (response) {
                console.log(response);
                var query = {
                    'entity_id': response.data['location_suggestions'][0].entity_id,
                    'entity_type': response.data['location_suggestions'][0].entity_type
                }
                console.log(query);
                return query;
            },
            function (response) {
                console.log(response);
                alert("HI, tooo bad!")
            })
            .then(function (response) {
               return self.getRequest(response)
            },
            function (response) {
                // console.log(response);
                alert("double Error");
            })
    }

}]);