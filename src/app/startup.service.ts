import { Injectable } from '@angular/core';
import Startup from './startup-component/startup';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  getStartups(){
    return this.http.get<Startup[]>(`api/startups`)
  }

  add(s) {
    this.startup  = new Startup(Math.random()*1000, s.name, s.activity, s.official, s.nbCofounder, s.description, s.adress,s.consultant)
    this.http.post<Startup[]>(`/api/startups`, this.startup)
  }

  get(s) {
    return this.startups[s]
  }

  delete(s) {
    this.http.delete(s)
  }

}

