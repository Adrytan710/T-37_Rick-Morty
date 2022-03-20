import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Personajes } from '../models/personajes.model';

const baseURL = 'http://localhost:3000/personajes'

@Injectable({
  providedIn: 'root'
})
export class PersonajesService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Personajes[]> {
    return this.http.get<Personajes[]>(baseURL);
  }

  get(id: any): Observable<Personajes> {
    return this.http.get<Personajes>(`${baseURL}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseURL, data);
  }

  update(id: any, data: any): Observable<any> {
    return this.http.put(`${baseURL}/${id}`, data);
  }

  delete(id: any): Observable<any> {
    return this.http.delete(`${baseURL}/${id}`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(baseURL);
  }

  findByName(name: any): Observable<Personajes[]> {
    return this.http.get<Personajes[]>(`${baseURL}?name=${name}`);
  }
}
