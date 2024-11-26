let qtdChichilas, tempoCriacao
let totalChichilas = 0

do {
    qtdChichilas = parseInt(prompt("Digite a quantidade de chichilas"))


    if (qtdChichilas <= 2 || isNaN(qtdChichilas)) {
        alert(`Por favor, digite um numero posivo e maior ou igual a 2`)
    }
} while (qtdChichilas <= 2 || isNaN(qtdChichilas));

do {
    tempoCriacao = parseInt(prompt("Digite por quanto tempo que criar as chichilas"))


    if (tempoCriacao <= 1 || isNaN(tempoCriacao)) {
        alert(`O tempo de criação deve ser maior que 1 ano`)
    }

} while (tempoCriacao <= 1 || isNaN(tempoCriacao));

// 
totalChichilas = qtdChichilas
for (let i = 2; i <= tempoCriacao; i++) {
     totalChichilas = totalChichilas * 3 
    document.write("Total de chichilas: " + totalChichilas + "<br>")
}
document.write(totalChichilas);