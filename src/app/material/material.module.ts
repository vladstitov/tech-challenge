import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule, MatSelectModule} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatSelectModule,
  ],
  exports: [
    MatCardModule,
    MatSelectModule
  ]
})
export class AppMaterialModule { }
