import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Usuario, UsuarioPage } from './usuario.model';


//funciones para
//paginar, obtener por id, crear, actualizar y eliminar usuarios.
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private apibase: string = environment.apibase;

  constructor(
    private http: HttpClient
  ){}

  getAll(page: number = 0, size: number = 5): Observable<UsuarioPage> {
    return this.http.get<UsuarioPage>(`${this.apibase}/usuarios`, {});
  }
  get(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.apibase}/usuarios/${id}`);
  }
  create(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${this.apibase}/usuarios/`, usuario);
  }
  update(id: number, usuario: Usuario): Observable<Usuario> {
    return this.http.put<Usuario>(`${this.apibase}/usuarios/${id}`, usuario);
  }
  delete(id: number) {
    return this.http.delete<Usuario>(`${this.apibase}/usuarios/${id}`);

  }

}
