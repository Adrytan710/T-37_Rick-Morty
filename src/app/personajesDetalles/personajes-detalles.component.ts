import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PersonajesService } from '../servicios/personajes.service';
import { Personajes } from '../models/personajes.model';

@Component({
  selector: 'app-personajes-detalles',
  templateUrl: './personajes-detalles.component.html',
  styleUrls: ['./personajes-detalles.component.css']
})
export class PersonajesDetallesComponent implements OnInit {

  id:any;
  personaje: Personajes = {
    name: '',
    species: '',
    gender: '',
    origin: '',
    image: ''
  }

  constructor (private PersonajesService: PersonajesService, private _route: ActivatedRoute,
               private router: Router) { }

  ngOnInit(): void {

    this.id = this._route.snapshot.paramMap.get('id');

    this.PersonajesService.get(this.id).subscribe(result => {
      this.personaje = result;
    },
    error => {
      console.log("Errores");
    });
  }

  updateStatus(status: boolean): void {
    const data = {
      name: this.personaje.name,
      gender: this.personaje.gender,
      species: this.personaje.species,
      origin: this.personaje.origin,
      image: this.personaje.image,
      status: status
    };

    this.PersonajesService.update(this.personaje.id, data).subscribe (response => {
      this.personaje.status = status;
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }

  deleteCharacter(): void {
    this.PersonajesService.delete(this.personaje.id).subscribe (response => {
      console.log(response);
      this.router.navigate(['/characters']);
    },
    error => {
      console.log(error);
    });
  }
}
