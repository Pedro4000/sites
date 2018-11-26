'use strict'


	var x1=parseInt(window.prompt('Entrez l\'absisse du 1er point'));
	var y1=parseInt(window.prompt('Entrez l\'ordonnée du 1er point'));
	var x2=parseInt(window.prompt('Entrez l\'absisse du 2eme point'));
	var y2=parseInt(window.prompt('Entrez l\'ordonnée du 2eme point'));


 	milieusegment(x1,y1,x2,y2);

function milieusegment(a,b,c,d){

	var y=(y1+y2)/2
	var x=(x1+x2)/2

	document.write('les coordonnées du milieu du segment est ['+y+','+x+']');

}
	
		document.write('les coordonnées du milieu du segment est [x:'+y+',y:'+x+']');
