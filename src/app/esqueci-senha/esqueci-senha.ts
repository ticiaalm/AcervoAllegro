import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-esqueci-senha',
  imports: [FormsModule, RouterLink, CommonModule],
  templateUrl: './esqueci-senha.html',
  styleUrl: './esqueci-senha.css'
})
export class EsqueciSenha {
  email: string = '';
  recuperarSenha() {
    alert(
      'Enviamos as instruções para recuperação de senha. ' + 'Verifique seu e-mail.'
    );
  }
}