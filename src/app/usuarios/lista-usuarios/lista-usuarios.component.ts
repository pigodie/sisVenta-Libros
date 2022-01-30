import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario, UsuarioPage } from '../shared/usuario.model';
import { UsuarioService } from '../shared/usuario.service';

@Component({
  selector: 'app-lista-usuarios',
  templateUrl: './lista-usuarios.component.html',
  styles: [
  ]
})
export class ListaUsuariosComponent implements OnInit {

  usuarios?: Usuario[];
  constructor(
    private usuarioService: UsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.usuarioService.getAll()
      .subscribe(UsuarioPage => {
        this.usuarios = UsuarioPage.content;
      })
  }

  delete(usuario: Usuario) {
    const ok = confirm('¿Seguro que desea eliminar?');
    if (ok) {
      this.usuarioService.delete(usuario.id)
        .subscribe(() => {
          this.getAll();
        })
    }
  }
}


//////////////////


