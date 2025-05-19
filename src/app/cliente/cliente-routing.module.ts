import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AreceberComponent } from '../areceber/areceber.component';

const routes: Routes = [
  {path: 'areceber', component:AreceberComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClienteRoutingModule { }
