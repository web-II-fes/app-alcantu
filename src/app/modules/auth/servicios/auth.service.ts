import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authUrl = 'http://localhost:3002/api/modules/auth/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor(private http: HttpClient) { }

  login(credenciales): Observable<any>  {
    return this.http.post(
      this.authUrl + 'login',
      { username: credenciales.username, password: credenciales.password },
      this.httpOptions
    );
  }

  registro(credenciales): Observable<any>  {
    return this.http.post(
      this.authUrl + 'registro',
      { username: credenciales.username, email: credenciales.email , password: credenciales.password },
      this.httpOptions
    );
  }
}
