import { Component } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-development',
  templateUrl: './development.component.html',
  styleUrl: './development.component.css'
})
export class DevelopmentComponent {

  constructor(private router: Router) {
  }

  goToPart(fragment:any){
    this.router.navigateByUrl('development#' + fragment);
  }
}

