const prompt = require('prompt-sync')();

const quantidadeMacas = parseInt(prompt("Quantidade de maças: "))

const calculaMacas = (valor) => {
    if (valor < 12) {
        return console.log(`O valor total da compra é de: R$ ${valor * 0.30}`)
    }

    return console.log(`O valor total da compra é de : R$ ${valor * 0.25}`)
}

calculaMacas(quantidadeMacas)