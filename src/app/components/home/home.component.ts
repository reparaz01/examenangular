import { Component, OnInit } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  cubos: any[] = [];
  cubosCargados: boolean = false;

  constructor(private service: ServiceCubos) { }

  ngOnInit(): void {
    this.loadCubos();
  }

  loadCubos(): void {
    this.service.getCubos().subscribe(result => {
      this.cubos = result;
      this.cubosCargados = true;
    });
  }
}
