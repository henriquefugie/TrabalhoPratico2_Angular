import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ImagensComponent } from './imagens/imagens.component';
import { NomesComponent } from './nomes/nomes.component';
import { NomeDetalhesComponent } from './nome-detalhes/nome-detalhes.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ImagensComponent,
    NomesComponent,
    NomeDetalhesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
