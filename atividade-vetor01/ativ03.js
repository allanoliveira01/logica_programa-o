let vetorOriginal = [] 
let vetorMultiplicado = [];

for (let i = 0; i < 10; i++) {
    vetorOriginal[i] = parseInt(prompt(`Digite o ${i + 1}° número`));
    vetorMultiplicado[i] = vetorOriginal[i] * 5;
}

console.log("VETOR ORIGINAL | VETOR MULTIPLICADO");
for (let i = 0; i < 10; i++) {
    console.log(vetorOriginal[i], "           |           ", vetorMultiplicado[i]);
}

