import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';

const routes: Routes = [
    {
        path: '',
        children: [
            {
            path:'',
            redirectTo: 'personas',
            pathMatch: 'full'
        },
        {
            path: 'crearPersona',
            component: PersonaComponent
        },
        {
            path: 'crearPersona/:id',
            component: PersonaComponent
        },
        {
            path: 'personas',
            component: PersonasComponent
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PersonaRoutingModule { }
  