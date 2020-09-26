window.addEventListener("load")

function gerarCor (){
  let red = document.querySelector("#red").value;
  let green = document.querySelector("#green").value;
  let blue = document.querySelector("#blue").value;

  let cor = "rgb("+red+","+green+","+blue+")"

  document.getElementById("code").style.color = cor;
  document.getElementById("code").innerHTML = cor;
  document.querySelector("#cor").style.background = cor;

 document.getElementById("txtRed").innerHTML = ("R: " + red);
 document.getElementById("txtGreen").innerHTML = ("G: " + green);
 document.getElementById("txtBlue").innerHTML = ("B: " + blue);

  setTimeout("gerarCor()",10)

}