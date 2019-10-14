class Libro{

    autor: string;
    titulo: string;
    paginas: number;

    constructor(autor, titulo){
        this.autor = autor;
        this.titulo = titulo;
    }

    mostrar() {
        console.log(this);
    }
}

class LibroTec extends Libro {

    categoria: string;

    constructor(autor, titulo, categoria) {
        super(autor, titulo);
        this.categoria = categoria;
    }

    mostrar() {
        super.mostrar();
        console.log('Libro tecnico');
    }
}

let libro1 = new Libro("Julian", "Caiza");

libro1.mostrar();

libro1.autor = "Alex";

libro1.mostrar();

let libro2 = new LibroTec("Julian", "Caiza", "Medico");
libro2.mostrar();