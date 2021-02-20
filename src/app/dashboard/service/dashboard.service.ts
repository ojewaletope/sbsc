import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http
      .get(`https://5f1804b87c06c900160dc844.mockapi.io/sbsc/v1/dashboard`)
      .pipe(
        tap(data => {
          return data;
        })
      );
  }
}
