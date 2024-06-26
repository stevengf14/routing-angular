import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcercaDeComponent } from './acerca-de/acerca-de.component';
import { ListaDeLibrosComponent } from './lista-de-libros/lista-de-libros.component';
import { Error404Component } from './error404/error404.component';
import { DetallesComponent } from './detalles/detalles.component';

const routes: Routes = [
  { path: 'books-list', component: ListaDeLibrosComponent },
  { path: 'about', component: AcercaDeComponent },
  { path: 'datails/:bookId', component: DetallesComponent },
  { path: '', redirectTo: 'books-list', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
