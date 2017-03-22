angular.module("Main")

.service("VacationService", ["$http", function ($http) {

    var self = this;

    this.getVacations = function (user) {
        return $http.get("/secure/vacations?user=" + user._id)
            .then(function (response) {
                return response.data;
            },
            function (response) {
                if (response.status === 404) {
                    var newVacation = {
                        name: "My Vacation",
                        user: user
                    };
                    console.log(newVacation)
                    return self.createVacation(newVacation)
                }
                console.log(response);
                alert("error");
            })
    };

    this.createVacation = function (vacation) {
        return $http.post("/secure/vacations", vacation)
            .then(function (resoponse) {
                return resoponse.data
            },
            function (response) {
                console.log(response);
                alert("error")
            })
    };

    this.updateVacation = function (vacation) {
        return $http.post("/secure/vacation", vacation)
            .then(function (response) {
                return response.data
            },
            function (response) {
                console.log(response);
                alert("uh oh :(");
            })
    }

    this.saveRestaurant = function (restaurant) {
        return $http.post("/secure/restaurant", restaurant)
            .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log(response);
                alert("Oh boy..");
            })
    }

    // this.removeRestaurant = function (vacation) {
    //     return self.updateVacation(vacation)
    //         .then(function (response) {
    //             return response.data;
    //         },
    //         function (response) {
    //             console.log(response);
    //             alert("AAAhhhhhh!");
    //         })
    // }



}]);