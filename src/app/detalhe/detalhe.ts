import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Produto } from '../model/produto';
import { Vitrine } from '../vitrine/vitrine';
import { ItemCesta } from '../model/item-cesta';

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
  adicionarCesta(obj: Produto): void {
      let json = localStorage.getItem("cesta");
      let cesta: ItemCesta[] = [];
      if (json != null && json != undefined) {
        cesta = JSON.parse(json);
      }
      let item = cesta.find(i => i.produto.codigo === obj.codigo);
      if (item != undefined) {
        item.quantidade++;
        let valorUnitario = obj.valorPromo > 0
          ? obj.valorPromo
          : obj.valor;
        item.valorTotal = item.quantidade * valorUnitario;
      } else {
        item = new ItemCesta(obj);
        cesta.push(item);
      }
      localStorage.setItem("cesta", JSON.stringify(cesta));
      location.href = "./cesta";
    }
}