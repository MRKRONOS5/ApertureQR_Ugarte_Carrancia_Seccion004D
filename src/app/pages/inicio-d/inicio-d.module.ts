import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Inicio_dPageRoutingModule } from './inicio-d-routing.module';

import { Inicio_dPage } from './inicio-d.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Inicio_dPageRoutingModule
  ],
  declarations: [Inicio_dPage]
})
export class Inicio_dPageModule {}
