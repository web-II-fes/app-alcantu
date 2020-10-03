import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  private cursoUrl = 'http://localhost:3002/api/modules/cursos/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  constructor( private httpClient: HttpClient ) {}

  getCursos(){
    return this.httpClient.get(this.cursoUrl + 'cursos');
  }

  getCursoById( idCurso: String ){
    return this.httpClient.get(this.cursoUrl + 'cursoId/' + idCurso)
  }

  guardarCurso( curso: any ){
    return this.httpClient.post(this.cursoUrl + 'curso', JSON.stringify(curso), this.httpOptions);
  }

  editarCurso( idCurso, curso ){
    return this.httpClient.put(this.cursoUrl + 'curso/' + idCurso, JSON.stringify(curso),this.httpOptions);
  }

  borrarCurso( idCurso ){
    return this.httpClient.delete(this.cursoUrl + 'curso/' + idCurso, this.httpOptions);
  }

}
