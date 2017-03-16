angular.module("Main")
.service('tacoService', ['$http', function ($http) {
    var self = this;
    this.tacoGetRequest = [];

    this.getRequest = function () {

        return $http.get('/zoomato').then(function (response) {
            self.zoomatoResponse = response.data;
            console.log(response.data);
            return self.zoomatoResponse;
        })
    }
}]);