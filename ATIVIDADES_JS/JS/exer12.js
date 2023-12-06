function traacos(){
    let nomea = document.getElementById("nome").value;
    let palavras = nomea.split(' ');//separar as palavras
    let linha = "";
    for(let i= 0; i < palavras.length; i++){
        let letras = palavras[i].split('');
        let letrass = letras.length;
        linha = linha + " " + "-".repeat(letrass);        
    }
    console.log(linha);
    document.getElementById("nomei").textContent = nomea;
    document.getElementById("linhas").textContent = linha;
    cAtleta();
}

function cAtleta(){
    let idade = parseInt(document.getElementById("idade").value);
    if(idade <= 12){
        document.getElementById("ida").textContent = "Categoria: Infantil";
    }if(idade >=13 && idade <= 18){
        document.getElementById("ida").textContent = "Categoria: Juvenil";
    }if(idade >= 18){
        document.getElementById("ida").textContent = "Categoria: Adulto";
    }
}