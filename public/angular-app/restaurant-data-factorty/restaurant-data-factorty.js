angular.module("meanRestaurants").factory("RestaurantsDataFactory", RestaurantsDataFactory);

function RestaurantsDataFactory($http) {
    return {
        getAll: getAllRestaurants,
        getOne: getOneRestaurants,
    }

    function getAllRestaurants() {
        return $http.get("/api/restaurants")
            .then(complete)
            .catch(failed);
    }
    function getOneRestaurants(id) {
        return $http.get("/api/restaurants/" + id)
            .then(complete)
            .catch(failed)
    }

    function complete(response) {
        return response.data;
    }

    function failed(error) {
        return error.status.statusText;
    }
}