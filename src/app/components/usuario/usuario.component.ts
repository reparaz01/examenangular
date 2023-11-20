import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent {
  constructor(private router: Router) {}

  verPerfil(): void {
    this.router.navigate(['/detallesusuario']);
  }

  verCompras(): void {
    this.router.navigate(['/compras']);
  }

  realizarCompra(): void {
    this.router.navigate(['/realizarcompra']);
  }
}
