const prompt = require('prompt-sync')();

const valores = []

let valor1 = parseInt(prompt("Digite o primeiro valor: "))
let valor2 = parseInt(prompt("Digite o segundo valor: "))

valores.push(valor1)

while (valor2 === valor1) {
    valor2 = parseInt(prompt("Digite um valor diferente do primeiro valor: "))
}

valores.push(valor2)

console.log(`Os valores informados em ordem crescente são: ${valores.sort()}`)
