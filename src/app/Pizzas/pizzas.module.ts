import { Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasComponent } from './pizza/pizzas.component';
import { Router, RouterModule, Routes } from '@angular/router';
const routes: Routes = [{
  path:'',
  component: PizzasComponent
}]
@NgModule({
  declarations: [
    PizzasComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ],
  exports: [RouterModule]
})
export class PizzasModule { }