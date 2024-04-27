// As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra.

const prompt = require('prompt-sync')();

const quantidadeMacas = parseInt(prompt("Quantidade de maças: "))

const calculaMacas = (valor) => {
    if (valor < 12) {
        return console.log(`O valor total da compra é de: R$ ${valor * 0.30}`)
    }

    return console.log(`O valor total da compra é de : R$ ${valor * 0.25}`)
}

calculaMacas(quantidadeMacas)