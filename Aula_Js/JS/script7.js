document.getElementById("btMostrar").addEventListener ("click", function() {
    let inMedicamento = document.getElementById("inMedicamento").value;
    let inPreco = document.getElementById("inPreco").value;
    if(isNaN(inPreco)){
        alert('Digite um numero por favor não entre com letras');
        return;
    }
    let promocao = (inPreco*2) - (inPreco*2*0.10);
    document.getElementById("outMedicamento").textContent = "Promoção do medicamento" + inMedicamento;
    document.getElementById("outPromocao").textContent = "leve 2 por apenas" + promocao.toFixed(2);
})