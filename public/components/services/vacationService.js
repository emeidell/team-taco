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
                    console.log(newVacation);
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
        return $http.put("/secure/vacations/" + vacation._id, vacation)
            .then(function (response) {
                return response.data
            },
            function (response) {
                console.log(response);
                alert("uh oh :(");
            })
    };

    this.saveRestaurant = function (restaurant) {
        return $http.post("/secure/restaurant", restaurant)
            .then(function (response) {
                return response.data;
            },
            function (response) {
                console.log(response);
                alert("Oh boy..");
            })
    };

    this.getRestaurant = function (id, i) {
        return $http.get("/secure/restaurant/" + id)
            .then(function (response) {
                console.log(response, "service");
                response.data.index = i
                return response.data;
            })
    }

    // this.addToVacation = function (vacation, restaurant) {
    //     if (restaurant) {
    //         return self.saveRestaurant(restaurant)
    //             .then(function (response) {
    //                 vacation.vacationDetails.mealSchedule.push(response)
    //             })
    //     }
    // }

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