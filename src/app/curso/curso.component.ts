import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CursoService } from './../servicios/curso.service';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  itemForm: FormGroup;

  cursos: any[] = [];
  idCurso: any;

  constructor(private fb: FormBuilder, private cursoService: CursoService) { }

  ngOnInit(): void {
    this.initForm();
    this.getCurso();
  }

  initForm(){
    this.itemForm = this.fb.group({
      nombre: [ '' ],
      profesor: [ '' ],
      anio: [],
      estado: [ '' ]
    });
  }

  getCurso(){
    this.cursoService.getCursos().subscribe( (cursos: any) => {
      this.cursos = cursos;
    })
  }

  editarCurso(curso: any) {
    this.idCurso = curso._id;
    this.itemForm.patchValue({
      nombre: curso.nombre,
      profesor: curso.profesor,
      anio: curso.anio,
      estado: curso.estado    
    });
  }

  borrarCurso(curso: any){
    this.idCurso = curso._id;
    this.cursoService.borrarCurso(this.idCurso).subscribe(result => console.log( "Curso Borrado: ", curso ));
  }

  submit() {
    if (this.idCurso){
      this.cursoService.editarCurso(this.idCurso, this.itemForm.value).subscribe(curso => {
        console.log("Curso Editado: ", curso);
      });
    } else {
      this.cursoService.guardarCurso(this.itemForm.value).subscribe((curso) => {
        console.log("Curso Nuevo: ", curso);
      });
    }
  }


}
