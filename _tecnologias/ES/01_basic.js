const aDatos = [{precio: 100},{precio: 200},{precio: 300}];

calcularPrecio(12)
//calcularPrecio()

function calcularPrecio(iva=14) {
    {
        let finalIva = 1 + (iva / 100)
        console.log(finalIva)
    }
    {
        const constIva = 12
        //constIva = constIva + 1
        console.log(constIva)
    }
    {
        let precioFinal = 0
        aDatos.forEach(item => {
            precioFinal = item.precio + (item.precio * iva / 100)
            mostrarPrecio(precioFinal)
        })
    }

}

function mostrarPrecio(precioFinal) {
    console.log(
        `El precio final es: 
        ${precioFinal.toFixed(2)}
        `
    )
}