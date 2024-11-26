let numero1

numero1 = parseFloat(prompt("Digite um número"))

numero1 = Math.sqrt(numero1)

if (Number.isInteger(numero1)) {
    document.write(`A raiz quadrada desse número é ${numero1}, então é exata`)
}
else {
    document.write(`A raiz quadrada desse número é ${numero1}, então não é exata`)
}
