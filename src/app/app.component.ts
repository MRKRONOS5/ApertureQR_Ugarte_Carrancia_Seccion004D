import { Component } from '@angular/core';

interface Componente{
  icon:string;
  name:string;
  redirecTo:string;
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}


  componentes: Componente[] = [ 
    { 
      icon: 'home-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    
    {
      icon: 'walk-outline',
      name: 'Inicio sesion docente',
      redirecTo:'/inicio-d',
    },
    {
      icon: 'walk-outline',
      name: 'Inicio estudiante',
      redirecTo: '/inicio-a',
    },
  ];




}
