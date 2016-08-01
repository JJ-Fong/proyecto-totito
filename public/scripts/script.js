/*

turno = 1 : turno de X
turno = 2 : turno de O

*/

var turno = 1; 

var casillas = [0,0,0,0,0,0,0,0,0];

var casilla0 = document.getElementById("casilla-1"); 
var casilla1 = document.getElementById("casilla-2"); 
var casilla2 = document.getElementById("casilla-3"); 
var casilla3 = document.getElementById("casilla-4"); 
var casilla4 = document.getElementById("casilla-5"); 
var casilla5 = document.getElementById("casilla-6"); 
var casilla6 = document.getElementById("casilla-7"); 
var casilla7 = document.getElementById("casilla-8"); 
var casilla8 = document.getElementById("casilla-9");

casilla0.addEventListener("click",  function () {turn(0)});
casilla1.addEventListener("click",  function () {turn(1)});
casilla2.addEventListener("click",  function () {turn(2)});
casilla3.addEventListener("click",  function () {turn(3)});
casilla4.addEventListener("click",  function () {turn(4)});
casilla5.addEventListener("click",  function () {turn(5)});
casilla6.addEventListener("click",  function () {turn(6)});
casilla7.addEventListener("click",  function () {turn(7)});
casilla8.addEventListener("click",  function () {turn(8)});


function turn(casilla){
	var control = casillas[casilla];
	if (control === 0) { 
		casillas[casilla] = turno;  
		render();
		if (turno === 1) {
			turno = 2;
		} else {
			turno = 1; 
		}
		
	}
}

function render()  {
	console.log(turno);
	console.log(casillas);

	for (i =0; i < casillas.length; i++){
		var state = casillas[i];
		var element = "casilla-"+(i+1);
		var gencasilla = document.getElementById(element);
		if (state === 1) {
			gencasilla.innerHTML = "X";
		} else if (state === 2) { 
			gencasilla.innerHTML = "O";
		}
	}

	var msg = totito();
	console.log(msg);
}

function totito(){
	var fin = false; 
	var [x0,x1,x2,x3,x4,x5,x6,x7,x8] = casillas;
	var ganador = "";
	if (!fin) { fin = (x0 === x1)&&(x1 === x2)&&(x0>0)};
	if (!fin) { fin = (x3 === x4)&&(x4 === x5)&&(x3>0)};
	if (!fin) { fin = (x6 === x7)&&(x7 === x8)&&(x6>0)};
	if (!fin) { fin = (x0 === x3)&&(x3 === x6)&&(x0>0)};
	if (!fin) { fin = (x1 === x4)&&(x4 === x7)&&(x1>0)};
	if (!fin) { fin = (x2 === x5)&&(x5 === x8)&&(x2>0)};
	if (!fin) { fin = (x0 === x4)&&(x4 === x8)&&(x0>0)};
	if (!fin) { fin = (x2 === x4)&&(x4 === x6)&&(x2>0)};

	if (fin) {
		ganador = turno; 
		for (i = 0; i < casillas.length; i++) {
			if (casillas[i]===0){
				casillas[i] = 3;
			}
		}
		var mensaje = "<h1> EL GANADOR ES "+ganador+"</h1>";
		var msg = document.getElementById("msg");
		msg.innerHTML=mensaje;

		return "JUEGO TERMINADO, EL GANADOR ES "+ganador;

	} else {
		return "SIGUE";
	}
	
}
