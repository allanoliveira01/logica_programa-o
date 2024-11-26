let numeros = [10, 20, 30, 40, 50]
let invertidos = []

for(let i = 0; i < 5; i++){
    invertidos[i] = (numeros[numeros.length - 1 - i])
}

console.log("O número digitados foram")
for(let i = 0; i < numeros.length; i++){
    console.log(numeros[i])
}

console.log("Os números em sequência invertida")
for(let i = 0; i < invertidos.length; i++){
    console.log(invertidos[i])
}

