import { Component, OnInit } from '@angular/core';
import { MbooksService } from '../../services/mbooks.service';

@Component({
  selector: 'kc-mock-libros',
  templateUrl: './mock-libros.component.html',
  styleUrls: ['./mock-libros.component.css']
})
export class MockLibrosComponent implements OnInit {

  clave: string;
  aLibros: Array<string>;

  constructor(public mbooks: MbooksService) { }

  ngOnInit() {
    this.clave = '';
    this.aLibros = [];
  }

  btnBuscar() {
    console.log('btnBuscar');
    this.aLibros = this.mbooks.getLibros(this.clave);
  }

  btnBuscarRx() {
    console.log('btnBuscarRx');
    
    this.mbooks.getLibros$(this.clave)
      .subscribe(
        (response: any) => { this.aLibros =  response; }
      );
      
  }

}
