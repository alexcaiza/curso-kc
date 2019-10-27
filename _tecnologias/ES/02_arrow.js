let aDatos = {precio: 100, iva: 12};

aDatos.calcularIvaAsync = function () {
    console.log('The calcularIvaAsync method');
    setTimeout(() => {

        let precioFinal = this.precio + (this.precio * this.iva / 100)

        console.log(`
            El precio final es: 
            ${precioFinal.toFixed(2)} `
        );
    }, 3000)
}

aDatos.calcularIvaAsync();