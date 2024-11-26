let numeros = [];
let decrescente;

for (let i = 0; i < 10; i++) {
    numeros[i] = parseFloat(prompt(`Digite o número ${i + 1}:`));
}

console.log("Vetor na ordem inserida:", numeros);

for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] < numeros[j]) {
            decrescente = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = decrescente;
        }
    }
}
console.log("Valores ordenado em ordem decrescente:", numeros);
