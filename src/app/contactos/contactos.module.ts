import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule } from '@angular/forms';

import { ContactosRoutingModule } from './contactos-routing.module';
import { ContactosComponent } from './contactos.component';
import { FormVdComponent } from './form-vd/form-vd.component';

@NgModule({
  declarations: [ContactosComponent, FormVdComponent],
  imports: [
    CommonModule,
    ContactosRoutingModule,
    FormsModule
  ]
})
export class ContactosModule { }
