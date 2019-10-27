interface Autor {
    autor_nombre: string;
    autor_apellido: string;
}

class LibroInterface implements Autor{

    autor_nombre;
    autor_apellido;
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

class LibroTecnico extends LibroInterface {

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

let libroI1 = new LibroInterface("Julian", "Caiza");

libroI1.mostrar();

libroI1.autor = "Alex";

libroI1.mostrar();

let libroT2 = new LibroTecnico("Julian", "Caiza", "Medico");
libroT2.mostrar();

// Compilar: 
// ..\..\node_modules\.bin\ts-node Libros.ts