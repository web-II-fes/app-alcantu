import { Component, OnInit } from '@angular/core';
import { CursoService } from '../servicios/curso.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  displayedColumns: string[] = [ 'curso', 'profesor', 'anio', 'estado', 'editar', 'borrar' ];
  dataSource: any[] = [];
  idCurso: any;

  constructor( private cursoService: CursoService, private router: Router ) { }

  ngOnInit(): void {
    this.getCursos();
  }

  getCursos(){
    this.cursoService.getCursos().subscribe(( data:any ) => { 
      this.dataSource = data;
    });
  }

  editarCurso(idCurso){
    this.router.navigate(["../curso/crearCurso/" + idCurso]);
  }

  borrarCurso(idCurso){
    this.idCurso = idCurso;
    this.cursoService.borrarCurso(this.idCurso).subscribe((data: any) => {
      let cursoBorrado = idCurso;
    });
    location.reload();
  }

}
