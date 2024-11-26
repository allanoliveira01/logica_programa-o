let codigoCidade
let numAcidentesTransito
let numVeiculoPasseio
let contadora
let maiorNumAcidentes
let cidadeComMaisAcidentes
let menorNumAcidentes
let cidadeComMenosAcidentes
let mediaVeiculosPasseio
let mediaAcidentesMenos2000Veiculos
let somaVeiculosPasseio = 0
let somaAcidentesMenos2000Veiculos = 0
let contadorCidadeMenos200Veiculos = 0



for (contadora = 1; contadora <= 1; contadora++) {

    do {
        codigoCidade =  codigoCidade = Number(prompt("Digite o código da cidade"))
        if(codigoCidade <= 0 || isNaN (codigoCidade)){
            alert(`Codigo: ${codigoCidade} inválido`)
        }
        
    } while (codigoCidade <= 0 || isNaN (codigoCidade));

    do {
        numVeiculoPasseio =  numVeiculoPasseio = Number(prompt("Digite o número de veículos de passeio"))
        if(codigoCidade <= 0 || isNaN (numVeiculoPasseio)){
            alert(`Codigo: ${numVeiculoPasseio} inválido`)
        }
        
    } while (numVeiculoPasseio <= 0 || isNaN (numVeiculoPasseio));


    do {
        numAcidentesTransito =  numAcidentesTransito = Number(prompt("Digite o número de acidente de transito"))
        if(numAcidentesTransito <= 0 || isNaN (numAcidentesTransito)){
            alert(`Codigo: ${numAcidentesTransito} inválido`)
        }
        
    } while (numAcidentesTransito <= 0 || isNaN (numAcidentesTransito));



    document.write(`Cidade: ${codigoCidade}, Veículos: ${numVeiculoPasseio}, Acidentes: ${numAcidentesTransito} <br>`)

    if(contadora === 1){
        maiorNumAcidentes = numAcidentesTransito
        cidadeComMaisAcidentes = codigoCidade
        menorNumAcidentes = numAcidentesTransito
        cidadeComMenosAcidentes = codigoCidade

    }else{
        if(numAcidentesTransito > maiorNumAcidentes){
            maiorNumAcidentes = numAcidentesTransito
            cidadeComMaisAcidentes = codigoCidade
        }

        if(numAcidentesTransito < menorNumAcidentes)
        menorNumAcidentes = numAcidentesTransito
        cidadeComMenosAcidentes = codigoCidade
    
    }
    somaVeiculosPasseio = somaVeiculosPasseio + numVeiculoPasseio

    if(numVeiculoPasseio < 2000){
        somaAcidentesMenos2000Veiculos += numVeiculoPasseio
        contadorCidadeMenos200Veiculos++

    }
}

document.write(`<p> Cidade com mais acidentes: ${cidadeComMaisAcidentes}, Acidentes: ${maiorNumAcidentes} </p>`)
document.write(`<p> Cidade com menos acidentes: ${cidadeComMenosAcidentes}, Acidentes: ${menorNumAcidentes} </p>`)

mediaVeiculosPasseio = somaVeiculosPasseio / 5

if(contadorCidadeMenos200Veiculos === 0){
    document.write(`<p> Nenhuma cidade tem menos de 2000 veículos </p>`)
}else{
    mediaAcidentesMenos2000Veiculos = somaAcidentesMenos2000Veiculos / contadorCidadeMenos200Veiculos
    document.write(`<p> Média de acidentes nas cidades com menos de 2000 veículos ${mediaAcidentesMenos2000Veiculos}`)
}

   