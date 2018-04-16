var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider:any) {
$routeProvider
.when("/", {
    templateUrl : "../app/dashboard/template/index.html",
    controller : "dashboardController"
})
.when("/invoice", {
    templateUrl : "../app/invoice/template/index.html"
    //controller : "../app/invoice/script/controller/invoice-controller.js"
})
.when("/product", {
    templateUrl : "../app/product/template/index.html"
    //controller : "../app/product/script/controller/product-controller.js"
})
.when("/client", {
    templateUrl : "../app/client/template/index.html"
    //controller : "../app/client/script/controller/client-controller.js"
})
.when("/category", {
  templateUrl : "../app/category/template/index.html",
  //controller : "../app/category/script/controller/category-controller.js"
})
.when("/company", {
  templateUrl : "../app/company/template/index.html"
  //controller : "../app/company/script/controller/company-controller.js"
})
});
