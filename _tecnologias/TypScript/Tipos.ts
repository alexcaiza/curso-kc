class Tipos{
    algo: any;
    id: number | string;
    nombre: string;
    edad: number;
    isAlumno: boolean;
    aDatos: Array<string>;
    aNumbers: number[];

    constructor(){
    }

    mostrar() {
        console.log(this);
    }
}



let tipos = new Tipos();

tipos.edad = 3;
tipos.isAlumno = true;
tipos.nombre = "Alex Julian";
tipos.algo = "Julian Alapphilipe";

tipos.mostrar();

// Compilar: 
// ..\..\node_modules\.bin\ts-node Tipos.ts
