// Escreva um algoritmo para imprimir os 50 primeiros número primos maior que 100.
// Obs.: Número primo é aquele divisível somente por 1 e ele mesmo.

const ePrimo = (numero) => {
    if (numero <= 1) {
        return false;
    }

    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            return false;
        }
    }

    return true;
}

let numero = 101;
let numerosPrimosEncontrados = 0;

console.log("Os 50 primeiros números primos maiores que 100 são:");

while (numerosPrimosEncontrados < 50) {
    if (ePrimo(numero)) {
        console.log(numero);
        numerosPrimosEncontrados++;
    }
    numero++;
}

