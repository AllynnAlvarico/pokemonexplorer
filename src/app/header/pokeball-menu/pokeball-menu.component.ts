import { Component } from '@angular/core';

@Component({
  selector: 'app-pokeball-menu',
  templateUrl: './pokeball-menu.component.html',
  styleUrl: './pokeball-menu.component.css'
})
export class PokeballMenuComponent {


  isHidden: boolean = false;
  isVisible: boolean = false;

  toggleAnimation(): void {
    this.isHidden = !this.isHidden;
    this.isVisible = !this.isVisible;
  }
}
