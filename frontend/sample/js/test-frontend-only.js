;(function(){
	
    var myApp = angular.module("produto", []);
	
    myApp.controller("ProdutoController", ["$scope","$http", function($scope, $http){
        $scope.title = "Detalhes do produto";
		
        $http.get("http://edsonemiliano.com.br/tricae-teste/products.json").success(function(data){
			
            $scope.listaProdutos = data.products;
			
		});
		
		$scope.formatDate = function(date) {
			return date.replace(/-/g, "/");
		}
		
		$scope.calc = function() {
			var total = 0;
			
			$(".price.ng-binding").each(function() {
				total += parseFloat($(this).text().replace("$",""));
			});
			
			total += parseFloat($("#frete").val().replace("$",""));
			
			$(".right.last.lastrow").text("$" + parseFloat(total).toFixed(2));	
		}
		
	}]);
	
	window.calcFrete = function() {
		jQuery("#frete").val( "$" + ["12.00","34.56","5.00","17.50"][parseInt(Math.random() * 3)]).trigger("change");
	}
	
})();	