const prompt = require('prompt-sync')();

let N = []

for (let i = 1; i <= 5; i++) {
    N.push(prompt("Digite um valor inteiro: "))
}

N.forEach(num => {
    console.log(`Tabuada de ${num}`)
    for (let i = 1; i <= num; i++) {
        console.log(`${num} x ${i} = ${num*i}`)
    }
    console.log("")
});
