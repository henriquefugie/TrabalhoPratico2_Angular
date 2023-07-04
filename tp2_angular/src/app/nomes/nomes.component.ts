import { Component, OnInit } from '@angular/core';

import { Pessoa } from './pessoa';
import { PessoaService } from './pessoa.service';

@Component({
  selector: 'app-nomes',
  templateUrl: './nomes.component.html',
  styleUrls: ['./nomes.component.css']
})
export class NomesComponent implements OnInit {
  pessoas: Pessoa[] = [];

  constructor(private pessoaService: PessoaService) { }

  ngOnInit(): void {
    this.getPessoas();
  }

  getPessoas(): void {
    this.pessoaService.getPessoas()
    .subscribe(pessoas => this.pessoas = pessoas);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.pessoaService.addPessoa({ name } as Pessoa)
      .subscribe(pessoa => {
        this.pessoas.push(pessoa);
      });
  }

  delete(pessoa: Pessoa): void {
    this.pessoas = this.pessoas.filter(h => h !== pessoa);
    this.pessoaService.deletePessoa(pessoa.id).subscribe();
  }
}