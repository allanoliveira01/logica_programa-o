let salario = 1000
let novoSalario, percentual, anoAtual

anoAtual = Number(prompt("Digite o ano atual: "))

document.write(`<h3 class="sinicial"> O salário de 2005 é de: ${salario}</h3>`)

percentual = 1.5/100
novoSalario = salario + (percentual * salario)

document.write(`<h3 class="s2006"> O salário de 2006 é de: ${novoSalario}</h3>`) 

for(let i = 2007; i<= anoAtual; i++){
    percentual = percentual * 2
    novoSalario = novoSalario + (percentual * novoSalario)

  document.write(`<h3 class="s${i}"> O salário de ${i} é de: ${novoSalario.toFixed(2)}</h3>`)
}