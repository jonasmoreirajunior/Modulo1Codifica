// Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)

const prompt = require('prompt-sync')();

const valorA = parseInt(prompt("Insira o valor do lado A: "))
const valorB = parseInt(prompt("Insira o valor do lado B: "))
const valorC = parseInt(prompt("Insira o valor do lado C: "))

/**
 * Função para verificar tipo do triângulo
 * @param {number} valor1 
 * @param {number} valor2 
 * @param {number} valor3 
 * @returns 
 */
const verificaTipo = (valor1, valor2, valor3) => {
    if (valor1 === valor2 && valor2 === valor3) {
        return console.log("É um triângulo eqüilátero")
    } else if (valor1 === valor2 || valor1 === valor3 || valor2 === valor3) {
        return console.log("É um triângulo isósceles")
    }

    return console.log("É um triângulo escaleno")
}

/**
 * Função para verificar se os valores passados representam um triangulo
 * @param {number} valor1 
 * @param {number} valor2 
 * @param {number} valor3 
 */
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