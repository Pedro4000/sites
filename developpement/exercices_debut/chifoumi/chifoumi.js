var monSigne = window.prompt('joueur : entrez votre signe');
var signeOrdinateur = parseInt(3*Math.random());
var result;

console.log(monSigne);
console.log(signeOrdinateur);

switch(monSigne) {
case 'pierre' :
	if (signeOrdinateur === 0){
		document.write(monSigne+' contre pierre : une égalité');
	}
	else if(signeOrdinateur === 1) {
		document.write(monSigne+' contre feuille : perdu');
	}
	else{
		document.write(monSigne+' contre ciseaux : gagné');
	}	
	break;

case 'feuille' :
	if (signeOrdinateur === 0){
		document.write(monSigne+'contre pierre : gagné');
	}
	else if(signeOrdinateur === 1) {
		document.write(monSigne+' contre feuille : égalité');
	}
	else{
		document.write(monSigne+' contre feuille : perdu');
	}
	break;

case 'ciseaux' :
	if (signeOrdinateur === 0){
		document.write(monSigne+' contre pierre : perdu');
	}
	else if(signeOrdinateur === 1) {
		document.write(monSigne+' contre feuille : gagné');
	}
	else{
		document.write(monSigne+' contre feuille : égalité');
	}
	break;

	default:
	document.write('vous n\'avez pas choisi un bon signe');
	break;
}

if(result!= undefined) {
	document.write(result);
}
