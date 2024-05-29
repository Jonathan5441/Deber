import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  constructor(private http: HttpClient) { }
  
  private API_LIBROS = 'http://localhost:3001/libros'

  getLibros():Observable <any>{
    return this.http.get(this.API_LIBROS)
  }

  putLibros(libro: any): Observable <any>{
    return this.http.put(`${this.API_LIBROS}/${libro.id}`, libro)
  }

  deleteLibro(id: any): Observable <any>{
    return this.http.delete(`${this.API_LIBROS}/${id}`)
  }

}
