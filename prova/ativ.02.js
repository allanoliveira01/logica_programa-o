// Criação de um array vazio para armazenar os números
let numeros = [];

// Variável para armazenar a soma
let soma = 0;

// Estrutura de repetição para coletar os 5 números
for (let i = 0; i < 5; i++) {
    // Solicita a entrada do número ao usuário
    let numero = parseFloat(prompt(`Digite o ${i + 1}º número:`));
    
    // Adiciona o número ao array
    numeros[i] = numero;

    // Incrementa a soma
    soma += numero;
}

// Exibe a soma
console.log("A soma dos números digitados é: " + soma);

// Exibe os números digitados, um por linha
console.log("Os números digitados foram:");
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}