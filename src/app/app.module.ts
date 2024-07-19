import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {provideHttpClient, withFetch} from "@angular/common/http";
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SampleCardComponent } from './pokemon/card/sample-card/sample-card.component';
import { SiteNavComponent } from './header/site-nav/site-nav.component';
import { FooterComponent } from './footer/footer/footer.component';
import { Col1Component } from './footer/col-1/col-1.component';
import { Col2Component } from './footer/col-2/col-2.component';
import { Col3Component } from './footer/col-3/col-3.component';
import { Col4Component } from './footer/col-4/col-4.component';
import { JournalComponent } from './about/journal/journal.component';
import { PokedexComponent } from './pokemon/pokedex/pokedex.component';
import { CardComponent } from './pokemon/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SampleCardComponent,
    SiteNavComponent,
    FooterComponent,
    Col1Component,
    Col2Component,
    Col3Component,
    Col4Component,
    JournalComponent,
    PokedexComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideHttpClient(withFetch()),
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
