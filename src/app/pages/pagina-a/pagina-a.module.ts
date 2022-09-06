import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaAPageRoutingModule } from './pagina-a-routing.module';

import { PaginaAPage } from './pagina-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaAPageRoutingModule
  ],
  declarations: [PaginaAPage]
})
export class PaginaAPageModule {}
