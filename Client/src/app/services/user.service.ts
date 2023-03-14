import { environment } from "src/environments/environment";
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import {User} from "src/Models/User";
import { HttpHeaders } from "@angular/common/http";
// import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  currentUser = new BehaviorSubject<User>(null);
  constructor(private http: HttpClient) { }
  saveInStorage(key,user) {
    localStorage.setItem(key, JSON.stringify(user));
  }
  getFromStorage(key) {
    let u = localStorage.getItem(key);
    if (!u)
      return null;
    return JSON.parse(u);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Context-Type': 'application/json',
      authorization: 'my-auth-token'
    })
  }

  url = environment.baseUrl + "User/post";
  saveUser(request: User[]): Observable<any> {
    const headers = { 'content-type': 'application/json' }
    const body = JSON.stringify(request);
  //  console.log(this.url+body);
    return this.http.post<User[]>(this.url, body, { 'headers': headers })
  }

}