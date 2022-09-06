import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaAPage } from './pagina-a.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaAPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaAPageRoutingModule {}
