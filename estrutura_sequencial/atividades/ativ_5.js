let num_op, sexo_op, pecas_op, salario_op, salario_op_maior, num_op_maior
const salarioMinino = 1000
let total_folha = 0
let total_pecas = 0
let media_m = 0, media_f = 0
let contar_m = 0
let contar_f = 0


for (let i = 1; 1 <= 3; i++) {

    do {
        num_op = parseInt(prompt("Digite o código do operário"))
        if (num_op <= 0 || isNaN(num_op)) {
            alert("Código invalido")

        }

    } while (num_op <= 0 || isNaN(num_op));

    do {
        sexo_op = prompt("Digite: \n M - masculino \n F - Feminino ").toUpperCase()
        if (sexo_op != "M" && sexo_op != "F") {
            alert("Sexo biologico Invalido")

        }

    } while (sexo_op != "M" && sexo_op != "F");


    do {
        pecas_op = parseInt(prompt(`Digite a quantidade de peças do operário ${num_o}`))
        if (pecas_op <= 0 || isNaN(pecas_op)) {
            alert("Código invalido")

        }

    } while (pecas_op <= 0 || isNaN(pecas_op));


    if (pecas_op <= 20) {
        salario_op = salarioMinino
    } else if (pecas_op > 20 && pecas_op <= 30) {
        salario_op = salarioMinino + (pecas_op - 20) * (3 / 100) * salarioMinino
    } else if (pecas_op > 30) {
        salario_op = salarioMinino + (pecas_op - 30) * (5 / 100) * salarioMinino + ((pecas_op - 20) * (3 / 100) * salarioMinino)
    }
    document.write(`<h3> O operário do código ${num_op} - ${sexo_op} recebe o sálario de R$ ${salario_op.toFixed} </h3>}`)
    total = total_folha + salario_op
    total_pecas = total_pecas + pecas_op

    if (sexo_op === 'M') {
        media_m = media_m + pecas_op
        contar_m++

    } else if (sexo_op === 'F') {
        media_m = media_f + pecas_op
        contar_f++

    }

    if (i === 1) {
        salario_op_maior = salario_op
        num_op_maior = num_op
    } else {

        if (salario_op > salario_op_maior) {
            salario_op_maior = salario_op
            num_op_maior = num_op


        }
    }
}

document.write(`O total da folha de pagamento da fábrica é de: ${total_folha.toFixed} <br>`)
document.write(`O total da peças por mÊs: ${total_pecas} <br>`)


if (media_f === 0) {
    document.write(`Nenhuema peça foi feita pelo sexo feminino <br>`)
} else {
    media_f = media_f / contar_f
    document.write(`A media de peças fabricas pelo sexo feminino ${media_f} <br>`)
}

if (media_m === 0) {
    document.write(`Nenhuema peça foi feita pelo sexo masculino <br>`)
} else {
    media_m = media_m / contar_f
    document.write(`A media de peças fabricas pelo sexo masculino ${media_m} <br>`)
}

document.write(`O número do operário com o maior salário é: ${num_op_maior}`)
