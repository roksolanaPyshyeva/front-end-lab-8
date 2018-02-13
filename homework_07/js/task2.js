var start = confirm("Do you want to play a game?");
var begining = start;
if(start == false){
	console.log("You did not become a millionaire !");
}else{ 
	while(begining){
		start = true;
		var rand = 5;
		var attempts = 3;
		var total = 0;
		var maxprize = 10;
		var prize = 10;
		while( start){
			var number = Math.floor(Math.random() * (rand + 1));
			for( ; attempts > 0; attempts--, prize = parseInt(prize / 2)){
				var guessNumber = Number(prompt("Enter a number from 0 to "+ rand+ "\n" + "Attempts left: "+ attempts+ "\n"+ "Total prize: "+ total+ "\n"+ "Possible prize on current attempt: "+ prize ));
				if(guessNumber == number){
					total += prize;
					start = confirm("Do you want to continue a game?");
					if( start == false){
						console.log("Thank you for a game. Your prize is: ", total);
						begining = confirm("Do you want to play a game again?");
						break;
					}else{
						rand *= 2;
						attempts = 3;
						prize = maxprize *3;
						maxprize = prize;
						begining = false;
						break;
					}
				}
			}
			if(attempts == 0){
				console.log("Thank you for a game. Your prize is: ", total);
				begining = confirm("Do you want to play a game again?");
				break;
			}
			if( begining == true)
				break;
		}
	}
}