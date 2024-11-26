//1° Dados de entrada
let consumoMedio 
let distanciaTotal, combustivelGasto 

distanciaTotal = parseFloat(prompt("Digite a distância total percorrida pelo automóvel"))
combustivelGasto = parseFloat(prompt("Digite a quantidade de combustivel gasto pelo automovel total percorrida pelo automóvel"))

//2° Processamento
consumoMedio = distanciaTotal / combustivelGasto 


//3° Saída de dados 
document.write(`O consumo medio da minha lamborghini é de ${consumoMedio.toFixed(2)}Km/l`)