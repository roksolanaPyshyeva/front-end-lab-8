// Task 1
function assign (){
	let finalObj = arguments[0];
	for(var i = 1; i< arguments.length;i++){
		var nextSource = arguments[i];
      	if (nextSource != null) { 
	        for (var nextKey in nextSource) {
	            finalObj[nextKey] = nextSource[nextKey];
	        }
      	}
	}
	return finalObj;
}
var defaults = { width: 100, height: 100 };
var options = { width: 150 };
var configs = assign({}, defaults, options); 

// Task 2
function Player(obj){
	this.name =obj.name;
	this._attack = obj.attack;
	this._totalHitpoints = obj.hitpoints;
	this._currentHitpoints = obj.hitpoints;
}
Player.prototype.getHitpoints = function(){
	return this._currentHitpoints;
}
Player.prototype.setHitpoints = function( value){
	this._currentHitpoints = value;
}
Player.prototype.getTotalHitpoints = function(){
	return this._totalHitpoints;
}
Player.prototype.setTotalHitpoints = function(value){
	this._totalHitpoints = value;
}
Player.prototype.getAttack = function(){
	return this._attack;
}
Player.prototype.setAttack = function(value){
	this._attack = value;
}
Player.prototype.isAlive = function(){
	return this.getHitpoints() > 0 ? true:false;
}
Player.prototype.fight = function(target){
	if(this.name === target.name){
		console.error("Player can't fight itself!");
		return;
	}
	if(target.isAlive()){
		target.setHitpoints((target.getHitpoints()-this.getAttack()));
	}else{
		console.error("Target is already dead!");
		return;
	}
}

function Champion(){
	Player.apply(this,arguments);
	this._block = false;
}
Champion.prototype = Object.create(Player.prototype);
Champion.prototype.constructor = Champion;
Champion.prototype.heal = function(){
	if(this.getTotalHitpoints() > (this.getHitpoints() + 5)){
		this.setHitpoints((this.getHitpoints() + 5));
	}
}
Champion.prototype.defence = function(){
	this._block = true;
	this.setTotalHitpoints((this.getTotalHitpoints()+1));	
}
Champion.prototype.fight = function(target){
	if(this.name === target.name){
		console.error("Player can't fight itself!");
		return;
	}
	if(target.isAlive()){
		target.setHitpoints((target.getHitpoints()-this.getAttack()));
		if(!target.isAlive()){
			this.setAttack((this.getAttack()+1));
		}
	}else{
		console.error("Target is already dead!");
		return;
	}

}

function Monster(){
	Player.apply(this,arguments);
	this._rage = 0;
}
Monster.prototype = Object.create(Player.prototype);
Monster.prototype.constructor = Monster;
Monster.prototype.enrage = function(){
	this._rage = 2;
}
Monster.prototype.fury = function(){
	if((this.getHitpoints() > 5) && (this.getTotalHitpoints() > 5)){
		this.setHitpoints((this.getHitpoints() - 5));
		this.setTotalHitpoints((this.getTotalHitpoints() - 5));
		this.setAttack((this.getAttack() + 2));
	}else{
		console.error("Not enough hitpoints.");
		return;
	}
}
Monster.prototype.fight = function(target){
	if(this.name === target.name){
		console.error("Player can't fight itself!");
		return;
	}
	if(target.isAlive()){
		if(target._block){
			target._block = false;
			if(this._rage > 0){
				this._rage--;
			}
		}else{
			if(this._rage > 0){
				target.setHitpoints((target.getHitpoints()-(this.getAttack() * 2)));
				this._rage--;
			}else{
				target.setHitpoints((target.getHitpoints()-this.getAttack()));
			}
		}
	}else{
		console.error("Target is already dead!");
		return;
	}
	if(!target.isAlive()){
		this.setHitpoints(Math.floor(this.getHitpoints() + target.getTotalHitpoints()/4));
		this.setTotalHitpoints(Math.floor(this.getTotalHitpoints() + target.getTotalHitpoints()/10));
	}
}

var hunter = new Champion({name: 'Rexxar', attack: 10, hitpoints: 60});
var beast = new Monster({name: 'King Krush', attack: 8, hitpoints: 80});

hunter.fight(hunter);
beast.fight(beast);
hunter.fight(beast);
console.log(beast.getHitpoints()); 
beast.enrage();
hunter.fight(beast);
console.log(beast.getHitpoints()); 
beast.fight(hunter);
console.log(hunter.getHitpoints()); 
hunter.defence();
beast.fight(hunter);
console.log(hunter.getHitpoints()); 
console.log(hunter.getTotalHitpoints()); 
beast.fury();
console.log(beast.getHitpoints()); 
console.log(beast.getTotalHitpoints()); 
console.log(beast.getAttack()); 
hunter.fight(beast); 
hunter.fight(beast);
hunter.fight(beast); 
hunter.fight(beast); 
hunter.fight(beast);
hunter.fight(beast);
console.log(beast.isAlive());
hunter.fight(beast);
console.log(hunter.getAttack()); 
console.log(hunter.getHitpoints());
hunter.heal();
console.log(hunter.getHitpoints());
