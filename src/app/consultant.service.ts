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
  url: string;
  constructor(http: HttpClient) {
    this.url = "http://localhost:3000/consultant";
    this.http = http;
  }

  getConsultants() {
    return this.http.get<Consultant[]>(this.url);
  }

  getConsultant(id): Observable<Consultant> {
    return this.http.get<Consultant>(this.url + "/" + id);
  }

  add(data) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http.post(this.url, data, cudOptions);
  }
  edit(consultant: Consultant) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http.put<Consultant>(this.url, consultant, cudOptions);
  }
  delete(s) {
    this.http.delete(s);
  }
}
