import { HomeComponent } from "./components/home/home.component";
import { MarcaComponent } from "./components/marca/marca.component";
import { ComentariosComponent } from "./components/comentarios/comentarios.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { UsuarioComponent } from "./components/usuario/usuario.component";



import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";


const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "marca/:nombremarca", component: MarcaComponent },
  { path: "comentarios/:idcubo", component: ComentariosComponent },
  { path: "login", component: LoginComponent },
  { path: "logout", component: LogoutComponent },
  { path: "usuario", component: UsuarioComponent },


]

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders<any> =
  RouterModule.forRoot(appRoutes);