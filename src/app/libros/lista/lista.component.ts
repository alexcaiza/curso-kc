import { Component, OnInit } from '@angular/core';
import { CatalogoService } from '../../services/catalogo.service';
import { Book } from '../../models/books.model';

@Component({
  selector: 'kc-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  aBooks: Array<Book>;

  constructor(private catalogo: CatalogoService) { }

  ngOnInit() {
    console.log('The ngOnInit method');
    this.aBooks = this.catalogo.getBooks();
    console.log('this.aBooks: ');
    console.log(this.aBooks);
  }

}
