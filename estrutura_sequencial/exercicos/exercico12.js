let valorProduto, valorFinal, porcentagem, valor2

valorProduto = parseFloat(prompt("Digite o valor do produto"))
porcentagem = parseFloat(prompt("Digite o valor da porcentagem"))

porcentagem = porcentagem / 100
valorFinal = porcentagem * valorProduto
valor2 = valorProduto + valorFinal


document.write(`O valor com a porcentage é de  ${valor2.toFixed(2)}`)
