document.getElementById("sMostrar").addEventListener ("click", function() {
    let senha = document.getElementById("se").value;
    let erro = [];//é um vetor
    if (senha == null) {//match retorna uma correspondência entre uma string com uma expressão regular
        erro.push('por favor insira a senha');
    }
    if(senha.length < 8 || senha.length > 15){//lenght apresenta o tamanho da variavel
        erro.push('por favor a senha deve possuir entre 8 a 15 caracteres');
    }
    if (!senha.match(/[a-z]/g)) {
        erro.push('por favor a senha deve ter letras minusculas');
    }
    if (!senha.match(/[A-Z]/g) || senha.match(/[A-Z]/g).length == 1) {
        erro.push('por favor a senha deve ter letras maiusculas');
    }
    if (!senha.match(/[\W|_]/g)) {
        erro.push("por favor a senha deve possuir símbolos (no mínimo, 1)");
    }
    if(erro.length == 0) {
        document.getElementById("senhh").textContent = "Senha Válida";
    }else {
        document.getElementById("senhh").textContent = "A senha está indefinida " + erro.join(", ");//join serve para dicionar uma virgula(nesse caso), a cada frase(a frase que esta armazenada no push do erro nesse caso)
    }
    
})