function hacerAlgoPromesa() {
    return new Promise(function (resolve, reject){
        setTimeout(
            () => {
                console.log('Hacer algo que a tomado un tiempo');
                let number = Math.random();
                if (number < 0.5) {
                    resolve(number) //correcto
                } else {
                    reject(number) //incorrecto
                }
            }, 1000);
    })
}

hacerAlgoPromesa()
.then((data)=>{
    console.log('Resolve', data);
})
.catch((error)=>{
    console.log('Reject', error);
});