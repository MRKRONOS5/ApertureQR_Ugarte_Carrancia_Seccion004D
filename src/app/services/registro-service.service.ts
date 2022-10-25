import { Injectable } from '@angular/core';
import { Storage }  from '@ionic/storage';

export interface Datos{
  id : number;
  Nombre: string; 
  Correo: string;
  password: string;  
  modified: number;
  repassUsuario: string;

}

const ITEMS_KEY = 'my-alumno';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  private _storage : Storage;
  
  constructor(private storage: Storage) {
    this.init();
   }
   //definimos en un método la creación del almacenamiento
  async init(){
    const storage = await this.storage.create();
    this._storage= storage;
  }
  //implementar los métodos para la manipulación de nuestro storage
  //agregaremos un objeto a la colección
  //el método recibe un parámetro llamado dato, devuelve una promesa. 
  //Permite obtener las claves de los objetos y los almacena en datos.
  //Crea un espacio en la memoria a través de push con la información del nuevo objeto a crear
  //El nuevo objeto es seteado al storage por medio de las claves. 
 async addDatos(dato: Datos):Promise<any>{
  return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
     if (datos) {
       datos.push(dato);
       return this.storage.set(ITEMS_KEY, datos);
     }else {
       return this.storage.set(ITEMS_KEY, [dato]);
     }

   })
 }

  //Nos permmite obtener la información almacenada en el storage 
  //por medio de sus keys 

 async getDatos(): Promise<Datos[]>{
   return this.storage.get(ITEMS_KEY);
 }


 //actualizar información de un objeto 
 async updateDatos(dato: Datos): Promise<any>{
   return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
     if (!datos || datos.length == 0){
       return null;
     }
     let newDato: Datos[] = [];
     for (let i of datos){
       if (i.id === dato.id){
         newDato.push(dato);
       }
       else{
         newDato.push(i);
       }
     }
     return this.storage.set(ITEMS_KEY, newDato);
   });
 }

  //Eliminar
async deleteDatos(id: number): Promise<Datos>{
   return this.storage.get(ITEMS_KEY).then((datos : Datos[])=>{
     if (!datos || datos.length === 0){
       return null;
     }
     let toKeep: Datos[] = []; 
     for (let i of datos){
       if (i.id !== id){
         toKeep.push(i);
       }
     }
     return this.storage.set(ITEMS_KEY, toKeep);
   });

 }
}