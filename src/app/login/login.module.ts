import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { PoDialogModule, PoPageModule, PoToolbarModule } from '@po-ui/ng-components';
import { PoPageBlockedUserModule, PoPageLoginModule } from '@po-ui/ng-templates';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    PoPageLoginModule,
    LoginRoutingModule,
    PoPageModule,
    PoToolbarModule,
    PoPageBlockedUserModule,
    PoDialogModule,
    HttpClientModule
  ]
})
export class LoginModule { }