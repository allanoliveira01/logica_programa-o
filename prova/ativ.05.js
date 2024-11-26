// Vetor inicial com oito números inteiros
let numeros = [5, -3, 10, -7, 0, 2, -1, 8];

// Vetores resultantes
let positivos = [];
let negativos = [];

// Variáveis para armazenar as somas
let somaPositivos = 0;
let somaNegativos = 0;

// Contadores para os índices dos vetores resultantes
let indexPositivo = 0;
let indexNegativo = 0;

// Percorrendo o vetor original para separar os números e calcular as somas
for (let i = 0; i < 8; i++) {
    if (numeros[i] > 0) {
        // Adiciona ao vetor de positivos
        positivos[indexPositivo] = numeros[i];
        indexPositivo++;
        // Soma os números positivos
        somaPositivos += numeros[i];
    } else if (numeros[i] < 0) {
        // Adiciona ao vetor de negativos
        negativos[indexNegativo] = numeros[i];
        indexNegativo++;
        // Soma os números negativos
        somaNegativos += numeros[i];
    }
}

// Exibindo os resultados
console.log("Números positivos:", positivos);
console.log("Soma dos positivos:", somaPositivos);
console.log("Números negativos:", negativos);
console.log("Soma dos negativos:", somaNegativos);
