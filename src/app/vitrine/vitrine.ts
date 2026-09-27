import { Component } from '@angular/core';
import { Produto } from '../model/produto';

@Component({
  imports: [],
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
}