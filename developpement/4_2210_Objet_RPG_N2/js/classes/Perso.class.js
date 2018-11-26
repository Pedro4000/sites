var Perso = function (name, hp, attack, defense, magie) {
	
    this.name = name;
    this.hp =  hp;
    this.attack = attack;
	this.defense = defense;
	this.magie = magie;
    
    this.attaquer = function(objPerso) {
    	var degats = this.attack - objPerso.defense;
    	console.log(this.name +' , il enlève '+ degats + ' hp a  ' + objPerso.name);
        objPerso.hp -= degats;
        console.log(objPerso.name +' a  '+ objPerso.hp+ ' hp' );
        
    }

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

Perso.prototype.defendre = function() {
	var ratio =  Math.round(this.defense * Math.random());
	this.defense += ratio;
    console.log(this.name+' augmente sa defense de '+ ratio + ' point ');
    console.log(this.name +'a une defense à : '+ this.defense);

}
