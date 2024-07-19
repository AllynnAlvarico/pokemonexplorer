import {Component, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import {response} from "express";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  pokemons: any[] = [];
  name: string = '';
  constructor(
    private dataService: DataService
  ) {
  }
  ngOnInit() {
    this.dataService.getPokemons()
      .subscribe((response: any) => {
        console.log(response);
        response.results.forEach((result: any) => {
          this.dataService.getPokemonDetails(result.name)
            .subscribe((uniqueResponse: any) => {
              this.pokemons.push(uniqueResponse);
              console.log(uniqueResponse.name);
            });
        });
    });
  }
}
