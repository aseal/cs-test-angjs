(function () {
'use strict';

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);


ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getBuyItems();
  showList.buy = function (itemIndex) {
    ShoppingListCheckOffService.buy(itemIndex);
  }
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var buyList = [
    {name: "Milk", quantity: "1"},
    {name: "Cookies", quantity: "10"},
    {name: "Bread", quantity: "2"},
    {name: "Cereal", quantity: "3"},
    {name: "Apple juice", quantity: "4"},
  ];
  var boughtList = [];

  service.buy = function (itemIndex) {
    var item = {
      name: buyList[itemIndex].name,
      quantity: buyList[itemIndex].quantity
    };
    buyList.splice(itemIndex, 1);
    boughtList.push(item);
  };

  service.getBuyItems = function () {
    return buyList;
  }

  service.getBoughtItems = function () {
    return boughtList;
  }
}

}) ();
