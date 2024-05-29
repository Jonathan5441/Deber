import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PrestamosComponent } from './pages/prestamos/prestamos.component';
import { CatalogoComponent } from './pages/catalogo/catalogo.component';
import { GestionLibrosComponent } from './pages/gestion-libros/gestion-libros.component';
import { GestionUsersComponent } from './pages/gestion-users/gestion-users.component';
import { ContactosComponent } from './pages/contactos/contactos.component';
import { bibliotecarioGuard } from './guards/bibliotecario.guard';
import { adminGuard } from './guards/admin.guard';
import { invitadoGuard } from './guards/invitado.guard';

export const routes: Routes = [

    { path: 'home', component: HomeComponent},
    { path: 'prestamos', component: PrestamosComponent, canActivate: [bibliotecarioGuard]},
    { path: 'catalogo', component: CatalogoComponent, canActivate: [bibliotecarioGuard]},
    { path: 'gestionLibros', component: GestionLibrosComponent, canActivate: [adminGuard]},
    { path: 'gestionUsers', component: GestionUsersComponent, canActivate: [adminGuard]},
    { path: 'contactos', component: ContactosComponent, canActivate : [bibliotecarioGuard, invitadoGuard]},

    { path: '', component: HomeComponent},
   

];
