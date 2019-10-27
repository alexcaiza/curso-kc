import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  @Input()
  aItems;

  //Emisor de eventos
  @Output()
  evtBorrar: EventEmitter<number>;

  constructor() { 
    this.evtBorrar = new EventEmitter();
  }

  ngOnInit() {
  }

  btnBorrar(i: number) {
    console.log('The btnBorrar method of ListaComponent');
    console.log('i: ' + i);

    this.evtBorrar.emit(i);
  }

}
