(function () {
'use strict';

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

LunchCheckController.$inject = ['$scope'];
function LunchCheckController($scope) {
  $scope.dishes = "";
  $scope.checkDishesMsg = "";
  $scope.borderColor = "";
  $scope.fontColor = "";
  $scope.checkDishes = function() {
    var dish_array = $scope.dishes.split(',');

    for (var i = 0; i <dish_array.length; i++) {
      if (dish_array[i] == undefined || dish_array[i].length == 0) {
        dish_array.splice(i,1);
        i--;
      }
    }
    console.log(dish_array);

    if (dish_array.length == 0) {
      $scope.checkDishesMsg = "Please enter data first";
      $scope.borderColor = "red-border";
      $scope.fontColor = "red-font";
    } else if (dish_array.length <= 3) {
      $scope.checkDishesMsg = "Enjoy!";
      $scope.borderColor = "green-border";
      $scope.fontColor = "green-font";
    } else {
      $scope.checkDishesMsg = "Too much!";
      $scope.borderColor = "green-border";
      $scope.fontColor = "green-font";
    }
  }
}

})();
