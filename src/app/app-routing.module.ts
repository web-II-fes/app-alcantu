import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './curso/curso.component';
import { CursosComponent } from './cursos/cursos.component';

const routes: Routes = [
  { path: 'crearCurso', component: CursoComponent },
  { path: 'crearCurso/:id', component: CursoComponent },
  { path: 'cursos', component: CursosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
