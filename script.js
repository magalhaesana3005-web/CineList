botaoSalvar.addEventListener("click", function() {
    const titulo = campoTitulo.value;
    const ano = campoAno.value;

    const linha = document.createElement("tr");

    linha.innerHTML = `
        <td>${titulo}</td>
        <td>${campoCategoria.value}</td>
        <td>${ano}</td>
        <td><button>Ver</button> <button>Excluir</button></td>
    `;

    listaFilmes.appendChild(linha);

    campoTitulo.value = "";
    campoAno.value = "";
});