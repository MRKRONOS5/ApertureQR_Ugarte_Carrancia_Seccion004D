import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Inicio_dPage } from './inicio-d.page';

const routes: Routes = [
  {
    path: '',
    component: Inicio_dPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Inicio_dPageRoutingModule {}
