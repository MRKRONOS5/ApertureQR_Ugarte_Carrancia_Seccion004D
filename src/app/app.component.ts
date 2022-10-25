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
      icon: 'apps-outline',
      name: 'Inicio',
      redirecTo: '/inicio',
    },
    
    {
      icon: 'walk-outline',
      name: 'Inicio estudiante',
      redirecTo: '/inicio-a',
    },
    {
      icon: 'man-outline',
      name: 'Inicio sesion docente',
      redirecTo:'/inicio-d',
    },
    { 
      icon: 'person-outline',
      name: 'registro-estudiante',
      redirecTo: '/registro-usuario',
    },
    {
      icon: 'person-outline',
      name: 'registro-docente',
      redirecTo: '/registro-docente',
    },

    {
      icon: 'aperture-outline',
      name: 'api rick and morty',
      redirecTo: '/api',
      
    }

  ];




}
