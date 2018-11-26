var Program = function(monPerso, computer){

	this.monPerso = monPerso;
	this.computer = computer;



    $('#attaquer').on('click', this.onClickAttack.bind(this));
    $('#sort').on('click', this.onClickSort.bind(this));
    $('#defendre').on('click', this.onClickDefense.bind(this));
    
    this.affichage();
    
    
}

Program.prototype.affichage = function() {
	if( this.monPerso.hp <=0)
	{
		$('#perso1').text(this.monPerso.name+ ' : est Dead');
	}
	if ( this.computer.hp <=0)
	{
		$('#perso2').text(this.computer.name+ ' : est Dead');
	}
	
	else
	{
		$('#perso1').text(this.monPerso.name+ ' : '+this.monPerso.hp +' HP');
		$('#perso2').text(this.computer.name+ ' : '+this.computer.hp +' HP');
	}
}


Program.prototype.onClickAttack = function(event) {
	
    event.preventDefault();
	this.monPerso.attaquer(this.computer);
    this.Contre();
    this.affichage();
}


Program.prototype.onClickSort = function(event) {
	
    event.preventDefault();
	this.monPerso.sort(this.computer);
    this.Contre();
    this.affichage();
}

Program.prototype.onClickDefense = function(event) {
	
    event.preventDefault();
	this.monPerso.defendre();
    this.Contre();
    this.affichage();
}


Program.prototype.Contre = function (){


	var random = getRandomInteger(1, 3);
    
    if (random == 1) {
    
    	this.computer.attaquer(this.monPerso);
    
    } else if (random == 2) {
    
    	this.computer.sort(this.monPerso);
        
    } else {
    
    	this.computer.defendre();
    }



}