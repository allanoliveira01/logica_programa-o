let numeros = [];
let soma = 0;

for (let i = 0; i < 5; i++) {
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));

    numeros[i] = numero;

    soma += numero;
}
console.log("O total dos números inseridos é:" + soma);

console.log("Os números inseridos foram: ");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}