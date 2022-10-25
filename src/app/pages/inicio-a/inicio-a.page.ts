import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ServicesService, Datos } from '../../services/registro-service.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-inicio-a',
  templateUrl: './inicio-a.page.html',
  styleUrls: ['./inicio-a.page.scss'],
})
export class InicioAPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : Datos[] = [];

  constructor(private menuController: MenuController,
    private alertController: AlertController, 
    private navController: NavController,
    private registroService: ServicesService, 
    private fb: FormBuilder) { 
      this.formularioLogin = this.fb.group({ 
        'correo' : new FormControl("", Validators.required),
        'password' : new FormControl ("", Validators.required)
      })
    }

  ngOnInit() {
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }

  async Ingresar(){
    var f = this.formularioLogin.value;
    var a=0;
    this.registroService.getDatos().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (f.correo == obj.Correo && f.password==obj.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          this.navController.navigateRoot('pagina-a');
        }
      }//findelfor
      if(a==0){
        this.alertMsg();
      }
    })
  }//findelmetodo

  async alertMsg(){
    const alert = await this.alertController.create({
      header: 'Error...',
      message: 'Los datos ingresados son incorrectos',
      buttons: ['Aceptar']
    })
    await alert.present();
    return;
  }
  
  //aviso de Correo ya usado
  async AluMsg() {
    const alert = await this.alertController.create({
      header: 'Alto',
      message: 'Este Correo ya es usado por otro usuario',
      buttons: ['Aceptar'],
    });

    await alert.present();
    return;
  }

  //aviso de Bienvenida
  async bienMsg() {
    for (let obj of this.usuarios){
    const alert = await this.alertController.create({
      header: 'BIENVENIDO ALUMNO'+ obj.Nombre,
      buttons: ['Aceptar'],
    });
  
    await alert.present();
  }
  }
}

