$(document).ready(() => {
	(function goBoardRender(){
		let $tableContainer = $('#table-container');
		for(let i = 0; i<15 ; i++){
			for(let j = 0; j<15; j++){
				$tableContainer.append(`<div class = "grid-item" row = "${j}" col = "${i}"></div>`);
				$('.grid-item').css({'box-shadow':'1px 0 0 0 #000, 0 1px 0 0 #000, 1px 1px 0 0 #000, 1px 0 0 0 #000 inset, 0 1px 0 0 #000 inset'});
			}
		}
		$tableContainer.css({'display':'grid',
			'grid-auto-rows': 'minmax(40px,auto)',
		 	'grid-template-columns': 'repeat(15, 40px)',
		 	'border' : '1px solid black',
		 	'padding' : '10px',
		 	'margin-top' : '10px',
		 	'background-color' : '#ce8925'});
		$('.winner').hide();
		$('.label1').css({'background-color':'rgb(206, 12, 12, 0.5)',
			'border-radius': '50%',
			'box-shadow':'0px 0px 50px -3px rgba(206, 12, 12)'});
	})();

	function Player(color, turn){
		this.name = color;
		this.turn = turn;
		this.movesCoordinates = [];
		this.winRow = [];
	}

	let whitePlayer = new Player('white', true);
	let blackPlayer = new Player('black', false);
	let $tableContainer = $('#table-container');
	$tableContainer.on('click', function(e){
		if(whitePlayer.turn){
			$cellDiv = $(e.target).closest('.grid-item');
			if(chackPlace(parseInt($cellDiv.attr('col')),parseInt($cellDiv.attr('row')))){
				return;
			}
			changeTurnWhiteToBlack();
			let $circle = $('<div class="white-circle"></div>')
			$cellDiv.append($circle);
			whitePlayer.winRow = [];
			whitePlayer.movesCoordinates.push([parseInt($cellDiv.attr('col')),parseInt($cellDiv.attr('row'))]);
			if((whitePlayer.movesCoordinates.length >= 4) && isWinner(parseInt($cellDiv.attr('col')),parseInt($cellDiv.attr('row')),whitePlayer)){
				console.log(whitePlayer.winRow);
				highliteRow(whitePlayer);
				$('.winner').prepend('<p></p>');
				$('.winner p').text(`Winner is ${whitePlayer.name} color!`);
				$('.winner').show().fadeIn('slow');
			};
		}else{
			$cellDiv = $(e.target).closest('.grid-item');
			if(chackPlace(parseInt($cellDiv.attr('col')),parseInt($cellDiv.attr('row')))){
				return;
			}
			changeTurnBlackToWhite();
			let $circle = $('<div class="black-circle"></div>')
			$cellDiv.append($circle);
			blackPlayer.winRow = [];
			blackPlayer.movesCoordinates.push([parseInt($cellDiv.attr('col')),parseInt($cellDiv.attr('row'))]);
			if((blackPlayer.movesCoordinates.length >= 4) && isWinner(parseInt($cellDiv.attr('col')),parseInt($cellDiv.attr('row')),blackPlayer)){
				highliteRow(blackPlayer);
				console.log(whitePlayer.winRow);
				$('.winner').prepend('<p></p>');
				$('.winner p').text(`Winner is ${blackPlayer.name} color!`);
				$('.winner').show().fadeIn('slow');
			};
		}
	});
	function highliteRow(player){
		for(let i=0; i< player.winRow.length; i++){
			if(player.name === 'white'){
				if(Array.isArray(player.winRow[i])){
					$(`div[col=${player.winRow[i][0]}]`).filter(`div[row=${player.winRow[i][1]}]`).attr('winner', 'white');
					$(`[winner=white] .white-circle`).css({"background-color": "rgb(206, 12, 12)"});
				}
			}else{
				if(Array.isArray(player.winRow[i])){
					$(`div[col=${player.winRow[i][0]}]`).filter(`div[row=${player.winRow[i][1]}]`).attr('winner', 'black');
					$(`[winner=black] .black-circle`).css({"background-color": "rgb(206, 12, 12)"});
				}
			}
		}
	}
	function chackPlace(x,y){
		for(let i =0; i<whitePlayer.movesCoordinates.length; i ++){
			if((parseInt(whitePlayer.movesCoordinates[i][0]) === x) &&(parseInt(whitePlayer.movesCoordinates[i][1]) === y ) ){
				return true;
			}
		}
		for(let i =0; i<blackPlayer.movesCoordinates.length; i ++){
			if((parseInt(blackPlayer.movesCoordinates[i][0]) === x) &&(parseInt(blackPlayer.movesCoordinates[i][1]) === y ) ){
				return true;
			}
		}
		return false;
	}
	function changeTurnWhiteToBlack(){
		whitePlayer.turn = false;
		blackPlayer.turn = true;
		$('.label1').css({'background-color':'#d6b380',
			'box-shadow':'none'});
		$('.label2').css({'background-color':'rgb(206, 12, 12, 0.5)',
			'border-radius': '50%',
			'box-shadow':'0px 0px 50px -3px rgba(206, 12, 12)'});
	}
	function changeTurnBlackToWhite(){
		whitePlayer.turn = true;
		blackPlayer.turn = false;
		$('.label2').css({'background-color':'#d6b380',
			'box-shadow':'none'});
		$('.label1').css({'background-color':'rgb(206, 12, 12, 0.5)',
			'border-radius': '50%',
			'box-shadow':'0px 0px 50px -3px rgba(206, 12, 12)'});
	}

	function isWinner(x,y,player){
		if(checkVertically(y,player)){
			return true;
		}
		if(checkHorizontally(x,player)){
			return true;
		}
		if(checkDigonalLeftToRight(player)){
			return true;
		}
		if(checkDigonalRightToLeft(player)){
			return true;
		}

	}
	function checkVertically(y,player){
		let counter = 0;
		for(let i = 0; i<player.movesCoordinates.length; i++){
			if(parseInt(player.movesCoordinates[i][1]) === y){
				counter++;
				player.winRow[i] = player.movesCoordinates[i];
			}
		}
		if(counter>=4){
			return true;
		}else{
			whitePlayer.winRow = [];
			return false;
		}
	}
	function checkHorizontally(x,player){
		let counter = 0;
		for(let i = 0; i<player.movesCoordinates.length; i++){
			if(parseInt(player.movesCoordinates[i][0]) === x){
				counter++;
				player.winRow[i] = player.movesCoordinates[i];
			}
		}
		if(counter>=4){
			return true;
		}else{
			whitePlayer.winRow = [];
			return false;
		}
	}
	function checkDigonalLeftToRight(player){
		let counter = 1;
		player.movesCoordinates.sort((a,b) =>{return a[0] - b[0]});
		let x = parseInt(player.movesCoordinates[0][0]);
		let y = parseInt(player.movesCoordinates[0][1]);
		player.winRow[0] = [player.movesCoordinates[0][0],player.movesCoordinates[0][1]];
		for(let i = 1; i<player.movesCoordinates.length; i++){
			if((parseInt(player.movesCoordinates[i][0] ) === (x+1)) && (parseInt(player.movesCoordinates[i][1] )=== (y+1))){
				counter++;
				player.winRow[i] = player.movesCoordinates[i];
				x = parseInt(player.movesCoordinates[i][0]);
				y = parseInt(player.movesCoordinates[i][1]);

			}
		}
		if(counter>=4){
			return true;
		}else{
			whitePlayer.winRow = [];
			return false;
		}
	}
	function checkDigonalRightToLeft(player){
		let counter = 1;
		player.movesCoordinates.sort((a,b) =>{return a[0] - b[0]});
		let x = parseInt(player.movesCoordinates[0][0]);
		let y = parseInt(player.movesCoordinates[0][1]);
		player.winRow[0] = [player.movesCoordinates[0][0],player.movesCoordinates[0][1]];
		for(let i = 1; i<player.movesCoordinates.length; i++){
			if((parseInt(player.movesCoordinates[i][0] ) === (x+1)) && (parseInt(player.movesCoordinates[i][1] )=== (y-1))){
				counter++;
				player.winRow[i] = player.movesCoordinates[i];
				x = parseInt(player.movesCoordinates[i][0]);
				y = parseInt(player.movesCoordinates[i][1]);

			}
		}
		if(counter>=4){
			return true;
		}else{
			whitePlayer.winRow = [];
			return false;
		}
	}
	$('#btn').click(() => {
	        location.reload();
	});
});
