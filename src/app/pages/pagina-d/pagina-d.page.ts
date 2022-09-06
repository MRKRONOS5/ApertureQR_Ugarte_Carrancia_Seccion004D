import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-pagina-d',
  templateUrl: './pagina-d.page.html',
  styleUrls: ['./pagina-d.page.scss'],
})
export class PaginaDPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }
}
