const numeros = []
let n = Number(prompt('Digite um numero'))

for (let i = 0; i < numeros; i++) {
    numeros[i] = Number(prompt('Digite um numero para a posição  ' + i))

}
for (let i = numeros.length - 1; i >= 0; i--){
    console.log(numeros[i])
}
console.log(numeros)