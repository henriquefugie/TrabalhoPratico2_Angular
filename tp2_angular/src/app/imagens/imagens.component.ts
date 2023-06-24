import { Component } from '@angular/core';

@Component({
  selector: 'app-imagens',
  templateUrl: './imagens.component.html',
  styleUrls: ['./imagens.component.css']
})
export class ImagensComponent {
  numeroImagem!: number;
  imagens: string[] = [];

  adicionarImagem() {
    // Fiz isso para que seja possivel adicionar uma imagem independente do numero positivo recebido
    if (this.numeroImagem > 6) {
      this.numeroImagem = ((this.numeroImagem - 1) % 6) + 1;
    }
    const nomeImagem = `imagem${this.numeroImagem}.jpg`;
    this.imagens.push(nomeImagem);
  }

  removerImagem() {
    const nomeImagem = `imagem${this.numeroImagem}.jpg`;
    const indicesImagem: number[] = [];
    for (let i = 0; i < this.imagens.length; i++) {
      if (this.imagens[i] === nomeImagem) {
        indicesImagem.push(i);
      }
    }
    if (indicesImagem.length > 0) {
      for (let i = indicesImagem.length - 1; i >= 0; i--) {
        this.imagens.splice(indicesImagem[i], 1);
      }
    } else {
      alert(`Nenhuma imagem ${nomeImagem} encontrada.`);
    }
  }
}
