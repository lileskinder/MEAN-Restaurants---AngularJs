angular.module("meanRestaurants").controller("RestaurantController", RestaurantController);


function RestaurantController(RestaurantsDataFactory, $routeParams) {

    const vm = this;
    const restaurantId = $routeParams.id;

    function _getStarsArray(rating) {
        return new Array(rating).fill(1);
    }

    RestaurantsDataFactory.getOne(restaurantId).then(function(response) {
        vm.restaurant = response;
        // vm.starsArray = _getStarsArray(vm.restaurant.rate);

    })

}