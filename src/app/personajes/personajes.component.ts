import { Component, OnInit } from '@angular/core';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {

  characters:any = null;

  constructor(private CharactersService: CharactersService) { }

  ngOnInit() {
    this.CharactersService.retornar()
      .subscribe( result => this.characters = result)
  }
}
