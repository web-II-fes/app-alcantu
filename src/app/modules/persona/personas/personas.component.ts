import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PersonaService } from '../servicios/persona.service';

@Component({
  selector: 'app-personas',
  templateUrl: './personas.component.html',
  styleUrls: ['./personas.component.css']
})
export class PersonasComponent implements OnInit {

  displayedColumns: string[] = [ 'nombre', 'apellido', 'edad', 'editar', 'borrar' ];
  dataSource: any[] = [];
  idPersona: any;

  constructor( private personaService: PersonaService, private router: Router) { }

  ngOnInit(): void {
    this.getPersonas();
  }

  getPersonas(){
    this.personaService.getPersonas().subscribe(( data:any ) => { 
      this.dataSource = data;
    });
  }

  editarPersona(idPersona){
    this.router.navigate(["../persona/crearPersona/" + idPersona]);
  }

  borrarPersona(idPersona){
    this.idPersona = idPersona;
    this.personaService.borrarPersona(this.idPersona).subscribe((data: any) => {
      let personaBorrada = idPersona;
    });
    location.reload();
  }

}
