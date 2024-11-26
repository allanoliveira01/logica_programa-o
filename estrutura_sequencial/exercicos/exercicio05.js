let nota1, nota2, nota3 
let mediaA 


nota1 = parseFloat(prompt("Digite a primeira nota"))
nota2 = parseFloat(prompt("Digite a segunda nota"))
nota3 = parseFloat(prompt("Digite a terceira nota"))

mediaA = (nota1 + nota2 +  nota3) / 3

document.write(`A media das notas é ${mediaA.toFixed (2)}`);

