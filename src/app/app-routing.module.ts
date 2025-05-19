import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { AreceberComponent } from './areceber/areceber.component';
import { AuthGuard } from './auth.guard';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NfePdfGeneratorComponent } from './nfe-pdf-generator/nfe-pdf-generator.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'login', loadChildren: () => import('./login/login.module').then(m=> m.LoginModule)},
  {path: 'cadastros', component: CadastrosComponent,canActivate: [AuthGuard]},
  {path: 'cliente', component: ClienteComponent,canActivate: [AuthGuard] },
  {path: 'pedidos', component: PedidosComponent,canActivate: [AuthGuard] },
  {path: 'nfe-pdf-generator', component: NfePdfGeneratorComponent ,canActivate: [AuthGuard]},
  {path: 'areceber', component: AreceberComponent,canActivate: [AuthGuard] },
  {path: 'relatorios', loadChildren: () => import('./relatorios/relatorios.module').then(m => m.RelatoriosModule) },
  { path: 'acesso-negado', component: AcessoNegadoComponent }, // Página de acesso negado
  { path: '**', redirectTo: '/login' }  // Redirecionar qualquer rota inválida para o login

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
