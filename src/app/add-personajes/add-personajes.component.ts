import { Component, OnInit } from '@angular/core';
import { Personajes } from 'src/app/models/personajes.model';
import { PersonajesService } from 'src/app/servicios/personajes.service';

@Component({
  selector: 'app-add-personaje',
  templateUrl: './add-personajes.component.html',
  styleUrls: ['./add-personajes.component.css']
})
export class AddPersonajeComponent implements OnInit {

  id: any;
  personaje: Personajes = {
    name: '',
    gender: '',
    species: '',
    origin: '',
    image: ''
  };
  submitted = false;

  constructor(private personajeService: PersonajesService) { }

  ngOnInit(): void {
  }

  saveCharacters(): void {
    const data = {
      name: this.personaje.name,
      gender: this.personaje.gender,
      species: this.personaje.species,
      origin: this.personaje.origin,
      image: this.personaje.image
  };

    this.personajeService.create(data).subscribe(response => {
      console.log(response);
      this.submitted = true;
    },
    error => {
      console.log(error);
    });
  }

  newCharacter(): void{
    this.submitted = false;
    this.personaje = {
      name: '',
      gender: '',
      species: '',
      origin: '',
      image: ''
    }
  }
}
