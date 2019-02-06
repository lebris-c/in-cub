import { Injectable } from '@angular/core';
import Startup from './startup-component/startup';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError, } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class StartupService {
  http:HttpClient
  startups: Startup[]
  myObservable: Observable<Startup[]>
  startup: Startup
  constructor(http: HttpClient) { 
    this.http = http
  }

  getStartups() {
    return this.http.get<Startup[]>(`api/startups`)
  }

  getStartup(id) {
    return this.http.get<Startup>(`/api/startups/`+ id)
  }

  add(s) {
    this.startup  = new Startup(Math.random()*1000, s.name, s.activity, s.official, s.nbCofounder, s.description, s.address,s.consultant)
    this.http.post<Startup[]>(`/api/startups`, this.startup).subscribe(res => console.log("test"));
  }

  get(s) {
    return this.startups[s]
  }

  delete(id) {
    this.http
      .delete<Startup>(`api/startups/` + id)

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
      .subscribe(res => console.log("test"));
  }
}
