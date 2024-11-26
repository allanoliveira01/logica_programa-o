let gabarito = [];
let notas = [];
let alunosAprovados = 0;

for (let i = 0; i < 10; i++) {
    gabarito[i] = prompt(`Digite a resposta correta para a questão ${i + 1}:`);
}

for (let aluno = 1; aluno <= 10; aluno++) {
    let acertos = 0;  

    for (let i = 0; i < 10; i++) {
        let respostaAluno = prompt(`Aluno ${aluno}, digite a resposta para a questão ${i + 1}:`);

        if (respostaAluno === gabarito[i]) {
            acertos++;
        }
    }

    notas[aluno - 1] = acertos;
    alert(`Aluno ${aluno} acertou ${acertos} questões.`);

    if (acertos >= 6) {
        alunosAprovados++;
    }
}

let percentualAprovados = (alunosAprovados / 10) * 100;
alert(`Percentual de alunos aprovados: ${percentualAprovados}%`);

