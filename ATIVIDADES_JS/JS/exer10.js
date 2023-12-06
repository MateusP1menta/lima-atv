function mostrarT(){
    let numero = parseInt(document.getElementById("num").value);
    let con = document.getElementById("con");
    let tab = ''; //vai receber o texto da tabuada
    if(numero <= 10){
        for(let count=1; count<=10 ; count++){
            tab += numero + " x " + count + "=" + numero*count + "<br>" ; //vamos sempre incrementar texto a nossa string tabuada: tabuada += nova_string
            con.innerHTML = tab;
        }
    }else{
        alert('Insira um número menor que dez ou igual!!!');
    }
    

    
}
    
