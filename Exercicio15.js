// Fazer um algoritmos para receber um número decimal e o peso de cada número até
// que o usuário digite o número 0. Fazer a média ponderada desses números e pesos
// respectivos.

const prompt = require('prompt-sync')()

let numeros = []
let pesos = []
let numerosMultiplicados = []
let numerosSomados = 0
let pesosSomados = 0
let contador = 0

while (true) {
    let numero = parseFloat(prompt("Digite um número (para encerrar o programa digite 0): "))

    if (numero === 0) {
            break;
    }

    let peso = parseFloat(prompt("Digite um peso para o número informado: "))

    if (!isNaN(numero) && !isNaN(peso)) {
        numeros.push(numero)
        pesos.push(peso)
    } else {
        console.log("Por favor, insira um valor válido para o número e peso.")
    }
}

while (contador <= numeros.length - 1) {
    if (numeros.length === pesos.length) {
        numerosMultiplicados.push(numeros[contador] * pesos[contador])
    }

    pesosSomados += pesos[contador]

    contador++
}

contador = 0

while (contador <= numerosMultiplicados.length - 1) {
    numerosSomados += numerosMultiplicados[contador]

    contador++
}

console.log(`O valor da Média Ponderada é: ${(numerosSomados / pesosSomados).toFixed(5)}`)