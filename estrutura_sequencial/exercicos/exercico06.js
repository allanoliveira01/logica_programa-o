let notaB, notaA, notaC

notaA = parseFloat(prompt("Digite a primeira nota A"))
notaB = parseFloat(prompt("Digite a segunda nota B"))


document.write(`O valor de notaA é ${notaA}<br>`)
document.write(`O valor de notaB é ${notaB}<br>`)

notaC = notaA
notaA = notaB
notaB = notaC


document.write(`O valor de notaA = ${notaA}<br>`)
document.write(`O valor de notaB = ${notaB}<br>`)
