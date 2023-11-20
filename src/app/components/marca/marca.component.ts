import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Cubo } from 'src/app/models/cubo';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css'],
})
export class MarcaComponent implements OnInit {
  public cubos!: Array<Cubo>;
  public cubosCargados = false;
  public nombremarca: string = '';
  private previousRoute: string | null = null;

  constructor(
    public _serviceCubos: ServiceCubos,
    public _activeRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.loadCubosMarca();
  }

  loadCubosMarca(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      this.nombremarca = parametros['nombremarca'];
      this._serviceCubos.getCubosMarca(this.nombremarca).subscribe((response) => {
        this.cubos = response;
        this.cubosCargados = true;
      });
    });
  }

  ngDoCheck(): void {
    const currentRoute = this._activeRoute.snapshot.url.map((segment) => segment.path).join('/');

    if (currentRoute !== this.previousRoute) {
      this.previousRoute = currentRoute;
      this.cubosCargados = false;
      this.loadCubosMarca();
    }
  }
}
