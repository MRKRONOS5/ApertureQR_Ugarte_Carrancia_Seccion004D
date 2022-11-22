import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PaginaDPageRoutingModule } from './pagina-d-routing.module';
import { QRCodeModule } from 'angularx-qrcode';
import { PaginaDPage } from './pagina-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PaginaDPageRoutingModule,
    QRCodeModule
  ],
  declarations: [PaginaDPage]
})
export class PaginaDPageModule {}
