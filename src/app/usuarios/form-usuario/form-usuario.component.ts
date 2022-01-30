import { Component, OnInit } from '@angular/core';
import { UsuarioService } from '../shared/usuario.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from '../shared/usuario.model';

@Component({
  selector: 'app-form-usuario',
  templateUrl: './form-usuario.component.html',
  styles: [
  ]
})
export class FormUsuarioComponent implements OnInit {

  errors?: any;
  formulario?: FormGroup;
  usuario?: Usuario;

  constructor(
    private usuarioService: UsuarioService,
    private formbuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute


  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('idUsuario');
    console.log('el id es: ', id);
    if (id) {

      this.usuarioService.get(parseInt(id))
        .subscribe(usuario => {
          this.usuario = usuario;

          this.formulario = this.formbuilder.group({
            nombres: [usuario.nombres, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            apellidos: [usuario.apellidos, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
            email: [usuario.email, [Validators.required, Validators.email]],
            password: [usuario.password, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
          })
        })
    }
    else {
      this.formulario = this.formbuilder.group({
        nombres: [, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        apellidos: [, [Validators.required, Validators.minLength(3), Validators.maxLength(100)]],
        email: [, [Validators.required, Validators.email]],
        password: [, [Validators.required, Validators.minLength(6), Validators.maxLength(100)]],
        rol: [, []],

      })
    }

  }

  saveU() {
    if (this.formulario?.invalid) {
      return;
    }

    const values = this.formulario?.value;
    //seteando colunas qeu no estan en el front
    values['rol'] = 'ADMIN';
    //viendo si se va guardar o actualizar

    let request;

    if(this.usuario){
      //actualizando
      request =  this.usuarioService.update(this.usuario.id, values)
      
    }else{
      request = this.usuarioService.create(values)
      //guardando libro
      
    }
    request
      .subscribe({
        next: usuario => {
          this.router.navigate(['/users']);
        },
        error: err => {
          console.log('errores de validacion', err.error.errors);
          this.errors = err.error.errors;
        }
      })
    
    
  }



}
