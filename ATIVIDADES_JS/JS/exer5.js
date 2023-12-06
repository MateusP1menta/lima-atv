document.getElementById("piMostrar").addEventListener ("click", function() {
    let valor = document.getElementById("valor").value;

    if(valor%2 == 0){
        document.getElementById("Resposta").textContent = "Resposta: " + valor + " é par"; 
    }else if(valor%2 > 0){
        document.getElementById("Resposta").textContent = "Resposta: " + valor + " é ímpar"; 
    }

      
})