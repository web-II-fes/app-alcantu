import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

const apiUrl = 'http://localhost:3002/api/modules/prueba/';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

	getPublicContent(): Observable<any> {
		return this.http.get(apiUrl + 'all', { responseType: 'text' });
	}

	getUserBoard(): Observable<any> {
		return this.http.get(apiUrl + 'usuario', { responseType: 'text' });
	}

	getModeratorBoard(): Observable<any> {
		return this.http.get(apiUrl + 'moderador', { responseType: 'text' });
	}

	getAdminBoard(): Observable<any> {
		return this.http.get(apiUrl + 'administrador', { responseType: 'text' });
  }
  
}
