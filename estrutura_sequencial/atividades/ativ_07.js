let fatorial, e = 1, numero

numero = Number(prompt("Digite um número"))

for (let i = 1; i <= numero; i++) {

    fatorial = 1

    for (var j = 1; j <= i; j++) {
        fatorial = fatorial * j
      
    }
    document.write(`Valor final de E = ${fatorial} <br>`)
    e = e + 1 / fatorial
}
document.write(`Valor final de E = ${e.toFixed(2)}`)
































// //  function calcularE(N) {
//     // let E = 1.0;  // Inicializa E com 1
//     let fatorial = 1;  // Inicializa o fatorial com 1

//     // Loop que itera de 1 até N
//     for (let i = 1; i <= N; i++) {
//         fatorial *= i;  // Calcula i! (fatorial)
//         E += 1 / fatorial;  // Adiciona 1/i! a E
//     }

//     return E;  // Retorna o valor calculado de E
// }

// // Função para solicitar entrada do usuário e exibir o resultado
// function main() {
//     const N = parseInt(prompt("Digite um valor inteiro positivo para N: "), 10); // Lê N

//     // Verifica se N é positivo
//     if (N > 0) {
//         const resultado = calcularE(N);  // Chama a função de cálculo
//         alert(`O valor de E para N=${N} é: ${resultado}`);  // Exibe o resultado
//     } else {
//         alert("Por favor, insira um número inteiro positivo.");  // Mensagem de erro
//     }
// }

// // Chama a função principal
// main();