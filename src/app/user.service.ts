import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import User from './user/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  http: HttpClient;
  users: User[];
  user: User;
  url: string;
  constructor(http: HttpClient) { 
    this.url = "http://localhost:3000/";
    this.http = http;
  }

  getUsers() {
    return this.http.get<User[]>(this.url);
  }

  getUser(id) {
    return this.http.get<User>(this.url + "/" + id)
  }

  connect(data) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http.post(this.url+"login", data, cudOptions)
  }

  add(data) {
    const cudOptions = { headers: new HttpHeaders({ "Content-Type": "application/json" }) };
    return this.http.post<User>(this.url+"register", data, cudOptions);
  }


}
