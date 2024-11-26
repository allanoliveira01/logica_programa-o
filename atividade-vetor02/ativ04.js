let funcionarios = [
    { nome: "", salario: 0, tempoServico: 0 },
    { nome: "", salario: 0, tempoServico: 0 },
    { nome: "", salario: 0, tempoServico: 0 }
];

for (let i = 0; i < 3; i++) {
    funcionarios[i].nome = prompt("Digite o nome do funcionário " + (i + 1) + ":");
    funcionarios[i].salario = parseFloat(prompt("Digite o salário de " + funcionarios[i].nome + ":"));
    funcionarios[i].tempoServico = parseInt(prompt("Digite o tempo de serviço (em anos) de " + funcionarios[i].nome + ":"));
}


for (let i = 0; i < funcionarios.length; i++) {
    let funcionario = funcionarios[i];
    if (funcionario.tempoServico > 5 && funcionario.salario < 400) {
        let aumento = funcionario.salario * 0.35;
        let novoSalario = funcionario.salario + aumento;
        console.log(funcionario.nome + " receberá um aumento de 35%. Novo salário: R$ " + novoSalario.toFixed(2));
    } else if (funcionario.tempoServico > 5) {
        let aumento = funcionario.salario * 0.25;
        let novoSalario = funcionario.salario + aumento;
        console.log(funcionario.nome + " receberá um aumento de 25%. Novo salário: R$ " + novoSalario.toFixed(2));
    } else if (funcionario.salario < 400) {
        let aumento = funcionario.salario * 0.25;
        let novoSalario = funcionario.salario + aumento;
        console.log(funcionario.nome + " receberá um aumento de 25%. Novo salário: R$ " + novoSalario.toFixed(2));
    } else {
        console.log(funcionario.nome + " não receberá aumento.");
    }
}
