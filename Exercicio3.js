// Faça um algoritmo que leia quatro números inteiros e realize as seguintes operações:
// ● Some 25 ao primeiro inteiro;
// ● Triplique o valor do segundo inteiro;
// ● Modifique o valor do terceiro inteiro para 12% do valor original;
// ● Armazene no quarto inteiro a soma dos valores originais (os que o usuário digitou)
// dos primeiros três inteiros.

const prompt = require('prompt-sync')();

const primeiro = parseInt(prompt("Informe um valor: "))
const segundo = parseInt(prompt("Informe um valor: "))
const terceiro = parseInt(prompt("Informe um valor: "))
const quarto = primeiro + segundo + terceiro

soma25(primeiro)
triplicar(segundo)
modificar(terceiro)
console.log(`A soma de todos os valores é: ${quarto}`);

/**
 * 
 * @param {number} valor 
 * @returns 
 */
function soma25(valor) {
    return console.log(`O valor do primeiro somado com 25 é: ${valor + 25}`, "\n")
}

/**
 * 
 * @param {number} valor 
 * @returns 
 */
function triplicar(valor) {
    return console.log(`O valor do segundo triplicado é: ${valor * 3}`, "\n")
}

/**
 * 
 * @param {number} valor 
 * @returns 
 */
function modificar(valor) {
    return console.log(`12% do terceiro é: ${valor * 0.12}`, "\n")
}