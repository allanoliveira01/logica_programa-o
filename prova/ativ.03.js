// Criação dos vetores
let vetorOriginal = [];
let vetorMultiplicado = [];

// Solicitação de 10 números ao usuário
for (let i = 0; i < 10; i++) {
    let numero = prompt(`Digite o número ${i + 1}:`);
    vetorOriginal[i] = parseInt(numero); // Armazena no vetor original
    vetorMultiplicado[i] = vetorOriginal[i] * 5; // Multiplica por 5 e armazena no novo vetor
}

console.log("Vetor Original   |   Vetor Multiplicado");
console.log("---------------------------------------");

for (let i = 0; i < 10; i++) {
    console.log(`${vetorOriginal[i]}               |               ${vetorMultiplicado[i]}`);
}
