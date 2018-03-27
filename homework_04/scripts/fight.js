Champion.prototype.championMoves = function (number,target){
	let move;
	switch(number){
		case 1:
		this.fight(target);
		move = 'fight';
		break;
		case 2:
		this.defence();
		move = 'defense';
		break;
		case 3:
		this.heal();
		move = 'heal';
		break;
	}
	return move;
}
Monster.prototype.monsterMoves = function(number, target){
	let move;
	switch(number){
		case 1:
		this.fight(target);
		move = 'fight';
		break;
		case 2:
		this.enrage();
		move = 'enrage';
		break;
		case 3:
		this.fury();
		move = 'fury';
		break;
	}
	return move;
}
function showFightProcess (firstPlayer, secondPlayer){
	if(!(firstPlayer instanceof Champion)){
		let obj = firstPlayer;
		firstPlayer = secondPlayer;
		secondPlayer = obj;
	}
	let move;
	let rand = 0;
	do {
		rand = Math.floor(Math.random() * 3) + 1;
        if (firstPlayer.isAlive() && secondPlayer.isAlive()) {
        	move = firstPlayer.championMoves(rand, secondPlayer);
            console.log(`${firstPlayer.name} makes a move ${move}`);
            console.log(`${firstPlayer.name}'s current life points are ${firstPlayer.getHitpoints()}`);
            console.log(`${firstPlayer.name}'s total life points are ${firstPlayer.getTotalHitpoints()}`);
            console.log(`${firstPlayer.name}'s attack is ${firstPlayer.getAttack()}`);
        }
        console.log('~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~');
        rand = Math.floor(Math.random() * 3) + 1;    
        if (firstPlayer.isAlive() && secondPlayer.isAlive()) {
            move = secondPlayer.monsterMoves(rand, firstPlayer);
            console.log(`${secondPlayer.name} makes a move ${move}`);
            console.log(`${secondPlayer.name}'s current life points are ${secondPlayer.getHitpoints()}`);
            console.log(`${secondPlayer.name}'s total life points are ${secondPlayer.getTotalHitpoints()}`);
            console.log(`${secondPlayer.name}'s attack is ${secondPlayer.getAttack()}`);
            console.log('~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~');
            console.log('Next move:')
        }

    } while (firstPlayer.isAlive() && secondPlayer.isAlive());
    if(!(firstPlayer.isAlive())){
    	console.log(`${firstPlayer.name} loses to ${secondPlayer.name}`);
    }else{
    	console.log(`${secondPlayer.name} loses to ${firstPlayer.name}`);
    }
    return;
}
var hunterOne = new Champion({name: 'Rexxar', attack: 10, hitpoints: 60});
var beastOne = new Monster({name: 'King Krush', attack: 8, hitpoints: 80});
showFightProcess(beastOne, hunterOne);
