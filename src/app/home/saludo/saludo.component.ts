import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-saludo',
  templateUrl: './saludo.component.html',
  styleUrls: ['./saludo.component.css']
})
export class SaludoComponent implements OnInit {

  usuario: string;
  idioma: string;

  constructor() { }

  ngOnInit() {
    this.usuario = "Alex Caiza";
    this.idioma = "es";
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

