import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.css']
})
export class ReferenciasComponent implements OnInit {

  usuario: string;
  idioma: string;

  constructor() { }

  ngOnInit() {
    this.idioma = '';
    this.usuario = '';
  }

  btnBorrar(event) {
    console.log('The btnBorrar method');
    console.log(event);
    this.usuario = '';
  }

  btnUsuario(event) {
    console.log(event);
    this.usuario = 'Alex Caiza';
  }

}
