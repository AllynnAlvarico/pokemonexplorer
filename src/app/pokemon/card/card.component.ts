import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Pokemon, PokemonSpecies} from "pokenode-ts";
import {response} from "express";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() pokemons: Pokemon[] = [];


  description: string = '';
  constructor(
    private data: DataService
  ) {
  }
  ngOnInit() {
  }
  getPokemonTypeClasses(type: any): string {
    return type.type.name + " img-holder";
  }
}
