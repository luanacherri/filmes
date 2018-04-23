import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FilmeService } from '../../filme.service';
import { Filme } from '../../fillme';


@Component({
  selector: 'app-forms-pesquisa',
  templateUrl: './forms-pesquisa.component.html',
  styleUrls: ['./forms-pesquisa.component.css']
})
export class FormsPesquisaComponent implements OnInit {

  @Output()
  public pesquisa = new EventEmitter<object[]>();

  listaFilmes: Filme[] = [];
  constructor( private filmeService: FilmeService) { }

  ngOnInit() {
  }

  onSubmit(Form){

    this.listaFilmes = [];

    this.filmeService.getFilmes(Form.value.nome).subscribe(data => {
      data['Search'].map(filme => {
        let film = {
          'id': filme.imdbID,
          'titulo': filme.Title,
          'ano': filme.Year,
          'tipo': filme.Type,
          'poster': filme.Poster
        }

        this.listaFilmes.push(film);

      });
      this.pesquisa.emit(this.listaFilmes)
    })
  }
}
