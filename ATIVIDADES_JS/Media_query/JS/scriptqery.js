let num = document.getElementById("count").value;
num = 1; 
document.getElementById("count").innerHTML = 1;
function adc(){
    num += 1;
    document.getElementById("count").innerHTML = num;
}
function dim(){
    num -= 1;
    document.getElementById("count").innerHTML = num;
}