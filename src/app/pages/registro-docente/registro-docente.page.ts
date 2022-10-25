import { Component,OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { FormGroup, FormControl,Validators,FormBuilder,} from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { ServiceDocenteService, docente } from '../../services/service-docente.service';

@Component({
  selector: 'app-registro-docente',
  templateUrl: './registro-docente.page.html',
  styleUrls: ['./registro-docente.page.scss'],
})
export class RegistroDocentePage implements OnInit {

  formularioRegistro: FormGroup;
  newRegistro: docente = <docente>{};
  constructor(
    private alertController: AlertController,
    private registroService: ServiceDocenteService,
    private toastController: ToastController,
    private menuController: MenuController,
    private fb: FormBuilder
  ) {
    this.formularioRegistro = this.fb.group({
      nombre: new FormControl('', Validators.required),
      correo: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmaPass: new FormControl('', Validators.required),
    });
  }

  ngOnInit() {}
  async Creardocente() {
    var form = this.formularioRegistro.value;
    if (this.formularioRegistro.invalid) {
      const alert = await this.alertController.create({
        header: 'Datos incompletos',
        message: 'Debe ingresar todo los datos solicitados',
        buttons: ['oK'],
      });
      await alert.present();
      return;
    } else {
      this.newRegistro.Nombre = form.nombre;
      this.newRegistro.Correo = form.correo;
      this.newRegistro.password = form.password;
      this.newRegistro.repassUsuario = form.confirmaPass;
      this.registroService.adddocente(this.newRegistro).then((dato) => {
        this.newRegistro = <docente>{};
        this.showToast('docente Creado!');
      });
    }
  }
  async showToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      duration: 2000,
    });
    toast.present();
  }
  mostrarMenu() {
    this.menuController.open('first');
  }

}
