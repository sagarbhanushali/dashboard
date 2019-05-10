import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import {appRoutes} from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes),
  ],
  declarations: [
  ],
  providers: [],
  exports: [
    RouterModule
  ]
})
export class RoutesModule { }
