import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';

@Component({
  imports: [CommonModule],
  selector: 'app-cesta',
  styleUrl: './cesta.css',
  templateUrl: './cesta.html',
})
export class Cesta {
  lista: ItemCesta[] = [];
  total: number = 0;
  
  constructor(@Inject(PLATFORM_ID) private platformId: Object) { }
  ngOnInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.carregarCesta();
    }
  }

  carregarCesta() {
    const json = localStorage.getItem('cesta');
    if (json != null) {
      this.lista = JSON.parse(json);
      // Recalcula o valor total de cada item
      this.lista.forEach(item => {
        const valorUnitario = item.produto.valorPromo > 0
          ? item.produto.valorPromo
          : item.produto.valor;

        item.valorTotal = valorUnitario * item.quantidade;
      });
      localStorage.setItem('cesta', JSON.stringify(this.lista));
    }
    this.calcularTotal();
  }

  calcularTotal() {
    this.total = this.lista.reduce(
      (soma, item) => soma + item.valorTotal,
      0
    );
  }
}