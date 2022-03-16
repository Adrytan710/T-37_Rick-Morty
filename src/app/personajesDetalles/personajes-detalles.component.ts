import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from '../characters.service';

@Component({
  selector: 'app-personajes-detalles',
  templateUrl: './personajes-detalles.component.html',
  styleUrls: ['./personajes-detalles.component.css']
})
export class PersonajesDetallesComponent implements OnInit {

  characters:any = null;

  id:any = this.route.snapshot.paramMap.get('id');
  constructor(private CharactersService: CharactersService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.CharactersService.getById(this.id)
      .subscribe( result => this.characters = result)
  }
}
