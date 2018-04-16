/// <reference path="../interface/IConfigSetting.ts" />
module Application.Services {
    export const WebApiUrl = "http://localhost:9090/api/";
    export class ConfigService implements Application.Interface.IConfigSettings  {

        constructor(private $http: any){
        }
        ajaxCall = function(webApiURL:string, httpMethod:string, data:any) {
          return this.$http({
            method: httpMethod,
            url: webApiURL,
            data: data
          });
        }
        getApiUrl = function(apiURI:string) {
          return WebApiUrl+apiURI;
        }
    }

    angular.module("myApp").service("configService", ConfigService);
}
