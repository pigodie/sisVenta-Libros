import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Libro, LibroPage } from '../shared/libro.model';
import { LibroService } from '../shared/libro.service';

@Component({
  selector: 'app-lista-libros',
  templateUrl: './lista-libros.component.html',
  styles: [
  ]
})
export class ListaLibrosComponent implements OnInit {

  libros?: Libro[];

  constructor(
    private libroService: LibroService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.libroService.getAll()
      .subscribe(LibroPage => {
        this.libros = LibroPage.content;
      })
  }

  delete(libro: Libro) {
    const ok = confirm('¿Seguro que desea eliminar?');
    if (ok) {
      this.libroService.delete(libro.id)
        .subscribe(() => {
          this.getAll();
        })
    }
  }

}
