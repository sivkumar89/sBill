module Application.Controllers {
    /**
    * Controller for all shared dashboards. Expects the "dashboardId" param to defined on the routing
    */
    export class DashboardController {
        /**
         @property Dashboard tiles
         */
        title: string;
        /**
         * @property The dashboard id, from the routing params.
         */
        dashboardId: number;

        constructor() {
            this.dashboardId = 1;
            this.title = "Dashboard";

        }
    }

    angular.module("myApp").controller("dashboardController", DashboardController);
}
