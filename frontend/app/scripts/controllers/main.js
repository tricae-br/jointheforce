'use strict';

/**
 * @ngdoc function
 * @name things4cutiesApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the things4cutiesApp
 */

var app = angular.module('things4cutiesApp');
app.controller('MainCtrl', ['$http', function($http){
    this.quantity = 1;
    
    var store = this;
    store.catalog = [];

    $http.get('api/products.json').success(function(data){
        console.log(data.products);
       store.catalog = data.products;
    });
}]);

app.controller('PanelController',function(){
    this.tab = 1;
    
    this.selectTab = function(setTab) {
      this.tab = setTab;  
    };
    
    this.isSelected = function(checkTab){
      return this.tab === checkTab;  
    };
});

app.controller('ReviewController', function(){
   this.review = {}; 
    
    this.addReview = function(product) {
        product.reviews.push(this.review);
        this.review = {};
    };
});