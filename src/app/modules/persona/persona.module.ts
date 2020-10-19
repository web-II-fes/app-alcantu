import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { PersonaRoutingModule } from './persona-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { PersonaService } from './servicios/persona.service';
import { PersonaComponent } from './persona/persona.component';
import { PersonasComponent } from './personas/personas.component';

@NgModule({
    declarations: [
        PersonaComponent,
        PersonasComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        PersonaRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule
    ],
    providers: [ PersonaService ]
  })
  export class PersonaModule { }