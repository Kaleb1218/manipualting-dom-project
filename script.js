
let imgButt = document.getElementById("img-button");
let pbutt = document.getElementById("p-button");
let divp = document.getElementById("p-div");
let divI=document.getElementById("img-div")

function Onclick() {
    divp.style.display="block"
    divI.style.display="none"
    let newPara = document.createElement("p");
    newPara.textContent = "Hot chocalate is bad today";
    newPara.style.color="red"
    newPara.style.backgroundColor="black"
    divp.appendChild(newPara);
}
function Onclick2(){
    divp.style.display="none"
    divI.style.display="block"
    let newImg = document.createElement("img")
    newImg.src="Poke.png"
    divI.appendChild(newImg)
}
pbutt.onclick = Onclick;
imgButt.onclick=Onclick2;



