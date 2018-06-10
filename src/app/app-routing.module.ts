import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { UsersComponent } from './users/users.component';
import { MenuupComponent } from './menuup/menuup.component';

const routes: Routes = [
  {path: 'productos', component: ProductsComponent},
  {path: 'usuarios', component: UsersComponent},
  {path: 'nav', component: MenuupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const listRoutings = [ProductsComponent, UsersComponent, MenuupComponent];
