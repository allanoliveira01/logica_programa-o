// Algoritmo para entrada de 10 números, exibição e ordenação sem funções nativas
let numeros = []; // Inicializa um vetor vazio
let temp;

// Solicita ao usuário a entrada de 10 números
for (let i = 0; i < 10; i++) {
    numeros[i] = parseFloat(prompt(`Digite o número ${i + 1}:`));
}

// Exibe o vetor na ordem inserida
console.log("Vetor na ordem inserida:", numeros);

// Ordena o vetor em ordem decrescente usando estrutura de repetição
for (let i = 0; i < numeros.length; i++) {
    for (let j = i + 1; j < numeros.length; j++) {
        if (numeros[i] < numeros[j]) {
            // Troca os valores sem usar função nativa
            temp = numeros[i];
            numeros[i] = numeros[j];
            numeros[j] = temp;
        }
    }
}

// Exibe o vetor em ordem decrescente
console.log("Vetor ordenado em ordem decrescente:", numeros);
