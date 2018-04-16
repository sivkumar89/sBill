declare module Application.Interface {
    interface IConfigSettings {
        getApiUrl(URL:string):string;
        ajaxCall(URL:string,method:string,data:any):any;
    }
}
