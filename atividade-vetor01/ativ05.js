let numeros = [9, -10, 12, -20, 12, 28, -2000, 11];
let positivos = [];
let negativos = [];
let somaPositivos = 0;
let somaNegativos = 0;
let ResultantesPositivo = 0;
let ResultantesNegativo = 0;

for (let i = 0; i < 8; i++) {
    if (numeros[i] > 0) {
    
        positivos[ResultantesPositivo] = numeros[i];
        ResultantesPositivo++;
        somaPositivos += numeros[i];
    } else if (numeros[i] < 0) {
        negativos[ResultantesNegativo] = numeros[i];
        ResultantesNegativo++;
        somaNegativos += numeros[i];
    }
}
console.log("Números positivos:", positivos);
console.log("Soma dos positivos:", somaPositivos);
console.log("Números negativos:", negativos);
console.log("Soma dos negativos:", somaNegativos);
