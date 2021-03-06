import { GbooksService } from './../services/gbooks.service';
import { MbooksService } from './../services/mbooks.service';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LibrosRoutingModule } from './libros-routing.module';
import { LibrosComponent } from './libros.component';
import { MockLibrosComponent } from './mock-libros/mock-libros.component';
import { GoogleBooksComponent } from './google-books/google-books.component';
import { GoogleByServiceComponent } from './google-by-service/google-by-service.component';
import { ListaComponent } from './lista/lista.component';
import { CatalogoService } from '../services/catalogo.service';
import { DetailsComponent } from './details/details.component';

@NgModule({
  declarations: [
    LibrosComponent, 
    MockLibrosComponent, 
    GoogleBooksComponent, 
    GoogleByServiceComponent, 
    ListaComponent, 
    DetailsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    LibrosRoutingModule
  ],
  providers: [
    MbooksService,
    GbooksService,
    CatalogoService
  ]
})
export class LibrosModule { }
