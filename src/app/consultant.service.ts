import { Injectable } from "@angular/core";
import Consultant from "./consultant-component/consultant";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class ConsultantService {
  http: HttpClient;
  consultants: Consultant[];
  myObservable: Observable<Consultant[]>;
  consultant: Consultant;
  constructor(http: HttpClient) {
    this.http = http;
  }

  getConsultants() {
    return this.http.get<Consultant[]>(`api/consultants`);
  }

  getConsultant(id): Observable<Consultant> {
    return this.http.get<Consultant>(`api/consultants/` + id);
  }

  add(data) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http
      .post(`api/consultants`, data, cudOptions)
      .pipe(
        catchError(err => {
          console.error(err);
          return null;
        })
      )
      .subscribe({
        next(position) {
          return "Ok";
        }
      });
  }

  delete(s) {
    this.http.delete(s);
  }
  edit(consultant: Consultant) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http
      .put<Consultant>(`api/consultants`, consultant, cudOptions)
      .pipe(
        catchError(err => {
          console.error(err);
          return null;
        })
      )
      .subscribe({
        next(position) {}
      });
  }
}