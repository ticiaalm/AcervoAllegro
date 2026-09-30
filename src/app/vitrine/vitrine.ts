import { Component } from '@angular/core';
import { Produto } from '../model/produto';
import { CommonModule } from '@angular/common';
import { ItemCesta } from '../model/item-cesta';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [CommonModule],
  selector: 'app-vitrine',
  styleUrl: './vitrine.css',
  templateUrl: './vitrine.html',
})
export class Vitrine {
  lista: Produto[] = [
    {
      codigo: 1,
      nome: 'Violão Acústico',
      descritivo: 'Violão acústico de madeira, ideal para estudos e apresentações.',
      valor: 599.90,
      valorPromo: 549.90,
      estoque: 10,
      destaque: 1
    },
    {
      codigo: 2,
      nome: 'Guitarra Elétrica',
      descritivo: 'Guitarra elétrica de seis cordas para diversos estilos musicais.',
      valor: 1299.90,
      valorPromo: 1199.90,
      estoque: 8,
      destaque: 1
    },
    {
      codigo: 3,
      nome: 'Teclado Musical',
      descritivo: 'Teclado musical com diferentes timbres para estudo e apresentações.',
      valor: 899.90,
      valorPromo: 799.90,
      estoque: 6,
      destaque: 1
    },
    {
      codigo: 4,
      nome: 'Bateria Acústica',
      descritivo: 'Bateria acústica completa para prática e apresentações.',
      valor: 2499.90,
      valorPromo: 2299.90,
      estoque: 4,
      destaque: 1
    },
    {
      codigo: 5,
      nome: 'Cajón',
      descritivo: 'Cajón de madeira para acompanhamento rítmico.',
      valor: 349.90,
      valorPromo: 299.90,
      estoque: 12,
      destaque: 0
    },
    {
      codigo: 6,
      nome: 'Violino',
      descritivo: 'Violino acústico indicado para estudantes e músicos iniciantes.',
      valor: 749.90,
      valorPromo: 699.90,
      estoque: 7,
      destaque: 0
    },
    {
      codigo: 7,
      nome: 'Ukulele',
      descritivo: 'Ukulele de quatro cordas, leve e fácil de transportar.',
      valor: 299.90,
      valorPromo: 249.90,
      estoque: 15,
      destaque: 0
    },
    {
      codigo: 8,
      nome: 'Baixo Elétrico',
      descritivo: 'Baixo elétrico de quatro cordas para diversos estilos musicais.',
      valor: 1499.90,
      valorPromo: 1399.90,
      estoque: 5,
      destaque: 1
    },
    {
      codigo: 9,
      nome: 'Saxofone Alto',
      descritivo: 'Saxofone alto indicado para estudos e apresentações.',
      valor: 1899.90,
      valorPromo: 1699.90,
      estoque: 3,
      destaque: 0
    },
    {
      codigo: 10,
      nome: 'Flauta Transversal',
      descritivo: 'Flauta transversal indicada para estudantes e músicos.',
      valor: 699.90,
      valorPromo: 649.90,
      estoque: 6,
      destaque: 0
    },
    {
      codigo: 11,
      nome: 'Pandeiro',
      descritivo: 'Pandeiro com acabamento resistente, ideal para ritmos brasileiros.',
      valor: 159.90,
      valorPromo: 139.90,
      estoque: 20,
      destaque: 1
    },
    {
      codigo: 12,
      nome: 'Cavaquinho',
      descritivo: 'Cavaquinho acústico indicado para samba e choro.',
      valor: 449.90,
      valorPromo: 399.90,
      estoque: 9,
      destaque: 0
    }
  ];

  listaExibida: Produto[] = [];

  buscaRealizada: boolean = false;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const busca = params['busca'];
      if (busca && busca.trim() !== '') {
        this.buscaRealizada = true;
        this.buscar(busca);
      } else {
        this.buscaRealizada = false;
        this.listaExibida = this.lista;
      }
    });
  }

  buscar(termo: string): void {
    const busca = termo
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .trim();
    this.listaExibida = this.lista.filter(obj => {
      const nome = obj.nome
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '');
      return nome.includes(busca);
    });
  }

  mostrarDetalhe(obj: Produto): void {
    localStorage.setItem("produto", JSON.stringify(obj));
    location.href = "./detalhe";
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