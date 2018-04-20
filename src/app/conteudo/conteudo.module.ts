import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaFilmesComponent } from './lista-filmes/lista-filmes.component';
import { FilmeCardComponent } from './filme-card/filme-card.component';
import { FilmeService } from './filme.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule
  ],
  declarations: [ListaFilmesComponent, FilmeCardComponent],
  exports: [
    ListaFilmesComponent,
    FilmeCardComponent
  ],
  providers: [FilmeService]
})
export class ConteudoModule { }
