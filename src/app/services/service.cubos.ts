import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ServiceCubos {
  constructor(private _http: HttpClient) {}

  autorizarAcceso(email: string, password: string): Observable<any> {
    const json = {
      email: email,
      password: password
    };

    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    const request = 'api/Manage/Login';
    const url = environment.urlApi + request;

    return this._http.post(url, json, { headers: headers });
  }

  getMarcas(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    var request = "api/Cubos/Marcas";
    const url = environment.urlApi + request;
    return this._http.get(url, { headers: headers });
  }

  getCubos(): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    const request = 'api/Cubos';
    const url = environment.urlApi + request;

    return this._http.get(url, { headers });
  }


  getCubosMarca(nombremarca: string): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    var request = "api/Cubos/CubosMarca/" + nombremarca;
    const url = environment.urlApi + request;

    return this._http.get(url, { headers });
  }


  getComentarios(idCubo: number): Observable<any> {
    const headers = new HttpHeaders().set('Authorization', 'bearer ' + environment.token);
    var request = "api/ComentariosCubo/GetComentariosCubo/" + idCubo;
    const url = environment.urlApi + request;

    return this._http.get(url, { headers });
  }
  
}
