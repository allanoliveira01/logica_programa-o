let total1, total2, deposito


deposito =parseFloat(prompt("Digite o valor que você depositar"))

total1 = deposito * 0.07
total2 = deposito + total1


document.write(`O valor que ira receber ${total2.toFixed(2)}`)  
