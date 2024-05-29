import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';
import { LibrosService } from '../../services/libros.service';

@Component({
  selector: 'app-gestion-libros',
  standalone: true,
  imports: [],
  templateUrl: './gestion-libros.component.html',
  styleUrl: './gestion-libros.component.css'
})
export class GestionLibrosComponent {

  servicio = inject(LibrosService)
  libros: any 

  ngOnInit() {
    this.servicio.getLibros().subscribe(a =>{
      this.libros = a
    })
  }

  eliminar(id: any){
    this.servicio.deleteLibro(id).subscribe()
  }


}
