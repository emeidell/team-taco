angular.module("Main")
.service('tacoService', ['$http', function ($http) {
    var self = this;
    this.tacoGetRequest = [];

    this.getRequest = function (query) {
        if(query) {
            var queryString = "?";
            for (var key in query) {
                if (queryString.length > 1) queryString += "&";
                queryString += key + "=" + query[key];
            }
            console.log(queryString);
        } else {
            queryString = "";
        }
        return $http.get('/zoomato' + queryString).then(function (response) {
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
                alert("HI, tooo bad!")
            })
            .then(function (response) {
               return self.getRequest(response)
            },
            function (response) {
                alert("double Error");
            })
    }

}]);