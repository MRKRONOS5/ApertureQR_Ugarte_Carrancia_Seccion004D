import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaDPageRoutingModule } from './pagina-d-routing.module';

import { PaginaDPage } from './pagina-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaDPageRoutingModule
  ],
  declarations: [PaginaDPage]
})
export class PaginaDPageModule {}
