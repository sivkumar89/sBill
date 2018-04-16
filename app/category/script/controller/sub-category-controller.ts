/// <reference path="../interface/ICategory.ts" />
module Application.Controllers {
    /**
    * Controller for all shared dashboards. Expects the "dashboardId" param to defined on the routing
    */
   import ICategoryList = Category.Interface.ICategoryList;
    export class SubCategoryController  {
        /**
         @property Dashboard tiles
         */
        constructor($scope:ICategoryList) {

        }
    }

    angular.module("myApp").controller("subCategoryController", SubCategoryController);
}
