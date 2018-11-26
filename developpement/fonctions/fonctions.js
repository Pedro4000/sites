'use strict';


var listeCourses=['fraises','bananes','chocolat','lentilles','pq','riz','cereales','chantilly','cerises'];

	

function ajouterProduit(produit){

	listeCourses.push(produit);

}

function retirerProduit(produitX){

	var i=listeCourses.indexOf(produitX);
	listeCourses.splice(i,1);
}

function retirerToutProduit(produitZ){

	if (produitZ === 'Oui' || produitZ==='oui'){

		var i=listeCourses.length;
		listeCourses.splice(0,i);

	}

}

function voirListe(afficher){

	var lalongue=listeCourses[0];
	for (var i = 1 ; i < listeCourses.length ; i++) {
		var lalongue=(lalongue+' '+listeCourses[i]);
	}
	document.write('la liste des courses est: '+lalongue+' elle contient '+listeCourses.length+' éléments')
}

var produit=window.prompt('ajouter quelque chose ?');
var produitX=window.prompt('retirer quelque chose ?');
var produitZ=window.prompt('voulez vous tout retirer?');
var afficher=window.prompt('voulez vous voir la liste');

ajouterProduit(produit);
retirerProduit(produitX);
retirerToutProduit(produitZ);

if (afficher==='Oui' || afficher==='oui') {
		voirListe(afficher)
}



	console.log(listeCourses);


