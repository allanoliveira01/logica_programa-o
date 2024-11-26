// Definindo um array para armazenar os modelos dos veículos
let modelos = [];
// Definindo um array para armazenar os consumos de combustível
let consumos = [];

// Solicita a entrada do modelo e do consumo para cada veículo
for (let i = 0; i < 5; i++) {
    // Solicita o modelo do veículo
    modelos[i] = prompt(`Digite o modelo do veículo ${i + 1}:`);
    
    // Solicita o consumo de combustível (km/l)
    consumos[i] = parseFloat(prompt(`Digite o consumo de combustível (km/l) do veículo ${i + 1}:`));
}

// Calcula a quantidade de combustível necessária para percorrer 1000 km para cada veículo
let combustivelNecessario = [];
for (let i = 0; i < 5; i++) {
    combustivelNecessario[i] = 1000 / consumos[i]; // 1000 km dividido pelo consumo do veículo
    console.log(`O veículo ${modelos[i]} precisa de ${combustivelNecessario[i].toFixed(2)} litros de combustível para percorrer 1000 km.`);
}

// Identifica o veículo mais econômico (menor consumo de combustível)
let menorConsumo = consumos[0];
let modeloMaisEconomico = modelos[0];

for (let i = 1; i < 5; i++) {
    if (consumos[i] > menorConsumo) {
        menorConsumo = consumos[i];
        modeloMaisEconomico = modelos[i];
    }
}

console.log(`O veículo mais econômico é o ${modeloMaisEconomico} com o consumo de ${menorConsumo} km/l.`);
