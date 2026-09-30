import { Component } from '@angular/core';
import { RouterLink, RouterOutlet, Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterLink, RouterOutlet, FormsModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  termoBusca: string = "";
  constructor(private router: Router) {}
  
  buscarProduto() {
    const termo = this.termoBusca.trim();
    this.router.navigate(['/vitrine'], {
      queryParams: {
        busca: termo
      }
    }).then(() => {
      window.location.reload();
    });
  }
}