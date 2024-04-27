// 1. Escreva um algoritmo para ler uma temperatura em graus Celsius, calcular e escrever o
// valor correspondente em graus Fahrenheit.

const prompt = require('prompt-sync')();

function converterTemperatura(value) {
    valorFahrenheit = parseInt((value * 1.8) + 32)
    return console.log("O valor em Fahrenheit é:", valorFahrenheit)
}

const value = parseInt(prompt("Insira o valor em graus Celsius: "))
converterTemperatura(value)