import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'kc-control-tareas',
  templateUrl: './control-tareas.component.html',
  styleUrls: ['./control-tareas.component.css']
})
export class ControlTareasComponent implements OnInit {

  aTareas: Array<string>;

  constructor() { }

  ngOnInit() {
    this.aTareas = [];
  }

  addTareas(tarea){
    console.log('The addTareas method of ControlTareasComponent');
    console.log('Tarea:' + tarea);
    this.aTareas.push(tarea);

    console.log('Tareas:');
    console.dir(this.aTareas);
    /*
    this.aTareas.forEach(function (item) {
      console.log(item);
    });
    */

  }

  deleteTareas(i) {
    console.log('The deleteTareas method of ControlTareasComponent');
    console.log('i: ' + i);

    this.aTareas.splice(i, 1);
  }

}
