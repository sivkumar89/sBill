/// <reference path="../interface/IDeductionTemplateItem.ts" />
var Application;
(function (Application) {
    var Controllers;
    (function (Controllers) {
        var DashboardController = /** @class */ (function () {
            function DashboardController($scope) {
                $scope.amount = 1;
                $scope.startDate = "Dashboard";
                $scope.endDate = "Product";
            }
            return DashboardController;
        }());
        Controllers.DashboardController = DashboardController;
        angular.module("myApp").controller("dashboardController", DashboardController);
    })(Controllers = Application.Controllers || (Application.Controllers = {}));
})(Application || (Application = {}));
