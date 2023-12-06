//array p guardar os dados
let ListaProdutos = [];
//funcao p add produtos
function adicionarProduto(){
    const nome = document.getElementById("nome_produto").value;
    const preco = parseFloat(document.getElementById("precop").value);
    if(nome && preco){
        ListaProdutos.push({nome , preco});
        atualizarListaProduto();
        limparCampos();
    }
}
//funcao atualizar
function atualizarListaProduto(){
    const lista = document.getElementById("lista-produtos");
    lista.innerHTML = "";
    ListaProdutos.forEach((produto, index) =>{
        const li = document.createElement("li");
        li.textContent = `${produto.nome} - R$ ${produto.preco.toFixed(2)}`;
        //add botao p edicao de valores
        const botaoEditar = document.createElement('button');
        botaoEditar.textContent = 'EditarDados';
        botaoEditar.onclick = () => preencherFormularioEditar(index);
        li.appendChild(botaoEditar);
        lista.appendChild(li);
    });
    atualizarListaExclusao();
}
//formulario editar
function preencherFormularioEditar(index){
    const produto = ListaProdutos[index];
    document.getElementById("editar-nome-produto").value = produto.nome;
    document.getElementById("editar-preco-produto").value = produto.preco;
}
//funcao atualizar
function atualizarListaExclusao(){
    const selectExcluir = document.getElementById("excluir-produto");
    selectExcluir.innerHTML = "";
    ListaProdutos.forEach((produto, index) => {
        const option = document.createElement('option');
        option.value = index;
        option.textContent = produto.nome;
        selectExcluir.appendChild(option);
    })
}
//atualizar Produto
function atualizarProduto(){
    const index = document.getElementById("excluir-produto").value;
    const nome = document.getElementById("editar-nome-produto").value;
    const preco = parseFloat(document.getElementById("editar-preco-produto").value);
    if(index != "" && nome && preco){
        ListaProdutos[index] = {nome, preco};
        atualizarListaProduto();
        limparFormularioEditar();
    }
}
//limpar campos
function limparCampos(){
    document.getElementById("nome_produto").value = "";
    document.getElementById("precop").value = "";
}
function limparFormularioEditar(){
    document.getElementById("editar-nome-produto").value = "";
    document.getElementById("editar-preco-produto").value = "";
}
function excluirProduto(){
    const index = document.getElementById("excluir-produto").value;
    if(index !== ""){
        ListaProdutos.splice(index,1);
        atualizarListaProduto();
    }
}
window.onload = function(){
    atualizarProduto();
}