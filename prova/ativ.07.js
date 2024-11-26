let gabarito = [];  // Array para armazenar as respostas corretas
let notas = [];  // Array para armazenar as notas dos alunos (número de acertos)
let alunosAprovados = 0;  // Variável para contar o número de alunos aprovados

// Coleta as respostas corretas para as 10 questões
for (let i = 0; i < 10; i++) {
    gabarito[i] = prompt(`Digite a resposta correta para a questão ${i + 1}:`);  // Preenche o gabarito
}

for (let aluno = 1; aluno <= 10; aluno++) {  // Loop para percorrer os 10 alunos
    let acertos = 0;  // Zera a contagem de acertos para cada aluno

    // Coleta as respostas de cada aluno e compara com o gabarito
    for (let i = 0; i < 10; i++) {  // Loop para percorrer as 10 questões
        let respostaAluno = prompt(`Aluno ${aluno}, digite a resposta para a questão ${i + 1}:`);  // Resposta do aluno

        if (respostaAluno === gabarito[i]) {  // Compara a resposta do aluno com a resposta correta
            acertos++;  // Se a resposta estiver certa, aumenta o contador de acertos
        }
    }

    notas[aluno - 1] = acertos;  // Armazena o número de acertos do aluno no array notas
    alert(`Aluno ${aluno} acertou ${acertos} questões.`);  // Exibe a quantidade de acertos para o aluno

    // Verifica se o aluno tem 6 ou mais acertos para ser considerado aprovado
    if (acertos >= 6) {
        alunosAprovados++;  // Aumenta a contagem de alunos aprovados
    }
}

// Calcula o percentual de alunos aprovados
let percentualAprovados = (alunosAprovados / 10) * 100;  // Divide o número de aprovados pelo total de alunos e multiplica por 100
alert(`Percentual de alunos aprovados: ${percentualAprovados}%`);  // Exibe o percentual de alunos aprovados
