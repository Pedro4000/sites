// objet.js


var Perso =  function(name,hp,db,attaque,biere){

	this.name=name,
	this.hp = hp,
	this.db = db,
	this.attaque= attaque,
	this.biere=biere

}

console.log(Perso);

Perso.prototype.boire = function() {

	console.log(this.name+' est ivre')
	this.hp-=1;
	this.biere-=this.db;


}


Perso.prototype.tomber= function(){

	console.log(this.name+' est tombé et n\'a rien senti');
	this.hp-=2;

}

Perso.prototype.gogo= function(Perso){

	var x = parseInt(Math.random()*2)
	if (x===1){
		console.log(this.name+' essaye d\'attaquer : '+Perso.name+' mais malheureusement, ');
		this.tomber();
	}
	else{
		console.log(this.name+' devient fou et attaque son pote '+Perso.name);
		Perso.hp-=2;
		console.log(Perso.hp);
	}


}


