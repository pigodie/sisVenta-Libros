import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule }from '@angular/common/http';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { FormLibroComponent } from './libros/form-libro/form-libro.component';
import { FormUsuarioComponent } from './usuarios/form-usuario/form-usuario.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ListaLibrosComponent,
    ListaUsuariosComponent,
    FormLibroComponent,
    FormUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
