import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Pokemon, PokemonClient} from "pokenode-ts";

@Injectable({
  providedIn: 'root'
})
export class DataService implements OnInit{

  api: string = 'https://pokeapi.co/api/v2/';
  constructor(
    private http: HttpClient
  ) { }

  ngOnInit() {
    // console.log("hello");
  }
  getPokemons(limit: number, offset: number): Observable<any>{
    return this.http.get(`${this.api}pokemon?limit=${limit}&offset=${offset}`);
  }
  getAllPokemons(){
    return this.http.get(`${this.api}pokemon?limit=100000&offset=0`);
  }
  getPokemonDetails(name: string){
    return this.http.get(`${this.api}/pokemon/${name}`)
  }
  getPokemonData(url: string){
    return this.http.get(`${url}`);
  }




}
