'use strict'


	var x=parseInt(window.prompt('factorielle de combien?'));

 	factorielle(x);

function factorielle(x){

	var y=1;

		for (var i = 1 ; i <= x ; i++) {

			var y= i*y;

		}
		document.write('Le resultat est égal à '+y);
}