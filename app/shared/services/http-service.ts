/// <reference path="../interface/IHttpService.ts" />
/// <reference path="config-service.ts" />
module Application.Services {
    enum HttpRequest {
      POST = "post",
      GET = "get",
      PUT = "put",
      DELETE = "delete"
    }
    import IHttpService = Application.Interface.IHttpService;
    export class HttpService implements IHttpService {

        static $inject: string[] = [
            "configService"
        ];

        constructor(private configService: Application.Services.ConfigService){
        }
        post = function(apiURL:string, data:any) {
          return this.configService.ajaxCall(this.configService.getApiUrl(apiURL),HttpRequest.POST,data);
        }

        get = function(apiURL:string, data?:any) {
          return this.configService.ajaxCall(this.configService.getApiUrl(apiURL),HttpRequest.GET,data);
        }

        put = function(apiURL:string, data:any) {
          return this.configService.ajaxCall(this.configService.getApiUrl(apiURL),HttpRequest.PUT,data);
        }

        delete = function(apiURL:string, data:any) {
          return this.configService.ajaxCall(this.configService.getApiUrl(apiURL),HttpRequest.DELETE,data);
        }
    }

    angular.module("myApp").service("HttpService", HttpService);
}
