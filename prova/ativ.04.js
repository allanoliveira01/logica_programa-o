let vetor1 = [];
let vetor2 = [];
let vetorIntercalado = [];

// Preenchendo os dois vetores com 10 elementos cada
for (let i = 0; i < 10; i++) {
    // Inserindo valores no vetor1
    let numero1 = prompt(`Digite o ${i + 1}º número para o vetor1:`);
    vetor1[i] = parseInt(numero1);

    // Inserindo valores no vetor2
    let numero2 = prompt(`Digite o ${i + 1}º número para o vetor2:`);
    vetor2[i] = parseInt(numero2);
}

// Intercalando os vetores
let posicao = 0; // Índice do vetor intercalado
for (let i = 0; i < 10; i++) {
    vetorIntercalado[posicao] = vetor1[i];
    posicao++;
    vetorIntercalado[posicao] = vetor2[i];
    posicao++;
}

// Exibindo os vetores resultantes
console.log("Vetor1: ", vetor1);
console.log("Vetor2: ", vetor2);
console.log("Vetor Intercalado: ", vetorIntercalado);