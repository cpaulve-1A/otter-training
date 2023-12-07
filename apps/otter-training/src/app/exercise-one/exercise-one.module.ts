import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ExerciseOneComponent } from './exercise-one.component';
import {StepPresModule} from "../../components/step";
import {ResultPresModule} from "../../components/result";



@NgModule({
  declarations: [
    ExerciseOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: ExerciseOneComponent}]),
    StepPresModule,
    ResultPresModule
  ],
  exports: [
    ExerciseOneComponent
  ]
})
export class ExerciseOneModule { }
