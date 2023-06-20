import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ImagensComponent } from './imagens/imagens.component';
import { NomesComponent } from './nomes/nomes.component';
import { NomeDetalhesComponent } from './nome-detalhes/nome-detalhes.component';

const routes: Routes = [
  {path: '', component:  HomeComponent},
  {path: 'imagens', component: ImagensComponent},
  {path: 'nomes', component: NomesComponent,},
  {path: 'detalhes', component: NomeDetalhesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
