let numero, contadora = 0

do {
    numero = parseInt(prompt("Digite um numero para saber se é primo"))

    if (numero === 0 || isNaN(numero)) {
        alert("Por favor, digite um numero positivo mairo que 0")
    }
} while (numero === 0 || isNaN(numero));
console.log("Numero digitado " + numero)
for (let i = 1; i <= numero; i++) {

    if (numero % i === 0) {
        contadora++
    }
}

if (contadora == 2) {
    document.write(`<h2> O numero ${numero} é um numero primo <2>`)

} else {
    document.write(`<h2> O numero ${numero} não é um numero primo <2>`)
}
