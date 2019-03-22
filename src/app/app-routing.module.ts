import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login/login.component';
import { PedidosComponent } from './pedidos/pedidos/pedidos.component';
import { MenuComponent } from './menu/menu/menu.component';
import { ZonasComponent } from './zonas/zonas/zonas.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'index', component: IndexComponent },
  { path: 'pedidos', component: PedidosComponent },
  { path: 'menu', component: MenuComponent},
  { path: 'zonas', component: ZonasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
