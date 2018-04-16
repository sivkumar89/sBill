/// <reference path="../interface/ICategory.ts" />
module Application.Controllers {
    /**
    * Controller for all shared dashboards. Expects the "dashboardId" param to defined on the routing
    */
   import ICategory = Category.Interface.ICategory;
    export class CategoryController  {
        /**
         @property Dashboard tiles
         */
        constructor($scope:ICategory) {

        }
    }

    angular.module("myApp").controller("categoryController", CategoryController);
}
