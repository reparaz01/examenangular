import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { Comentario } from 'src/app/models/comentario';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css']
})
export class ComentariosComponent implements OnInit{

  public comentarios!: Array<Comentario>;
  public comentariosCargados: boolean = false;

  constructor(
    private _serviceCubos: ServiceCubos,
    private _activeRoute: ActivatedRoute

    ) {}

  ngOnInit(): void {
    this.loadComentarios();
  }

  loadComentarios(): void {
    this._activeRoute.params.subscribe((parametros: Params) => {
      var idCubo = parseInt(parametros['idcubo']);
      this._serviceCubos.getComentarios(idCubo).subscribe((response) => {
        this.comentarios = response;
        this.comentariosCargados = true;
      });
    });
    
  }


}
