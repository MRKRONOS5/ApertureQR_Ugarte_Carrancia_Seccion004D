import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private apihttp:HttpClient) { }



  linkapi(){
    return this.apihttp.get<any>('https://rickandmortyapi.com/api/character');
  }

}
