/*
var pessoas = ["Maria", " José", " Carlos", " Ana"];
var objetos = ["Colher", " Garfo"];
var frutas = ["Uva", " Maça", " Abacaxi"];
pessoas[0];
pessoas.length;
objetos[objetos.length = " Faca";
frutas.indexOf("Uva");

document.write(pessoas + "<br>" + pessoas.length + "<br>");
document.write(objetos + "<br>");
document.write(frutas + "<br>");

var carros = ["lambo", " bmw", " ferrari", " fiat", " chevrolet", " mercedes", " mcLaren"];
carros[0];
carros.length;
carros[carros.length] = " porsche";
carros.indexOf("lambo");
document.write("<br>" + carros + "<br>Posição do elemento inicial: " + carros.indexOf("lambo")
+ "<br>Carros na lista: " + carros.length + "<br>" + "<br>Primeiro carro da lista: " + carros[0] + "<br>");
*/
/*
var d = new Date("October 13, 2014 11:13:00");
document.getElementById("D1").innerHTML = d;

d = new Date(0);
document.getElementById("D2").innerHTML = d;

var d = new Date(99,5,24,11,33,30,0);
document.getElementById("D3").innerHTML = d;

var d = new Date(2014, 7, 20);
document.getElementById("D4").innerHTML = d;

d = new Date();
d.toUTCString();

d.toDateString();

d.toLocaleDateString();

d.toLocaleTimeString();

document.write("<br>" + d.toUTCString());
document.write("<br>" + d.toDateString());
document.write("<br>" + d.toLocaleDateString());
document.write("<br>" + d.toLocaleTimeString());
*/
/*
var hoje, prazo;
hoje = new Date();
prazo = new Date();

prazo.setFullYear(2023, 10, 28);
var dia = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
document.write("<p>Hoje é: " + dia[hoje.getDay()] + ", " + hoje.getDate() + 
"/" + (hoje.getUTCMonth()) + "/" + hoje.getFullYear() + "</p>");

document.write("<p>O prazo é: " + dia[prazo.getDay()] + ", " + 
prazo.getDate() + "/" + (prazo.getMonth() + 1) + "/" + prazo.getFullYear() + "</p>");
*/
/*
try{
    var x;

    if(x == "") throw "vazio";
    if(isNaN(x)) throw "não é um número";
    if(x == 10) throw x;
    console.log(x);
    document.write(x);

}catch(err){
    console.log("imput is " + err);
    document.write("imput is " + err);
}

try{
    adddalert ("ERRO!!!");
}
catch(err){
    document.write = err.message;
}
*/
/*
var dividendo = 10;
var divisor = 0;

try{
    if(divisor == 0){
        throw new
        Error("Erro: Divisão por zero não é permitida");
    }
    var resultado = dividendo/divisor;
    console.log("Resultado: ", resultado);
}catch(err){
    console.log(err.message);
}
*/
/*
function myFunction(){
    var message, x;
    message = document.getElementById("message");
    message.innerHTML = "";
    x = document.getElementById("demo").value;
    try{
        if(x == "") throw "empty";
        if(isNaN(x)) throw "not a number";
        x = Number(x);
        if(x <5) throw "too low";
        if(x > 10) throw "too high";
    }
    catch(err){
        message.innerHTML = "Imput is " + err;
    }
}
try {
    adddlert("ERRO!!!");
}catch(err){
    document.write("<br>" +err.message);
}finally{
    document.write("<br>Será mostrado mesmo com o Erro");
}
function blurFunction(){
    document.getElementById("myInput").style.background="red";
}

function myFunction(val){
    alert("mudou para " + val);
}

function loadFunction(){
    alert("Pagina carregada!!!");
}
*/
/*
function mouseDown(){
    document.getElementById("myP").style.color = "red";
}

function mouseUp(){
    document.getElementById("myP").style.color = "green";
}
*//*
function coordenadasFigura(e){
    var x = e.clientX;
    var y = e.clientY;
    var coor = "Coordenadas: (" + x + ", " + y + ")";
    document.getElementById("demo3").innerHTML = coor;
}

function clearCoor(){
    document.getElementById("demo3").innerHTML = "";
}*/

