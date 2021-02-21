import { Injectable } from "@angular/core";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {catchError, map, tap} from "rxjs/operators";
import {UserInterface} from "../../models/dataModels";

@Injectable({
  providedIn: "root"
})
export class DashboardService {
  constructor(private http: HttpClient) {}
  private handleError(error: HttpErrorResponse) {
    return throwError(error);
  }
  getData(): Observable<UserInterface[]> {
   return this.http.get<UserInterface[]>('/assets/users.json').pipe(tap(), map(data => {
     return data;
   }), catchError(this.handleError))
  }
}
