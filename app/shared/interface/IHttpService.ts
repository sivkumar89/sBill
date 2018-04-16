declare module Application.Interface {
    interface IHttpService {
        post(apiURL:string, data:any):any;
        get(apiURL:string, data?:any):any;
        delete(apiURL:string, data:any):any;
        put(apiURL:string, data:any):any;
    }
}
