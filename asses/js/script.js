//Vidas *10 (Mejorado - Testear)
let idCon = document.getElementById("idVidas");
for (let i = 0; i < 11; i++){
vida(idCon);
}

//Eliminar hijo (se puede mejorar.)
function eliminarVida() {
  var idCon = document.getElementById("idVidas");
  
  if (idCon.hasChildNodes()) {
    idCon.removeChild(idCon.childNodes[1]);
    //console.log("Has perido 1 vida"); //log de consulta.
    reiniciarRacha();
  }
}
//Eliminar todos los hijos
function removeAllNodes(c) {
    while (c.firstChild) {
        c.removeChild(c.firstChild);
    }
}
//Eliminar rachas (se puede mejorar.)
function reiniciarRacha() {
  var idCon = document.getElementById("idRachas");
  if (idCon.childElementCount  > 0) {
     removeAllNodes(idCon);
     console.log("Se reinicio la racha");
 }
}

//Crear una vida adicional
if ( idCon.childElementCount > 0){
  idCon.removeChild(idCon.lastChild)
}

function juegoNuevo() {
  alert("Has reiniciado la partida.");
  location.reload();
}

const cards = document.querySelectorAll('.cartas');

let tVoltear = false;
let bBloquear = false;
let pCarta, sCarta;

function flipCard() {
  if (bBloquear) return;
  if (this === pCarta) return;

  this.classList.add('flip');

  if (!tVoltear) {
    tVoltear = true;
    pCarta = this;

    return;
  }
  sCarta = this;

  Chequear();
}

function Chequear() {
  let sIguales = pCarta.dataset.framework === sCarta.dataset.framework;
  sIguales ? dsCartas() : abCartas();
 
}

var numeroPuntos = 0
function dsCartas() {

//Rachas (Cambiar esto por puntos)
var idCon = document.getElementById("idRachas");
racha(idCon);
    //console.log("Conseguiste +1 racha");

var idCon = document.getElementById("idPuntos");
punto(idCon);
this.numeroPuntos++;

if(numeroVidas == 8) {
  alert("No tienes mas vida");
  location.reload();
}else {

 }

 pCarta.removeEventListener('click', flipCard);
  sCarta.removeEventListener('click', flipCard);

  resetBoard();
}

var numeroVidas = 0
function abCartas() {
  bBloquear = true;

  setTimeout(() => {
    pCarta.classList.remove('flip');
    sCarta.classList.remove('flip');

    resetBoard(); 
  }, 700);

  // Cantidad de vidas perdidas
    var idCon = document.getElementById("idMuertes");
    muertes(idCon);
    this.numeroVidas++;

    if(numeroVidas == 10) {
      alert("No tienes mas vida \nEl juego se reiniciara");
      location.reload();
    }else {
      eliminarVida(); 
      //reiniciarRacha(); 
     }
}

function resetBoard() {
  [tVoltear, bBloquear] = [false, false];
  [pCarta, sCarta] = [null, null];

}

(function shuffle() {
  cards.forEach(card => {
    let randomPos = Math.floor(Math.random() * 12);
    card.style.order = randomPos;

  });
})();

cards.forEach(card => card.addEventListener('click', flipCard));

// Rachas
function racha(idCon){

  var divPrincipal = document.createElement("div");
  var classPrincipal = document.createElement("class");
  classPrincipal.value = "justify-content-center";

  var img = document.createElement("img");
  img.src = "asses/img/parciales/1/rachas/r1.png";
  
  divPrincipal.appendChild(img);
  idCon.appendChild(divPrincipal);

}

// Muertes
function muertes(idCon){

  var idCon = document.getElementById("idMuertes");
  var divPrincipal = document.createElement("div");
  var classPrincipal = document.createElement("class");
  classPrincipal.value = "justify-content-center";

  var img = document.createElement("img");
  img.src = "asses/img/parciales/1/muerrte.png";

  divPrincipal.appendChild(img);
  idCon.appendChild(divPrincipal);

}

// Vidas
function vida(idCon){

  var idCon = document.getElementById("idVidas");
  var divPrincipal = document.createElement("div");
  var classPrincipal = document.createElement("class");
  classPrincipal.value = "justify-content-center";

  var img = document.createElement("img");
  img.src = "asses/img/parciales/1/vida.png";

  divPrincipal.appendChild(img);
  idCon.appendChild(divPrincipal);

}

// Puntos
function punto(idCon){

  var idCon = document.getElementById("idPuntos");
  var divPrincipal = document.createElement("div");
  var classPrincipal = document.createElement("class");
  classPrincipal.value = "justify-content-center";

  var img = document.createElement("img");
  img.src = "asses/img/parciales/1/puntos.png";
  
  divPrincipal.appendChild(img);
  idCon.appendChild(divPrincipal);

}
