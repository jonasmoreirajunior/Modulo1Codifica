const prompt = require('prompt-sync')();

const primeiro = parseInt(prompt("Informe um valor: "))
const segundo = parseInt(prompt("Informe um valor: "))
const terceiro = parseInt(prompt("Informe um valor: "))
const quarto = primeiro + segundo + terceiro

soma25(primeiro)
triplicar(segundo)
modificar(terceiro)
console.log(`A soma de todos os valores é: ${quarto}`);

function soma25(valor) {
    return console.log(`O valor do primeiro somado com 25 é: ${valor + 25}`, "\n")
}

function triplicar(valor) {
    return console.log(`O valor do segundo triplicado é: ${valor * 3}`, "\n")
}

function modificar(valor) {
    return console.log(`12% do terceiro é: ${valor * 0.12}`, "\n")
}