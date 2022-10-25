import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { ServiceDocenteService, docente} from '../../services/service-docente.service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio-d.page.html',
  styleUrls: ['./inicio-d.page.scss'],
})
export class Inicio_dPage implements OnInit {

  formularioLogin: FormGroup;
  usuarios : docente[] = [];

  constructor(private menuController: MenuController,
    private alertController: AlertController, 
    private navController: NavController,
    private registroService: ServiceDocenteService, 
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
    this.registroService.getdocente().then(datos=>{ 
      this.usuarios = datos; 
      if (!datos || datos.length==0){
        return null;
      }
      for (let obj of this.usuarios){
        if (f.correo == obj.Correo && f.password==obj.password){
          a=1;
          console.log('ingresado');
          localStorage.setItem('ingresado','true');
          this.navController.navigateRoot('pagina-d');
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
  async aluMsg() {
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
    const alert = await this.alertController.create({
      header: 'BIENVENIDO DOCENTE',
      message: 'Este Correo ya es usado por otro usuario',
      buttons: ['Aceptar'],
    });

    await alert.present();
  }

}
