'use strict'


	var x=window.prompt('entrez votre chaine de caractères à compresser');
	compresserChaine(x);


function compresserChaine(x){

	var y = x.charAt(0);
	var k=-1 ;
	var compress ='';

	for (var i = 0 ; i <= x.length ; i++) {
		
		var lettre=x.charAt(i)
		k=k+1 ;

		if (lettre != y) {

			var y = x.charAt(i);
			compress=compress+k+x.charAt(i-1) ;
			k=0 ;
		}
		
	}

		document.write(compress);  

}