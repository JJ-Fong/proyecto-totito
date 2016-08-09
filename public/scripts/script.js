var state = {
	board: [[0,0,0],[0,0,0],[0,0,0]],
	turn: 1
}

function render(state) {
	board = state.board; 
	var html = '<div class="totito">\n';

	for(i = 0; i < board.length	; i++){
		var row = board[i];
		html += '<div class="row-'+(i+1)+'">\n';
		for (j = 0; j < row.length; j++){
			html += '<div id="casilla-'+(i*3+j)+'" class="column-'+(j+1)+'">';
			var x = row[j];
			if (x === 1){
				html += 'X'
			} else if (x === 2){
				html += 'O'
			}
			html += '</div>\n';
		} 
		html += '</div>\n'
	} 
	html += '</div>\n'
	/*
	AGREGAR EL CODIGO DE GANADOR O EMPATE
	*/
	return html;
}

function addListeners(fin) {
	var casilla0 = document.getElementById("casilla-0");
	casilla0.addEventListener("click", function() {state = turn(state, 0)});

	var casilla1 = document.getElementById("casilla-1");
	casilla1.addEventListener("click", function() {state = turn(state, 1)});
	
	var casilla2 = document.getElementById("casilla-2");
	casilla2.addEventListener("click", function() {state = turn(state, 2)});

	var casilla3 = document.getElementById("casilla-3");
	casilla3.addEventListener("click", function() {state = turn(state, 3)});
	
	var casilla4 = document.getElementById("casilla-4");
	casilla4.addEventListener("click", function() {state = turn(state, 4)});
	
	var casilla5 = document.getElementById("casilla-5");
	casilla5.addEventListener("click", function() {state = turn(state, 5)});
	
	var casilla6 = document.getElementById("casilla-6");
	casilla6.addEventListener("click", function() {state = turn(state, 6)});
	
	var casilla7 = document.getElementById("casilla-7");
	casilla7.addEventListener("click", function() {state = turn(state, 7)});
	
	var casilla8 = document.getElementById("casilla-8");
	casilla8.addEventListener("click", function() {state = turn(state, 8)});

	if(fin) {
		var button = document.getElementById("button");
		button.addEventListener("click",function(){
			state.board = [[0,0,0],[0,0,0],[0,0,0]],
			state.turn = 1;
			console.log(state);
			var viewport = document.getElementById("viewport");
			viewport.innerHTML = render(state);
			addListeners();
		})
	}
}

function turn(state, selected){
	console.log(state);
	var turn = state.turn; 
	var [cas1,cas2,cas3] = state.board[0];
	var [cas4,cas5,cas6] = state.board[1];
	var [cas7,cas8,cas9] = state.board[2];
	
	var casillas = [cas1,cas2,cas3,cas4,cas5,cas6,cas7,cas8,cas9]
	var cassel = casillas[selected];

	if (cassel === 0) {
		cassel = turn
	}

	if (turn === 1) {
		turn = 2; 
	} else if (turn === 2){
		turn = 1;
	}

	casillas[selected] = cassel; 

	state.turn = turn;

	var end = false; 
	var winner = 0; 
	if (!end) {end = (casillas[0]===casillas[1])&&(casillas[1]===casillas[2])&&(casillas[2]>0); winner = casillas[2];}
	if (!end) {end = (casillas[3]===casillas[4])&&(casillas[4]===casillas[5])&&(casillas[5]>0); winner = casillas[5];}
	if (!end) {end = (casillas[6]===casillas[7])&&(casillas[7]===casillas[8])&&(casillas[8]>0); winner = casillas[8];}
	if (!end) {end = (casillas[0]===casillas[3])&&(casillas[3]===casillas[6])&&(casillas[6]>0); winner = casillas[6];}
	if (!end) {end = (casillas[1]===casillas[4])&&(casillas[4]===casillas[7])&&(casillas[7]>0); winner = casillas[7];}
	if (!end) {end = (casillas[2]===casillas[5])&&(casillas[5]===casillas[8])&&(casillas[8]>0); winner = casillas[8];}
	if (!end) {end = (casillas[0]===casillas[4])&&(casillas[4]===casillas[8])&&(casillas[8]>0); winner = casillas[8];}
	if (!end) {end = (casillas[6]===casillas[4])&&(casillas[4]===casillas[2])&&(casillas[2]>0); winner = casillas[2];}
	
	state.board[0] = [casillas[0],casillas[1],casillas[2]];
	state.board[1] = [casillas[3],casillas[4],casillas[5]];
	state.board[2] = [casillas[6],casillas[7],casillas[8]];

	var viewport = document.getElementById("viewport");
	viewport.innerHTML = render(state)+msg;
	addListeners(end);
	return state
}


var viewport = document.getElementById("viewport");
viewport.innerHTML = render(state);
addListeners(false);



