var app = angular.module('myApp', ['ngRoute']);
app.config(function($routeProvider:any) {
$routeProvider
.when("/", {
  templateUrl : "../app/dashboard/template/index.html"
})
.when("/login", {
    templateUrl : "../app/invoice/template/index.html"
})
.when("/green", {
    templateUrl : "green.htm"
})
.when("/blue", {
    templateUrl : "blue.htm"
});
});
