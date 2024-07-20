import {Component, Input, OnInit} from '@angular/core';
import {DataService} from "../../service/data.service";
import {Pokemon} from "pokenode-ts";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent implements OnInit{
  @Input() pokemons: Pokemon[] = [];
  name: string = '';
  constructor() {
  }
  ngOnInit() {
  }
}
