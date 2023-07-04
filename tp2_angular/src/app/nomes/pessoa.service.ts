import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

import { Pessoa } from './pessoa';

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  private pessoasUrl = 'api/pessoas';
  private localStorageKey = 'pessoas';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
  ) { }

  getPessoas(): Observable<Pessoa[]> {
    const localPessoas = this.getLocalPessoas();

    if (localPessoas) {
      return of(localPessoas);
    } else {
      return this.http.get<Pessoa[]>(this.pessoasUrl)
        .pipe(
          tap(pessoas => this.saveLocalPessoas(pessoas)),
          catchError(this.handleError<Pessoa[]>('getPessoas', []))
        );
    }
  }

  getPessoa(id: number): Observable<Pessoa> {
    const url = `${this.pessoasUrl}/${id}`;
    return this.http.get<Pessoa>(url).pipe(
      catchError(this.handleError<Pessoa>(`getPessoa id=${id}`))
    );
  }

  searchPessoas(term: string): Observable<Pessoa[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Pessoa[]>(`${this.pessoasUrl}/?name=${term}`).pipe(
      catchError(this.handleError<Pessoa[]>('searchPessoas', []))
    );
  }

  addPessoa(pessoa: Pessoa): Observable<Pessoa> {
    return this.http.post<Pessoa>(this.pessoasUrl, pessoa, this.httpOptions).pipe(
      tap((novaPessoa: Pessoa) => {
        this.addToLocalPessoas(novaPessoa); // Adiciona o novo herói ao armazenamento local
      }),
      catchError(this.handleError<Pessoa>('addPessoa'))
    );
  }

  private addToLocalPessoas(pessoa: Pessoa): void {
    const localPessoas = this.getLocalPessoas();
  
    if (localPessoas) {
      localPessoas.push(pessoa);
      this.saveLocalPessoas(localPessoas);
    }
  }

  deletePessoa(id: number): Observable<Pessoa> {
    const url = `${this.pessoasUrl}/${id}`;

    return this.http.delete<Pessoa>(url, this.httpOptions).pipe(
      tap(_ => this.deleteLocalPessoa(id)), // Remove o herói do armazenamento local
      catchError(this.handleError<Pessoa>('deletePessoa'))
    );
  }
  updatePessoa(pessoa: Pessoa): Observable<any> {
    const url = `${this.pessoasUrl}/${pessoa.id}`;

    return this.http.put(url, pessoa, this.httpOptions).pipe(
      tap(_ => this.updateLocalPessoa(pessoa)), // Atualiza o herói no armazenamento local
      catchError(this.handleError<any>('updatePessoa'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);
      return of(result as T);
    };
  }

  private saveLocalPessoas(pessoas: Pessoa[]): void {
    localStorage.setItem(this.localStorageKey, JSON.stringify(pessoas));
  }

  private getLocalPessoas(): Pessoa[] {
    const localPessoas = localStorage.getItem(this.localStorageKey);
    return localPessoas ? JSON.parse(localPessoas) : null;
  }

  private updateLocalPessoa(pessoa: Pessoa): void {
    const localPessoas = this.getLocalPessoas();

    if (localPessoas) {
      const index = localPessoas.findIndex(h => h.id === pessoa.id);
      if (index !== -1) {
        localPessoas[index] = pessoa;
        this.saveLocalPessoas(localPessoas);
      }
    }
  }

  private deleteLocalPessoa(id: number): void {
    const localPessoas = this.getLocalPessoas();

    if (localPessoas) {
      const index = localPessoas.findIndex(h => h.id === id);
      if (index !== -1) {
        localPessoas.splice(index, 1);
        this.saveLocalPessoas(localPessoas);
      }
    }
  }
}
