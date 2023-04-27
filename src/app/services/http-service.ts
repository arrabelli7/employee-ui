import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export abstract class HttpService {
    server: any;
    tokenRefreshing: any;
    constructor(private http: HttpClient) {

    }

    send(url: string, method: string, data?: Object, headers?: HttpHeaders
    ): Observable<any> {
        return new Observable(observer => {
            this.sendRequest(url, method, headers, data)
                .subscribe(
                    {
                        next: (response) => {
                            observer.next(response); observer.complete()
                        },
                        error: (err) => { observer.error(err); this.handleError(err); observer.complete() },
                        complete: () => {  }
                    });   
        });
    }
    private sendRequest(url: string, method: string, headers?: HttpHeaders, data?: Object) {
        switch (method) {
            case "get":
                return this.http.get(url, { headers });
            case "put":
                return this.http.put(url, data, { headers });
            default:
                console.log("This method is not available");
                return this.http.get(url, { headers });

        }
    }

    private handleError(error: HttpErrorResponse) {
        console.log("handle network error here", error);
    }
}