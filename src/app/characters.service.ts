import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  constructor(private http: HttpClient) { }

  retornar() {
    return this.http.get("https://rickandmortyapi.com/api/character/1,2,3,4,5");
  }

  getById(id: string) {
    return this.http.get(`https://rickandmortyapi.com/api/character/${id}`)
  }

}
