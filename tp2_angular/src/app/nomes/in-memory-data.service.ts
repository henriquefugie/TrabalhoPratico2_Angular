import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const pessoas = [
      { id: 1, name: 'Lara' },
      { id: 2, name: 'Aline' },
      { id: 3, name: 'João' },
      { id: 4, name: 'Gustavo' },
      { id: 5, name: 'Caio' },
      { id: 6, name: 'Henrique' },
      { id: 7, name: 'Marina' },
      { id: 8, name: 'Yara' },
      { id: 9, name: 'Kelvin' }
    ];
    return {pessoas};
  }

  genId(pessoas: Pessoa[]): number {
    return pessoas.length > 0 ? Math.max(...pessoas.map(pessoa => pessoa.id)) + 1 : 1;
  }
}