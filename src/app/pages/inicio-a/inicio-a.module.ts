import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { ReactiveFormsModule } from '@angular/forms';
import { InicioAPageRoutingModule } from './inicio-a-routing.module';
import { InicioAPage } from './inicio-a.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InicioAPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [InicioAPage]
})
export class InicioAPageModule {}
