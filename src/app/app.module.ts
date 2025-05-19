import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoModule, PoNotificationModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { FormsModule } from '@angular/forms';
import { CadastrosComponent } from './cadastros/cadastros.component';
import { AreceberComponent } from './areceber/areceber.component';
import { AcessoNegadoComponent } from './acesso-negado/acesso-negado.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { NfePdfGeneratorComponent } from './nfe-pdf-generator/nfe-pdf-generator.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClienteComponent,
    PedidosComponent,
    CadastrosComponent,
    AreceberComponent,
    AcessoNegadoComponent,
    NfePdfGeneratorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoTemplatesModule,
    FormsModule,
    PoNotificationModule
  ],
  providers: [
    provideHttpClient(withInterceptorsFromDi()),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
