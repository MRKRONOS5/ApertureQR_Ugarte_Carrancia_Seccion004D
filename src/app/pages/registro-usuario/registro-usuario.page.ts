import { Component, OnInit, ViewChild } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ServicesService, Datos } from '../../services/registro-service.service';
import { Platform, ToastController, IonList } from '@ionic/angular';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro-usuario',
  templateUrl: './registro-usuario.page.html',
  styleUrls: ['./registro-usuario.page.scss'],
})
export class RegistroUsuarioPage implements OnInit {

  formularioRegistro : FormGroup;
  newDato: Datos = <Datos>{};

  constructor(private alertController: AlertController, 
              private registroService: ServicesService, 
              private toastController: ToastController,
              private menucontroller: MenuController, 
              private fb: FormBuilder) { 
                  this.formularioRegistro = fb.group({ 
                    'nombre' : new FormControl("", Validators.required),
                    'correo' : new FormControl("", Validators.required),
                    'password': new FormControl("", Validators.required),
                    'confirmaPass': new FormControl("", Validators.required)
                  })
               }

  ngOnInit() {
  }


  mostrarMenu() {
    this.menucontroller.open('first');
  }
  async CrearUsuario(){
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid){
      this.alertError();
    }
    else{
    this.newDato.Nombre=form.nombre;
    this.newDato.Correo=form.correo;
    this.newDato.password = form.password;
    this.newDato.repassUsuario=form.confirmaPass;
    this.registroService.addDatos(this.newDato).then(dato=>{ 
      this.newDato=<Datos>{};
      this.showToast('Usuario Creado!');
    });
    this.formularioRegistro.reset();
  }
  }//findelmetodo

  async alertError(){
    const alert = await this.alertController.create({ 
      header: 'Error..',
      message: 'Debe completar todos los datos',
      buttons: ['Aceptar']
    })
    await alert.present();
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000
    })
    await toast.present();
  }
}