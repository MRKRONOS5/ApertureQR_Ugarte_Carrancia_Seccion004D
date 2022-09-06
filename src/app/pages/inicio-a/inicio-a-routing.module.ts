import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { InicioAPage } from './inicio-a.page';

const routes: Routes = [
  {
    path: '',
    component: InicioAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class InicioAPageRoutingModule {}
