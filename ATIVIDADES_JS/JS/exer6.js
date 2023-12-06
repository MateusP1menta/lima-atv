document.getElementById("nMostrar").addEventListener ("click", function() {
    let nome = document.getElementById("Nome").value.toUpperCase();
    let vetor = nome.split(' ');
    let n =  vetor[0];
    let nm = vetor[1];
    let s = vetor[2];

    let s2 = nm.charAt(0);
    let s3 = n.charAt(0);

    document.getElementById("nome").textContent = "Citação Bibliográfica: " 
    + s + ", " + s2 + ". " + s3 + ".";   
})