import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';
import { CommonModule } from '@angular/common';

@Component({
  imports: [FormsModule, CommonModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {

  cliente: Cliente = new Cliente();

  formatarCPF() {
    let cpf = this.cliente.cpf.replace(/\D/g, '');
    if (cpf.length > 3) {
      cpf = cpf.replace(/^(\d{3})(\d)/, '$1.$2');
    }
    if (cpf.length > 7) {
      cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/, '$1.$2.$3');
    }
    if (cpf.length > 11) {
      cpf = cpf.replace(
        /^(\d{3})\.(\d{3})\.(\d{3})(\d)/,
        '$1.$2.$3-$4'
      );
    }
    this.cliente.cpf = cpf;
  }

  formatarTelefone() {
    let telefone = this.cliente.telefone.replace(/\D/g, '');
    if (telefone.length > 2) {
      telefone = telefone.replace(
        /^(\d{2})(\d)/,
        '($1) $2'
      );
    }
    if (telefone.length > 10) {
      telefone = telefone.replace(
        /^(\(\d{2}\) \d{5})(\d)/,
        '$1-$2'
      );
    }
    this.cliente.telefone = telefone;
  }

  cadastrar() {
    if (
      this.cliente.nome.trim() === '' ||
      this.cliente.email.trim() === '' ||
      this.cliente.senha.trim() === '' ||
      this.cliente.confirmarSenha.trim() === '' ||
      this.cliente.cpf.trim() === '' ||
      this.cliente.telefone.trim() === ''
    ) {
      alert("Preencha todos os campos!");
      return;
    }
    if (this.cliente.senha !== this.cliente.confirmarSenha) {
      alert("As senhas não são iguais!");
      return;
    }
    localStorage.setItem(
      "cliente",
      JSON.stringify(this.cliente)
    );
    alert("Usuário cadastrado com sucesso!");
    this.cliente = new Cliente();
  }
}