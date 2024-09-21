// Lista inicial de funcionários
var funcionarios = [
    { nome: "João", cargo: "Mecânico" },
    { nome: "Maria", cargo: "Eletricista" },
    { nome: "Pedro", cargo: "Pintor" }
];

// Função para exibir a lista de funcionários
function exibirFuncionarios() {
    var funcionariosLista = document.getElementById("funcionarios-lista");

    // Limpar a lista antes de exibir os funcionários
    funcionariosLista.innerHTML = "";

    // Iterar sobre a lista de funcionários e criar elementos para exibição
    funcionarios.forEach(function(funcionario) {
        var novoFuncionario = document.createElement("div");
        novoFuncionario.innerHTML = "<strong>Nome:</strong> " + funcionario.nome + ", <strong>Cargo:</strong> " + funcionario.cargo;
        funcionariosLista.appendChild(novoFuncionario);
    });
}

// Função para adicionar um novo funcionário
function adicionarFuncionario() {
    var nome = prompt("Digite o nome do novo funcionário:");
    var cargo = prompt("Digite o cargo do novo funcionário:");

    // Adicionar o novo funcionário à lista
    funcionarios.push({ nome: nome, cargo: cargo });

    // Exibir a lista atualizada
    exibirFuncionarios();
}

// Exibir a lista inicial de funcionários ao carregar a página
document.addEventListener("DOMContentLoaded", exibirFuncionarios);

// Botão de Voltar
function goback() {
    window.history.back();
}