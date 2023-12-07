import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exercise-one'
  },
  {
    title: 'First Exercise',
    loadChildren: () => import('./exercise-one/index').then(m => m.ExerciseOneModule),
    path: 'exercise-one'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'exercise-one'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
