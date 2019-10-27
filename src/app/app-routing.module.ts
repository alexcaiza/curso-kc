import { TareasComponent } from './tareas/tareas.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'tareas', loadChildren: './tareas/tareas.module#TareasModule'},
  { path: 'contactos', loadChildren: './contactos/contactos.module#ContactosModule'},
  { path: 'libros', loadChildren: './libros/libros.module#LibrosModule'},
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: '**', pathMatch: 'full', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
