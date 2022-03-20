import { Component, OnInit } from '@angular/core';
import { Personajes } from '../models/personajes.model';
import { PersonajesService } from '../servicios/personajes.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  personajes?: Personajes[];

  constructor(private PersonajesService: PersonajesService) { }

  ngOnInit(): void {
    this.PersonajesService.getAll().subscribe( result => {
      this.personajes = result;
    },
    error => {
      console.log("Errores");
    });
  }
}
