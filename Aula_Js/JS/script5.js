/*
var titulo = document.getElementById("titulo"); //seleciona o elemento

var conteudo = titulo.textContent; //seleciona o conteudo texto do elemento

console.log(conteudo); //imprime "meu cabeçalho"
*/
/*
var x = document.getElementsByTagName("li");
document.getElementById("demo").innerHTML = x[1].innerHTML;
console.log("pegando" + x[1].innerHTML);
*/
/*
var elemento = document.getElementsByClassName("exemplo1");
elemento[0].innerHTML = "testando classe";
console.log("JS" + elemento[0].innerHTML);
*/
/*
var num = document.getElementsByName("cor").length;
document.getElementById("seletor").innerHTML = num;
console.log("JS numero =" + num);
*/
/*
var element=document.getElementById("cabecalho");
element.innerHTML="novo cabecalho";

document.getElementById("imagem").src="IMG/ava.jpg";
document.getElementById("p2").style.border="solid";
*/
/*
var txt=document.getElementById("intro").childNodes[0].textContent;
document.write(txt);
*/
/*
var x = document.getElementById("left");
var txt = "";
for (var i = 0; i < x.childNodes.length; i++){
    txt += "Nodo:" + x.childNodes[i].nodeName + "Valor: " + x.childNodes[i].nodeValue + "<br>";
}
alert(txt);
*/
/*
var para=document.createElement("p");
var node=document.createTextNode("esse é novo!");
para.appendChild(node);

var element=document.getElementById("left");
element.appendChild(para);
*/
/*
var para=document.createElement("p");
var node=document.createTextNode("esse é novo");
para.appendChild(node);

var element=document.getElementById("div1");
var child=document.getElementById("p1");
element.insertBefore(para, child);
*/
/*
alert('BUUUUUUUUUUUM!');
if(confirm('Alerta afirmado?')){
    alert('Positivo Central');
}
else
alert('Negativo central');
*/
/*
document.write(document.images.length);
*/
/*
function funcao(){
    alert("hello world");
}
*/
/*
function bemvindo(nome1, nome2){
    alert("Bemvindo" + nome1 + " e " + nome2);
}
*/
/*
function multiplicacao(a,b){
    return a*b;
}
document.getElementById("resposta").innerHTML = multiplicacao(4,3);
*/