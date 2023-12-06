document.getElementById("btMostrar").addEventListener ("click", function() {
    let vSaque = document.getElementById("vSaque").value;
    if(vSaque == "" || vSaque == null){
        alert('por favor insira o valor do saque!');
        return;
    }else if(vSaque >= 15000){
        alert('valor máximo atingido!!!');
        document.write = err.message;
    }
    
    let nota100 = 0;
    let nota50 = 0;
    let nota10 = 0;
    do{
    if(vSaque%100 == 0){
        nota100 = nota100 + 1;
        vSaque = vSaque -100;
    }else if(vSaque%50 == 0){
        nota50 = nota50 + 1 ;
        vSaque = vSaque -50 ;
    }else if(vSaque%10 == 0){
        nota10 = nota10 + 1;
        vSaque = vSaque -10;
    }
}
while(vSaque !=  0);

    document.getElementById("nota100").textContent = "Notas de R$ 100: " + nota100;
    document.getElementById("nota50").textContent = "Notas de R$ 50: " + nota50;
    document.getElementById("nota10").textContent = "Notas de R$ 10: " + nota10;
     
})
