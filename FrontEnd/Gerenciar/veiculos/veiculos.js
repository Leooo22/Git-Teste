// Lista inicial de carros
var carros = [
    { marca: "Volkswagen", modelo: "Fusca", ano: 1970, cor: "Azul", servico: "Troca de óleo", dataConclusao: "2024-02-15", funcionarioResponsavel: "João", concluido: false },
    { marca: "Honda", modelo: "Civic", ano: 2022, cor: "Prata", servico: "Revisão geral", dataConclusao: "2024-02-18", funcionarioResponsavel: "Maria", concluido: false },
    { marca: "Volkswagen", modelo: "Gol", ano: 2018, cor: "Preto", servico: "Alinhamento e balanceamento", dataConclusao: "2024-02-20", funcionarioResponsavel: "Pedro", concluido: false }
];

// Função para exibir a lista de carros na tabela
function exibirCarros() {
    var carrosLista = document.getElementById("carros-lista");

    // Limpar a lista antes de exibir os carros
    carrosLista.innerHTML = "";

    // Iterar sobre a lista de carros e criar elementos para exibição
    carros.forEach(function(carro, index) {
        var newRow = carrosLista.insertRow();
        newRow.insertCell(0).textContent = carro.marca;
        newRow.insertCell(1).textContent = carro.modelo;
        newRow.insertCell(2).textContent = carro.ano;
        newRow.insertCell(3).textContent = carro.cor;
        newRow.insertCell(4).textContent = carro.servico;
        newRow.insertCell(5).textContent = carro.dataConclusao;
        newRow.insertCell(6).textContent = carro.funcionarioResponsavel;
        
        // Adiciona botão "Concluir Manutenção" para cada veículo
        var actionCell = newRow.insertCell(7);
        var concluidoButton = document.createElement("button");
        concluidoButton.textContent = "Concluir Manutenção";
        concluidoButton.addEventListener("click", function() {
            confirmarConclusao(index);
        });
        actionCell.appendChild(concluidoButton);
    });
}

// Função para confirmar a conclusão da manutenção
function confirmarConclusao(index) {
    var confirmacao = confirm("A manutenção do veículo foi concluída?");
    if (confirmacao) {
        carros[index].concluido = true;
        exibirCarros(); // Atualiza a tabela após a confirmação
    }
}

// Função para adicionar um novo carro
function adicionarCarro() {
    var marca = prompt("Digite a marca do novo carro:");
    var modelo = prompt("Digite o modelo do novo carro:");
    var ano = prompt("Digite o ano do novo carro:");
    var cor = prompt("Digite a cor do novo carro:");
    var servico = prompt("Digite o serviço a ser feito:");
    var dataConclusao = prompt("Digite a data de conclusão (YYYY-MM-DD):");
    var funcionarioResponsavel = prompt("Digite o funcionário responsável:");

    // Adicionar o novo carro à lista
    carros.push({ marca: marca, modelo: modelo, ano: ano, cor: cor, servico: servico, dataConclusao: dataConclusao, funcionarioResponsavel: funcionarioResponsavel, concluido: false });

    // Exibir a lista atualizada
    exibirCarros();
}

// Função para voltar à tela inicial
function goback () {
    window.history.back ();
}

 
// Exibir a lista inicial de carros ao carregar a página
document.addEventListener("DOMContentLoaded", exibirCarros);
