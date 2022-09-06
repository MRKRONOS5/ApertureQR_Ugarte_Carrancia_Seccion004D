import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaginaDPage } from './pagina-d.page';

const routes: Routes = [
  {
    path: '',
    component: PaginaDPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaginaDPageRoutingModule {}
