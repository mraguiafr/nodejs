import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidosRoutingModule } from './pedidos-routing.module';
import { PedidosComponent } from './pedidos.component';
import { PoPageModule, PoTableModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    PedidosRoutingModule,
    PoPageModule,
    PoTableModule
  ]
})
export class PedidosModule { }
