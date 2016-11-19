/**
 * Created by userr on 19/11/2016.
 */

angular.module('app.features.products', ['products.product-item','products.service'])
    .controller("productsCtrl",['$scope','ProductsService',productsCtrl])

function productsCtrl($scope,ProductsService){
     ProductsService.getProducts().then((products)=> {
         $scope.products = products
     })
}
