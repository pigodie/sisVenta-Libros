import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Libro, LibroPage } from './libro.model';
import { environment } from '../../../environments/environment';


//funciones para
//paginar, obtener por id, crear, actualizar y eliminar libros.
@Injectable({
  providedIn: 'root'
})
export class LibroService {

  private apibase:string = environment.apibase;

  constructor( 
    private http: HttpClient
    
    ){}
   

  getAll(page: number = 0, size: number = 5):Observable<LibroPage>{
      return this.http.get<LibroPage>(`${this.apibase}/libros/`,{});
  }
  get(id:number): Observable<Libro>{
      return this.http.get<Libro>(`${this.apibase}/libros/${id}`);
  }
  create(libro: Libro) : Observable<Libro>{
    return this.http.post<Libro>(`${this.apibase}/libros/`,libro);
  }
  update(id: number, libro: Libro) : Observable<Libro>{
    return this.http.put<Libro>(`${this.apibase}/libros/${id}`, libro);
  }
  delete(id: number){
    return this.http.delete<Libro>(`${this.apibase}/libros/${id}`);
  }
}
