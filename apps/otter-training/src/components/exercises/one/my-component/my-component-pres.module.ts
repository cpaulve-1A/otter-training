import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyComponentPresComponent } from './my-component-pres.component';



@NgModule({
  declarations: [
    MyComponentPresComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MyComponentPresComponent
  ]
})
export class MyComponentPresModule { }
