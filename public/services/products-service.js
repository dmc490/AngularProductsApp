/**
 * Created by userr on 19/11/2016.
 */

angular.module('products.service',[])
    .factory('ProductsService',['$resource',ProductsService])
function ProductsService($resource){
    let ProductsResource = $resource('/products/:productId')
    let getProducts = ()=>{
        return ProductsResource.query().$promise
    }
    let getProductById = (id)=>{
        return ProductsResource.get({productId:id}).$promise
    }
    return {
        getProducts:getProducts,
        getProductById:getProductById
    }
}