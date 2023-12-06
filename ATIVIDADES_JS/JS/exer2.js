function myFunction(){
    let x;
    let Nome=prompt("Digite seu nome:");
    let Email=prompt("Digite seu email:");
    if (Nome!=null){
        x="Nome: " + Nome;
  }
  let y;
    if (Email!=null){
        y="Email: " + Email;  
  }
    let para = document.createElement("li");
    let node = document.createTextNode(x + " " + y);
    para.appendChild(node);
    let element = document.getElementById("demo");
    element.appendChild(para);
}