import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';

@Component({
  imports: [CommonModule],
  selector: 'app-detalhe',
  styleUrl: './detalhe.css',
  templateUrl: './detalhe.html',
})
export class Detalhe {
  mensagem: string = "";
  obj: Produto = new Produto();
  ngOnInit() {
    let json = localStorage.getItem("produto");
    this.mensagem = "";
    if (json != null) {
      this.obj = JSON.parse(json);
    } else {
      this.mensagem = "Produto não encontrado!";
    }
  }
}