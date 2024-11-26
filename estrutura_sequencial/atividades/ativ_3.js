let num, numeroPerfeito = 0 


do {
    num = parseInt(prompt("Digite um numreo para saber se ele é um numero perfeito"))

    if (num === 0 || isNaN(num)){
        alert("Digite um numero positivo e maior que 0")
    }
} while (num === 0 || isNaN(num));
debugger;
for (let i = 1; i < num; i++) {
    if (num % i === 0) {
        numeroPerfeito = numeroPerfeito + i
    }
}


if (num === numeroPerfeito) {
    document.write(`O numero ${num} é um numero perfeito`)
} else {
    document.write(`O numero ${num} não é um numero perfeito`)
}