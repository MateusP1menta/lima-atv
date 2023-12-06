function limpa_form(){
    document.getElementByID('rua').value=("");
    document.getElementById('bairro').value=("");
    document.getElementById('cidade').value=("");
    document.getElementById('uf').value=("");
}
function atualiza_campos(conteudo){
    if(!("erro" in conteudo)){
    document.getElementByID('rua').value=(conteudo.logradouro);
    document.getElementById('bairro').value=(conteudo.bairro);
    document.getElementById('cidade').value=(conteudo.localidade);
    document.getElementById('uf').value=(conteudo.uf);
    }else{
        limpa_form();
        alert("cep nao foi encontrado!");
    }
}
function pesquisacep(valor){
    //variavel recebe apenas valores decimais (inteiros)
    var cep = valor.replace(/\D/g,''); //permite substituir valores em uma string com base em padrões específicos
    //condicao de validacao
    if(cep != ""){
        var validacep = /^[0-9]{8}$/;
        if(validacep.test(cep)){ //executa uma busca por uma correspondência entre uma expressão regular e uma string
            document.getElementById('rua').value="carregando";
            document.getElementById('bairro').value="carregando";
            document.getElementById('cidade').value="carregando";
            document.getElementById('cidade').value="carregando";
            document.getElementById('uf').value="carregando";

            var elemento = document.createElement('script');
            elemento.src = 'https://viacep.com.br/ws/' + cep + '/json/?callback=atualiza_campos';
            //insere o script no documento e carrega o seu conteudo
            document.body.appendChild(elemento);
    }
    else{
        limpa_form();
        alert("formato de cep invalido!");
    
    }
}else{
        limpa_form();
    }
}