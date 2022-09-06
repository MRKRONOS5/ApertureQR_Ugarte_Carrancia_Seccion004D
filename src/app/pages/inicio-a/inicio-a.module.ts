import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InicioAPageRoutingModule } from './inicio-a-routing.module';

import { InicioAPage } from './inicio-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAPageRoutingModule
  ],
  declarations: [InicioAPage]
})
export class InicioAPageModule {}
