let numeros = [1, 2, 3, 4, 5]
let invertidos = []

for (let i = 0; i < numeros.length; i++) {
  invertidos[i] = (numeros[numeros.length - 1 - i])
}

console.log("Números em sequência original")
for (let i = 0; i < numeros.length; i++) {
  console.log(numeros[i])
}
console.log("Números invertidos")
for (let i = 0; i < invertidos.length; i++) {
  console.log(invertidos[i])
}

