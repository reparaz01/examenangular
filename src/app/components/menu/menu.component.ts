import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  public marcas: any[] = [];

  constructor(private _serviceCubos: ServiceCubos) {}

  ngOnInit(): void {
    this.getMarcas();
  }

  getMarcas(): void {
    this._serviceCubos.getMarcas().subscribe(
      (result: any[]) => {
        this.marcas = result;
      },
      (error) => {
        console.error('Error al obtener series:', error);
      }
    );
  }
}
