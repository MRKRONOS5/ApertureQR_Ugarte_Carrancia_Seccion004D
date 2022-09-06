import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-inicio-a',
  templateUrl: './inicio-a.page.html',
  styleUrls: ['./inicio-a.page.scss'],
})
export class InicioAPage implements OnInit {

  constructor(private menuController: MenuController) { }

  ngOnInit() {
  }

  mostrarMenu()
  {
    this.menuController.open('first');
  }

  usuario={
    nombre:'',
    password:'',
    email:'',
  }
}
