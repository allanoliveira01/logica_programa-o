let modelos = [];
let consumos = [];
let combustivelNecessario = [];
let menorConsumo = consumos[0];
let modeloMaisEconomico = modelos[0];

for (let i = 0; i < 5; i++) {
    modelos[i] = prompt(`Digite o modelo do veículo ${i + 1}:`);
    consumos[i] = parseFloat(prompt(`Digite o consumo de combustível (km/l) do veículo ${i + 1}:`));
}

for (let i = 0; i < 5; i++) {
    combustivelNecessario[i] = 1000 / consumos[i];
    console.log(`O veículo ${modelos[i]} precisa de ${combustivelNecessario[i].toFixed(2)} litros de combustível para percorrer 1000 km.`);
}

for (let i = 1; i < 5; i++) {
    if (consumos[i] > menorConsumo) {
        menorConsumo = consumos[i];
        modeloMaisEconomico = modelos[i];
    }
}

console.log(`O veículo mais econômico é o ${modeloMaisEconomico} com o consumo de ${menorConsumo} km/l.`);
