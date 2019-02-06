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
    return this.http.get<Startup>(`/api/startups/` + id);
  }

  add(s) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http.post(`api/startups`, s, cudOptions);
  }

  get(s) {
    return this.startups[s];
  }

  delete(id) {
    this.http.delete<Startup>(`api/startups/` + id);
  }

  edit(startup: Startup) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http
      .put<Startup>(`api/startups`, startup, cudOptions)
      .pipe(
        catchError(err => {
          console.error(err);
          return null;
        })
      )
  }
}
