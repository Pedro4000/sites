var Perso = function (name,hp,def,attack,magie) {
	
	this.name=name,
	this.hp=hp,
	this.def=def,
	this.attack=attack,
	this.magie=magie


}


Perso.prototype.attaquer = function(Perso){

	Perso.hp = Perso.hp - this.attack;
	console.log(Perso.hp);
	

}


Perso.prototype.sort = function(perso) {
	if (this.magie > 0) {
    	var degats = getRandomInteger(1, this.magie);
		console.log(this.name +  ' jete un sort,il enlève '+ degats + ' hp a '+ perso.name);
		perso.hp -= degats;
    	this.magie -=  degats;
		console.log(perso.name +' a  '+ perso.hp+ ' hp' );
    } else {
		console.log('Vous n avez plus de point de magie....')
	}

}


Perso.prototype.defense = function(){

	
	this.def+=getRandomInteger(0,1)*this.def;

}







