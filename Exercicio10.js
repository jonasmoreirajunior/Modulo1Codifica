const prompt = require('prompt-sync')();

let numero = parseInt(prompt("Digite um número inteiro: "))

if (!isNaN(numero) && Number.isInteger(numero)) {
    for (let i = 0; i < 10; i++) {
        console.log(numero);
    }
} else {
    console.log("Informe um número inteiro")
}