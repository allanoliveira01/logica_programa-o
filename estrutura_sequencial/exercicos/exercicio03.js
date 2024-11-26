//1º Definir os dados de entrada (Variaveis)
let numero1, numero2
let soma, sub, mult, div 

numero1 = parseFloat(prompt("Digite um valor para o segundo numero"))
numero2 = parseFloat(prompt("Digite um valor para o segundo numero"))

//2° Processamento (Logica|Resolver o algoritmo)

soma = numero1 + numero2 
sub = numero1 - numero2 
mult = numero1 * numero2 
div = numero1 / numero2 

//3° Saída de dados (resultado do processamento)

document.write(`A soma de ${numero1} + ${numero2} = ${soma} <br>`)
document.write(`A subtração de  ${numero1} - ${numero2} = ${sub} <br>`)
document.write(`A multiplicação de  ${numero1} * ${numero2} = ${mult} <br>`)
document.write(`A divisão de  ${numero1} / ${numero2} = ${div} <br>`)


 



