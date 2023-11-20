import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ServiceCubos } from 'src/app/services/service.cubos';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  @ViewChild('cajaEmail') cajaEmailRef!: ElementRef;
  @ViewChild('cajaPassword') cajaPasswordRef!: ElementRef;

  public mensaje = '';
  public loginCorrecto: boolean = false;
  public loginIncorrecto: boolean = false;

  constructor(
    private serviceCubos: ServiceCubos,
    private _router: Router
  ) {}

  ngOnInit(): void {
    this.comprobarLoginAntiguo();
  }

  login(): void {
    var email = this.cajaEmailRef.nativeElement.value;
    var password = this.cajaPasswordRef.nativeElement.value;

    this.serviceCubos.autorizarAcceso(email, password).subscribe(
      (data) => {
        environment.token = data.response;
        this.loginCorrecto = true;
        this.loginIncorrecto = false;
        console.log("Usuario:", email);
        console.log("Password:", password);
        console.log("TOKEN: " + environment.token);
        this._router.navigate(['/usuario']);
      },
      (error) => {
        console.error(error);
        this.loginCorrecto = false;
        this.loginIncorrecto = true;
        console.log("Usuario:", email);
        console.log("Password:", password);
        console.log("TOKEN: " + environment.token);
      }
    );
  }

  comprobarLoginAntiguo(): void {
    if (environment.token !== "") {
      this._router.navigate(['/usuario']);
    }
  }
}
