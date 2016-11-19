/**
 * Created by userr on 19/11/2016.
 */

angular.module('products.product-item',[])
    .directive('productItem',()=>{
        return {
            restrict:'E',
            scope:{
                product:'='
            },
            templateUrl: 'products/product-item.html'
        }
    })