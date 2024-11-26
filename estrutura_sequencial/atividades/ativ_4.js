let qtdNumero, numeroEscolhido, fatorial = 1


do {
    qtdNumero = parseInt(prompt("Quantos números você quer saber o fatorial?"))
    if (qtdNumero <= 0 || isNaN(qtdNumero)) {
        alert("Número invalido")

    }

} while (qtdNumero <= 0 || isNaN(qtdNumero));


//Essa estrura vai executar a quantidade de vezes que o usúario escolher
for (let i = 1; i <= qtdNumero; i++) {

    do {
        numeroEscolhido = parseInt(prompt("Quantos números você quer saber o fatorial?"))
    } while (numeroEscolhido <= 0 || isNaN(numeroEscolhido)) {
        alert("Número invalido")
    }
    while (numeroEscolhido <= 0 || isNaN(numeroEscolhido));

    fatorial = 1

    for (let j = 1; j <= numeroEscolhido; j++) {
        fatorial = fatorial * j

        //document.write(`${numeroEscolhido} X ${J} = ${numeroEscolhido * j} <br>`)
        // document.write(`<p>${fatorial} </p>`)
    }
    document.write(`<p>O fatorial de ${numeroEscolhido} é ${fatorial}<p>`)
}
//FIM da estrura vai executar a quantidade de vezes que o usúario escolher 