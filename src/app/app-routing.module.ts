import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  
  { path: 'home', loadChildren: () => import('../app/Home/home.module').then(home => home.HomeModule)},
  
  { path: 'create', loadChildren: () => import('../app/Create/create.module').then( create => create.CreateModule)},
  
  {path: 'pizzas', loadChildren: () => import('../app/Pizzas/pizzas.module').then( pizzas => pizzas.PizzasModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
