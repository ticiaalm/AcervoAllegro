import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../model/cliente';

@Component({
  imports: [FormsModule],
  selector: 'app-cadastro',
  styleUrl: './cadastro.css',
  templateUrl: './cadastro.html',
})
export class Cadastro {
  cliente: Cliente = new Cliente();
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