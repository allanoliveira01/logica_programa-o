// let array1 = [];
// let array2 = [];
// let vetorIntercalado = [];


// for (let i = 0; i < 10; i++) {
 
//     let numero1 = prompt(`Digite o ${i + 1}º número para o vetor1:`);
//     array1[i] = parseInt(numero1);
    
//     let numero2 = prompt(`Digite o ${i + 1}º número para o vetor2:`);
//     array2[i] = parseInt(numero2);
// }

// let posicao = 0; 
// for (let i = 0; i < 10; i++) {
//     vetorIntercalado[posicao] = array1[i];
//     posicao++;
//     vetorIntercalado[posicao] = array2[i];
//     posicao++;
// }

// console.log("Vetor1: ", array1);
// console.log("Vetor2: ", array2);
// console.log("Vetor Intercalado: ", vetorIntercalado);

let array1 = [], array2 = [], vetorIntercalado = [];

for (let i = 0; i < 10; i++) {
    array1[i] = parseInt(prompt(`Digite o ${i + 1}º número para o vetor1:`));
    array2[i] = parseInt(prompt(`Digite o ${i + 1}º número para o vetor2:`));
    vetorIntercalado[2 * i] = array1[i];
    vetorIntercalado[2 * i + 1] = array2[i];
}

console.log("Vetor1: ", array1);
console.log("Vetor2: ", array2);
console.log("Vetor Intercalado: ", vetorIntercalado);

