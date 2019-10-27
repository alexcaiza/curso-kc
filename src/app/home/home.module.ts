import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SaludoComponent } from './saludo/saludo.component';
import { ReferenciasComponent } from './referencias/referencias.component';

@NgModule({
  declarations: [
    HomeComponent, 
    SaludoComponent, ReferenciasComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class HomeModule { }
