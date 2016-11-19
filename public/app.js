'use strict';

var app = angular.module('app', ['app.features.products','ngResource'])

app.config(['$resourceProvider', function($resourceProvider) {
    // Don't strip trailing slashes from calculated URLs
    $resourceProvider.defaults.stripTrailingSlashes = false;
}]);