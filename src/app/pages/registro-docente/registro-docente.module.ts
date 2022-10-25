import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RegistroDocentePageRoutingModule } from './registro-docente-routing.module';

import { RegistroDocentePage } from './registro-docente.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroDocentePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegistroDocentePage]
})
export class RegistroDocentePageModule {}
