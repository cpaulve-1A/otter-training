import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExerciseOneComponent } from './exercise-one.component';
import {StepPresModule} from "../../components/step";
import {ResultPresModule} from "../../components/result";
import { ExerciseOneComponentPresModule } from '../../components/exercises/exercise-one-component';



@NgModule({
  declarations: [
    ExerciseOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ExerciseOneComponent}]),
    StepPresModule,
    ResultPresModule,
    ExerciseOneComponentPresModule
  ],
  exports: [
    ExerciseOneComponent
  ]
})
export class ExerciseOneModule { }
