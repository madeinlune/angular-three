import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PointLightDirective } from './point-light.directive';



@NgModule({
  declarations: [
    PointLightDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PointLightDirective
  ]
})
export class PointLightModule { }