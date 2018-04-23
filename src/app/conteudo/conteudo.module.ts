import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';
import { FilmeService } from './filme.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsPesquisaComponent } from './lista-filmes/forms-pesquisa/forms-pesquisa.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule

  ],
  declarations: [ListaFilmesComponent, FilmeCardComponent, FormsPesquisaComponent],
  exports: [
    ListaFilmesComponent,
    FilmeCardComponent
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }
