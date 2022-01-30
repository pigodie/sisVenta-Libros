import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../shared/libro.service';
import { Libro } from '../shared/libro.model';

@Component({
  selector: 'app-form-libro',
  templateUrl: './form-libro.component.html',
  styles: [
  ]
})
export class FormLibroComponent implements OnInit {
  errors?: any;
  formulario?: FormGroup;
  libro?:Libro;

  constructor(

    private libroService: LibroService,
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute

  ) {

  }

  ngOnInit(): void {

    const id = this.route.snapshot.paramMap.get('idBook');


    if (id) {
      this.libroService.get(parseInt(id))
        .subscribe(libro => {

          this.libro = libro;

          this.formulario = this.formBuilder.group({
            titulo: [libro.titulo, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            slug: [libro.slug, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            descripcion: [libro.descripcion, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            precio: [libro.precio, [Validators.required, Validators.min(1)]],
          })
        })
    } else {
      this.formulario = this.formBuilder.group({
        titulo: [, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        slug: [, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        descripcion: [, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        precio: [, [Validators.required, Validators.min(1)]],
      })
    }

  }


  save() {

    if (this.formulario?.invalid) {
      return;
    }

    const values = this.formulario?.value;

    values['rutaArchivo'] = 'ejemplo.png';
    values['rutaPortada'] = 'ejemplo.jpg';

    let request; 

    if (this.libro) {
      request = this.libroService.update(this.libro.id, values);
    } else {
      request = this.libroService.create(values);
    }

    request
      .subscribe({
        next: libro => {
          //direccionanmos a la pagina de inicio si todo esta bien
          this.router.navigate(['/books']);
          //console.log('libro', libro);
        },
        error: err => {
          console.log('errores de validacion', err.error.errors);
          this.errors = err.error.errors;
        }
      })
  }
}
