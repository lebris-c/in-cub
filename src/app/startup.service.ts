import { Injectable } from "@angular/core";
import Startup from "./startup-component/startup";
import { HttpClient, HttpErrorResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";
@Injectable({
  providedIn: "root"
})
export class StartupService {
  http: HttpClient;
  startups: Startup[];
  myObservable: Observable<Startup[]>;
  startup: Startup;
  url: string;
  constructor(http: HttpClient) {
    this.url = "http://localhost:3000/startup";
    this.http = http;
  }

  getStartups() {
    return this.http.get<Startup[]>(this.url);
  }

  getStartup(id) {
    return this.http.get<Startup>(this.url + "/" + id);
  }

  add(data) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http.post<Startup>(this.url, data, cudOptions);
  }

  delete(id) {
    console.log(id);
    return this.http.delete(this.url + "/" + id);
  }
  edit(startup: Startup) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http.put<Startup>(this.url, startup, cudOptions);
  }
}
