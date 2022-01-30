import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaLibrosComponent } from './libros/lista-libros/lista-libros.component';
import { ListaUsuariosComponent } from './usuarios/lista-usuarios/lista-usuarios.component';
import { FormLibroComponent } from './libros/form-libro/form-libro.component';
import { FormUsuarioComponent } from './usuarios/form-usuario/form-usuario.component';

const routes: Routes = [

  //reglase de navegacion
  
  {
    path:'books',
    component: ListaLibrosComponent
    
  },
  {
    path:'users',
    component: ListaUsuariosComponent
    
  },
  {
    path:'newUser',
    component: FormUsuarioComponent
    
  },
  {
    path:'newBook',
    component: FormLibroComponent
    
  },
  {
    path:'users/:idUsuario',
    component: FormUsuarioComponent
    
  },
  
  {
    path:'books/:idBook',
    component: FormLibroComponent
    
  },

  
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
