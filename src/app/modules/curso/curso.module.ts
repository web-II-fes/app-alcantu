import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { CursoRoutingModule } from './curso-routing.module';

import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';

import { CursoService } from './servicios/curso.service';
import { CursosComponent } from './cursos/cursos.component';
import { CursoComponent } from './curso/curso.component';

@NgModule({
    declarations: [
        CursoComponent,
        CursosComponent
    ],
    imports: [
        CommonModule,
        HttpClientModule,
        ReactiveFormsModule,
        CursoRoutingModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        MatCardModule,
        MatTableModule
    ],
    providers: [ CursoService ]
  })
  export class CursoModule { }