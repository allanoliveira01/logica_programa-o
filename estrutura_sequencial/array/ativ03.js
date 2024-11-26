const numero = []

let n = Number(prompt('Digite um numero'))

for(let i = 0; i < numero; i++) {
numero[i] = Number(prompt('Digite um numero para a posição  ' + i))

}
for(let i = numero.length - 1; i >= 0; i--){
    console.log(numero[i])
}
console.log(numero)