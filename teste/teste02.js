// Criação de um array vazio para armazenar os números
// Variável para armazenar a soma
// Estrutura de repetição para coletar os 5 números
// Adiciona o número ao array
// Incrementa a soma
// Exibe a soma
// Exibe os números digitados, um por linha

let numeros = [];
let soma = 0

for(let i = 0; i < 5; i++){
    let numero = parseFloat(prompt(`Digite o ${i + 1} número`))
    numeros[i] = numero
    soma += numero
}

console.log("O total do números inseridos", numeros)

console.log("Os números digitados foram")
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}





















// let numeros = []
// let soma = 0

// for(let i = 0; i < 5; i++){
//     numero = parseFloat(prompt(`Digite o ${i + 1} número`))
//     numeros[i] = numero
//     soma += numero
// }

// console.log("Os números inseridos foram: " + numeros)



// console.log("Número digitados por linha")
//     for(let i = 0; i < numeros.length; i++){
//         console.log(numeros[i])
// }