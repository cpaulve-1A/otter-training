import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentCreationExercisePresComponent } from './component-creation-exercise-pres.component';
import { MyComponentPresModule } from '../my-component';



@NgModule({
  declarations: [
    ComponentCreationExercisePresComponent
  ],
  imports: [
    CommonModule,
    MyComponentPresModule
  ],
  exports: [
    ComponentCreationExercisePresComponent
  ]
})
export class ComponentCreationExercisePresModule { }
