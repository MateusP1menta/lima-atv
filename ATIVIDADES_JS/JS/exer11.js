
function bot(){
    let num = parseFloat(document.getElementById("num").value);
    let res = document.getElementById("res");
    let mon = '';
    if(num < 10000 ){
        for(let count=1; count<=10 ; count++){
            mon += count + "x de R$: " + (num/count).toFixed(2) + "<br>";
            res.innerHTML = mon;
        }
    }else{
        alert('Insira um número menor que 10000!!!');
    }
}