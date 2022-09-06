import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio-d.page.html',
  styleUrls: ['./inicio-d.page.scss'],
})
export class Inicio_dPage implements OnInit {

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


  onSubmit(){
    console.log('submit');
    console.log(this.usuario);
  }


}
