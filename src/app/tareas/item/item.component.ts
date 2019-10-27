import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'kc-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: string;

  //Emisor de eventos
  @Output()
  evtAdd: EventEmitter<string>;

  constructor() {
    this.evtAdd = new EventEmitter();
   }

  ngOnInit() {
    this.item = '';
    
  }

  btnAdd() {
    console.log('The btnAdd method of ItemComponent');

    if (this.item != '') {
      this.evtAdd.emit(this.item);
      this.item = '';
    }
  }

}
