import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
@Component({
  selector: 'app-pagina-a',
  templateUrl: './pagina-a.page.html',
  styleUrls: ['./pagina-a.page.scss'],
})
export class PaginaAPage implements OnInit {

  constructor(private menuController: MenuController,
    private navController: NavController) { }
  
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
}
