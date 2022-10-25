import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { ApiService } from '../../services/api.service';
@Component({
  selector: 'app-api',
  templateUrl: './api.page.html',
  styleUrls: ['./api.page.scss'],
})
export class ApiPage implements OnInit {

  rick = []

  constructor(private menuController: MenuController,
              private api: ApiService) { }

  ngOnInit() {
    this.api.linkapi().subscribe(res => {
      console.log(res);
      this.rick = res.results;



    })
  }
  mostrarMenu()
  {
    this.menuController.open('first');
  }
}