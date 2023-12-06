document.getElementById("nMostrar").addEventListener ("click", function() {
    let nome = document.getElementById("nAluno").value;
    let n1 = parseFloat(document.getElementById("n1").value);
    let n2 = parseFloat(document.getElementById("n2").value);
    media =  (n1 + n2)/2 ;
console.log(media)
    if (media >= 7){
        document.getElementById("Info").innerHTML = ("Nome do aluno(a): " + nome + "<br>"
        + "Média: " + media + "<br>" + "Aluno(a) aprovado!!!")}
        else if ( media >= 5 && media < 7){
            document.getElementById("Info").innerHTML  = ("Nome do aluno(a): " + nome + "<br> "
            + "Média: " + media + "<br>" + "Aluno(a) está de recuperação ")
        }    
        else if (media < 7){
        document.getElementById("Info").innerHTML  = ("Nome do aluno(a): " + nome + "<br> "
        + "Média: " + media + "<br>" + "Aluno(a) reprovado!!")
        }
})
function obterListaAlunos(){
    return JSON.parse(localStorage.getItem('alunos')) || []; //o SON esta pegando o que contem no 'produtos' para converter em Strings, ele faz o processo de converção 
}
function salvarListaAlunos(lista){
    localStorage.setItem('alunos',    JSON.stringify(lista));//transformou em string
}
let listaAlunos = obterListaAlunos();

function adicionaAluno(){
    const nome = document.getElementById("nAluno").value;
    if(nome && media){
        listaAlunos.push({nome, media});
        salvarListaAlunos(listaAlunos);
        atualizarListaAlunos();
        limparCampos();
    }
}
function atualizarListaAlunos(){
    const lista = document.getElementById("lista-alunos");
    lista.innerHTML = '';
    
    listaAlunos.forEach((alunos,index) =>{
    const li = document.createElement('li');
    li.textContent = `${alunos.nome} - R$ ${alunos.media}`;


})
}