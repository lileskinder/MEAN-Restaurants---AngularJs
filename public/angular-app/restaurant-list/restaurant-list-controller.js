angular.module("meanRestaurants").controller("RestaurantsController", RestaurantsController);

function RestaurantsController(RestaurantsDataFactory) {
    const vm = this;

    RestaurantsDataFactory.getAll().then(function(response) {
        vm.restaurants = response;
    });
}