/// <reference path="../interface/IDeductionTemplateItem.ts" />
module Application.Controllers {
    /**
    * Controller for all shared dashboards. Expects the "dashboardId" param to defined on the routing
    */
   import IDeductionTemplateItem = Dashboard.Interface.IDeductionTemplateItem;
    export class DashboardController  {
        /**
         @property Dashboard tiles
         */       
        constructor($scope:IDeductionTemplateItem) {
            $scope.amount = 1;
            $scope.startDate = "Dashboard";
            $scope.endDate = "Product";
        }
    }

    angular.module("myApp").controller("dashboardController", DashboardController);
}
