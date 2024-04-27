const prompt = require('prompt-sync')();

const valorA = parseInt(prompt("Insira o valor do lado A: "))
const valorB = parseInt(prompt("Insira o valor do lado B: "))
const valorC = parseInt(prompt("Insira o valor do lado C: "))

const verificaTipo = (valor1, valor2, valor3) => {
    if (valor1 === valor2 && valor2 === valor3) {
        return console.log("É um triângulo eqüilátero")
    } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        return console.log("É um triângulo isósceles")
    }

    return console.log("É um triângulo escaleno")
}

const seTriangulo = (valor1, valor2, valor3) => {
    if (valor1 < valor2 + valor3 && valor2 < valor1 + valor3 && valor3 < valor1 + valor2) {
        console.log("Verificando o tipo de triângulo...")
        setTimeout(() => {
            verificaTipo(valor1, valor2, valor3)
        }, 500)
    } else {
        console.log("Os valores inseridos não correspondem a um triângulo")
    }
}

seTriangulo(valorA, valorB, valorC)