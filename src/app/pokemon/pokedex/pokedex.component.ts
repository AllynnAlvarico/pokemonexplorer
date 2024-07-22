import {Component, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Pokemon, PokemonSpecies} from "pokenode-ts";

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrl: './pokedex.component.css'
})
export class PokedexComponent implements OnInit{
  pokemons: Pokemon[] = [];


  totalPokemonRegion = 0;
  offset = 0;
  regionConfig: RegionConfigMap = {
    gen1: { totalPokemonRegion: 151, offset: 0 },
    gen2: { totalPokemonRegion: 100, offset: 151 },
    gen3: { totalPokemonRegion: 135, offset: 251 },
    gen4: { totalPokemonRegion: 107, offset: 386 },
    gen5: { totalPokemonRegion: 156, offset: 493 },
    gen6: { totalPokemonRegion: 72, offset: 649 },
    gen7: { totalPokemonRegion: 88, offset: 721 },
    gen8: { totalPokemonRegion: 96, offset: 809 },
    gen9: { totalPokemonRegion: 120, offset: 905 }
  };


  constructor(
    private dataService: DataService
  ) {

  }
  ngOnInit() {
    this.getClick('gen1');
  }
  getClick(buttonId: string){
    this.totalPokemonRegion = 0;
    this.offset = 0;
    this.pokemons = [];
    const region = this.regionConfig[buttonId];
    if (region) {
      this.totalPokemonRegion = region.totalPokemonRegion;
      this.offset = region.offset;
      this.getPokemonByRegion(this.totalPokemonRegion, this.offset);
    }
  }

  getPokemonByRegion(limit: number, offset: number){
    this.dataService.getPokemons(limit, offset)
      .subscribe((response: any) => {
        response.results.forEach((dataObj: any) => {
          this.dataService.getPokemonDetails(dataObj.name)
            .subscribe((uniqueData: any) => {
              if(uniqueData) {
                this.pokemons.push(uniqueData);
              } else {
                console.error('Error: uniqueData is null');
              }

            });
        });
        this.sortPokemon();
        this.pokemons.forEach((test:any)=>{
          console.log(test.id);
        })
      });

  }
  sortPokemon(){
    //this is how to sort the number by ascending the numbers
    this.pokemons.sort((a, b) => a.id - b.id);
    // this.sortedPokemons.forEach((data) => {
    //   console.log(data.id + "this is sort method");
    // })
  }
}

interface RegionConfig {
  totalPokemonRegion: number;
  offset: number;
}

interface RegionConfigMap {
  [key: string]: RegionConfig;
}
