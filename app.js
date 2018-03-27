var app = angular.module('myApp', ['ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider
        .when("/", {
        templateUrl: "../app/dashboard/template/index.html",
        controller: "../app/dashboard/script/dashboard-controller.js"
    })
        .when("/login", {
        templateUrl: "../app/invoice/template/index.html",
    })
        .when("/green", {
        templateUrl: "green.htm"
    })
        .when("/blue", {
        templateUrl: "blue.htm"
    });
});
