angular.module("Main")

.service("VacationService", ["$http", function ($http) {

    this.getVacations = function (user) {
        return $http.get("/secure/vacations?user=" + "user._id")
            .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log(response);
                alert("error");
            })
    }

}]