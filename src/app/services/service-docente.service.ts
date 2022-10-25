import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

export interface docente{
  id : number;
  Nombre: string; 
  Correo: string;
  password: string;  
  modified: number;
  repassUsuario: string;
}

const USERS_KEY='My-docente';

@Injectable({
  providedIn: 'root'
})
export class ServiceDocenteService {

  private _storage: Storage;

  constructor(private storage: Storage) {
  this.init();
  }
    //creamos el almacen de usuarios(key,value)
  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

    //crear un nuevo usuario en el storage
    async adddocente(dato:docente):Promise<any>{
      return this.storage.get(USERS_KEY).then((datos:docente[])=>{
        if(datos){
          datos.push(dato);
          return this.storage.set(USERS_KEY, datos);
        }
        else{
          return this.storage.set(USERS_KEY, [dato]);
        }
      })
    }

    //metodo que devuelve la información del storage 
    async getdocente():Promise<docente[]>{
      return this.storage.get(USERS_KEY);
}
}
