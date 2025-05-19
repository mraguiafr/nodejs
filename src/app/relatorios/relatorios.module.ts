import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { Rel0001Component } from './rel0001/rel0001.component';
import { Rel0002Component } from './rel0002/rel0002.component';
import { PoPageBackgroundModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';


@NgModule({
  declarations: [
    Rel0001Component,
    Rel0002Component
  ],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    PoModule
  ]
})
export class RelatoriosModule { }
