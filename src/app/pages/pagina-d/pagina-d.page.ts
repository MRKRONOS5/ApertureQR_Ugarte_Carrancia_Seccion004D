import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-pagina-d',
  templateUrl: './pagina-d.page.html',
  styleUrls: ['./pagina-d.page.scss'],
})
export class PaginaDPage implements OnInit {
  qrCodeString= 'Hola Mundo'; 
  scannedResult:any;
  constructor(private menuController: MenuController,
    private navController: NavController) { }

    usuario={
      nom:'',
    }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }
  async cerrarSesion(){
    localStorage.removeItem('ingresado');
    this.navController.navigateRoot('inicio-a');
  };
  generaScan(){
    this.qrCodeString= this.usuario.nom;
  }

  verScan(){
    this.scannedResult=this.qrCodeString;
  }
}
