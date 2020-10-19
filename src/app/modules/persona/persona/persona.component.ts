import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { PersonaService } from './../servicios/persona.service';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {
  itemForm: FormGroup;

  personas: any[] = [];
  idPersona: any;

  constructor(private fb: FormBuilder, private personaService: PersonaService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
    this.route.paramMap.subscribe((param) => {
      this.idPersona = param.get('id');

      if (this.idPersona !== 'new'){
        this.getPersonaById(this.idPersona);
      }
    });
  }

  getPersonaById(idPersona: String){
    this.personaService.getPersonaById(idPersona).subscribe((data) =>{
      let personaId = data;

      this.itemForm.patchValue(personaId);
    });
  }

  initForm(){
    this.itemForm = this.fb.group({
      nombre: [ '' ],
      apellido: [ '' ],
      edad: [] 
    });
  }

  submit() {
    if (this.idPersona !== 'new'){
      this.personaService.editarPersona(this.idPersona, this.itemForm.value).subscribe((persona) => {
      });
    } else {
      this.personaService.guardarPersona(this.itemForm.value).subscribe((persona) => {
        let personaNueva = persona;
      });
    }
    this.router.navigate(['../persona/personas']);
  }

}
