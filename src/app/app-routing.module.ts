import { NgModule } from '@angular/core';
import { RouterModule, Routes, ExtraOptions } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {PokedexComponent} from "./pokemon/pokedex/pokedex.component";
import {DevelopmentComponent} from "./development/development.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'pokedex', component: PokedexComponent},
  {path: 'development', component: DevelopmentComponent},
];
const routerOptions : ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling:'enabled',
}

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

// to add a smooth scrolling effect when clicking a button
// you will need to add "ExtraOption" and the
// "const routerOptions : ExtraOptions = {
//   scrollPositionRestoration: 'enabled',
//   anchorScrolling:'enabled',
// }"
// and add the variable in line 19

// lines added 2, 13, 14, 15, and 19.
