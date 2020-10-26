import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArraysComponent } from './arrays/arrays';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/auth/auth.module').then((m) => m.AuthModule)
  },
  {
    path: 'persona',
    loadChildren: () => import('./modules/persona/persona.module').then((m) => m.PersonaModule)
  },
  {
    path: 'curso',
    loadChildren: () => import('./modules/curso/curso.module').then((m) => m.CursoModule)
  },
  { path: 'arrays', component: ArraysComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
