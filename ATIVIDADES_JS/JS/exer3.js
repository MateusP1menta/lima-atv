
function mostrar(){
    let x = document.getElementById("med").value;
    let y = document.getElementById("pre").value;
    let promocao = (y*2) - (y*2*0.10);
    document.getElementById("medicamento").textContent = "Promoção de" + " " + x;
    document.getElementById("promo").textContent = "leve 2 por apenas: " + promocao; 
}