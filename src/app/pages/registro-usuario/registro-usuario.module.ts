import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistroUsuarioPageRoutingModule } from './registro-usuario-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RegistroUsuarioPage } from './registro-usuario.page';

@NgModule({
  imports: [
    ReactiveFormsModule,
    CommonModule,
    FormsModule,
    IonicModule,
    RegistroUsuarioPageRoutingModule
  ],
  declarations: [RegistroUsuarioPage]
})
export class RegistroUsuarioPageModule {}
