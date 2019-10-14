class Libro{

    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this);
    }
}

class LibroTec extends Libro {

    constructor(autor, titulo, categoria) {
        super(autor, titulo);
        this.categoria = categoria;
    }

}

let libro1 = new Libro("Julian", "Caiza");

libro1.mostrar();

libro1.autor = "Alex";

libro1.mostrar();

let libro2 = new LibroTec("Julian", "Caiza", "Medico");
libro2.mostrar();
libro2.editorial  = 'Ibarras';
libro2.mostrar();