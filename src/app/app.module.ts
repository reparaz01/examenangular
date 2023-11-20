import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { routing, appRoutingProviders } from './app.routing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';

import { ServiceCubos } from './services/service.cubos';
import { MarcaComponent } from './components/marca/marca.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { DetallesusuarioComponent } from './components/detallesusuario/detallesusuario.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    MarcaComponent,
    ComentariosComponent,
    LoginComponent,
    UsuarioComponent,
    LogoutComponent,
    DetallesusuarioComponent

  ],
  imports: [
    BrowserModule,
    routing,
    HttpClientModule,
    FormsModule
  ],
  providers: [appRoutingProviders, ServiceCubos],
  bootstrap: [AppComponent]
})
export class AppModule { }
