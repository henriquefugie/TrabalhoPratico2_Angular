import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Pessoa } from '../nomes/pessoa';
import { PessoaService } from '../nomes/pessoa.service';

@Component({
  selector: 'app-nome-detalhes',
  templateUrl: './nome-detalhes.component.html',
  styleUrls: ['./nome-detalhes.component.css']
})
export class NomeDetalhesComponent implements OnInit {
  pessoa: Pessoa | undefined;

  constructor(
    private route: ActivatedRoute,
    private pessoaService: PessoaService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getPessoa();
  }

  getPessoa(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.pessoaService.getPessoa(id)
      .subscribe(pessoa => this.pessoa = pessoa);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.pessoa) {
      this.pessoaService.updatePessoa(this.pessoa)
        .subscribe(() => this.goBack());
    }
  }



}
