import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-pagina-a',
  templateUrl: './pagina-a.page.html',
  styleUrls: ['./pagina-a.page.scss'],
})
export class PaginaAPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }
}
