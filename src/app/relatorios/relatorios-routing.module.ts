import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Rel0001Component } from './rel0001/rel0001.component';
import { Rel0002Component } from './rel0002/rel0002.component';

const routes: Routes = [
  { path: 'rel0001', component: Rel0001Component },
  { path: 'rel0002', component: Rel0002Component }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
