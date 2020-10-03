import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CursoService } from './../servicios/curso.service';


@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrls: ['./curso.component.css']
})
export class CursoComponent implements OnInit {

  itemForm: FormGroup;
  idCurso: String;

  constructor(private fb: FormBuilder, private cursoService: CursoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe((param) => {
      this.idCurso = param.get('id');

      if (this.idCurso !== 'new'){
        this.getCursoById(this.idCurso);
      }
    });
  }

  getCursoById(idCurso: String){
    this.cursoService.getCursoById(idCurso).subscribe((data) =>{
      let cursoId = data;

      this.itemForm.patchValue(cursoId);
    });
  }

  initForm(){
    this.itemForm = this.fb.group({
      nombreCurso: [ '' ],
      profesor: [ '' ],
      anio: [],
      estado: [ '' ]
    });
  }

  submit() {
    if (this.idCurso !== 'new'){
      this.cursoService.editarCurso(this.idCurso, this.itemForm.value).subscribe((curso) => {
      });
    } else {
      this.cursoService.guardarCurso(this.itemForm.value).subscribe((curso) => {
        let cursoNuevo = curso;
      });
    }
    this.router.navigate(['/cursos']);
  }
}
