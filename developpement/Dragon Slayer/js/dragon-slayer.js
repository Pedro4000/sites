'use strict';   // Mode strict du JavaScript

/*************************************************************************************************/
/* **************************************** DONNEES JEU **************************************** */
/*************************************************************************************************/
	var hpKnight ;
	var hpDragon ;
	var difficulté='difficulté';
	var arme='arme';
	var armure='armure';
	var u;
	var difficulté='difficulté';
	var arme='arme';
	var armure='armure';
	var ratioWeapon;
	var ratioArmor;




 	var hpChoice = onetothree(difficulté);
 	var weaponChoice = onetothree(arme);
 	var armorChoice = onetothree(armure);

 	difficulty(hpChoice);
 	armor(armorChoice);
 	weapon(weaponChoice);
	

	var game = ('<p> Vous partez avec '+hpKnight+' PV, le dragon '+hpDragon+' PV vous avez l\'armure de rang '+weaponChoice+' et l\'arme de rang '+armorChoice+'</p>');
	document.write(game);

	combat();






	function dragonslayer (){

	var hpChoice = onetothree(difficulté); // Demander de définir la difficulté du jeu entre un et trois
 	var weaponChoice = onetothree(arme); // Demander de définir le niveau de l'arme entre un et trois
 	var armorChoice = onetothree(armure); // Demander de définir le niveau de l'armure entre un et trois

 	difficulty(hpChoice); //définir le niveau
 	armor(armorChoice);	//définir le ratio de l'arme
 	weapon(weaponChoice); //définir le ratio de l'armure

 	combat (); //boucle qui réduit les points de vie jusqu'à ce que l'un ou l'autre soit inférieur ou égal à 0

	}


function getRandomInteger(min, max) {

	return Math.floor((Math.random() * (max - min + 1)) + min);

}

 function difficulty(hpChoice){


	 	if (hpChoice == 1 ) {
	 		hpKnight = getRandomInteger(200,250)
	 		hpDragon = getRandomInteger(150,200)
	 	}

	 	if (hpChoice == 2 ) {
	 		hpKnight = getRandomInteger(200,250)
	 		hpDragon = getRandomInteger(200,250)
	 	}

	 	if (hpChoice == 3 ) {
	 		hpKnight = getRandomInteger(150,200)
	 		hpDragon = getRandomInteger(200,250)
	 	}
	 }


 function weapon(weaponChoice){

	if (weaponChoice == 1 ) {
	 		ratioWeapon = 0.5
	 	}
	 	if (weaponChoice == 2 ) {
			ratioWeapon = 1
	 	}
	 	if (weaponChoice == 3 ) {
 			ratioWeapon = 2
	 	}

	 }


 function armor(armorChoice){

		if (armorChoice == 1 ) {
	 		ratioArmor = 1
	 	}
	 	if (armorChoice == 2 ) {
			ratioArmor = 1.25
	 	}
	 	if (armorChoice == 3 ) {
 			ratioArmor = 2
	 	}


	 	}


	function attackDragon(hpChoice) {

		var attackDragonValue;

		if (hpChoice=1) {
			attackDragonValue= parseInt(getRandomInteger(10,20)/ratioArmor)
		}
		if (hpChoice=2) {
			attackDragonValue= parseInt(getRandomInteger(30,40)/ratioArmor)
		}
		if (hpChoice=3) {
			attackDragonValue= parseInt(getRandomInteger(50,60)/ratioArmor)
		}

		return attackDragonValue;

	}


		function attackKnight(hpChoice) {

		var attackKnightValue;

		if (hpChoice=1) {
			attackKnightValue= getRandomInteger(25,30)*ratioWeapon
		}
		if (hpChoice=2) {
			attackKnightValue= getRandomInteger(15,20)*ratioWeapon
		}
		if (hpChoice=3) {
			attackKnightValue= getRandomInteger(10,15)*ratioWeapon
		}

		return attackKnightValue;
	}



function onetothree(x) {
	var i;
	do { 
		i= parseInt(window.prompt('Choisissez le niveau de votre '+x));

	} while ((i !== 1 && i!==2 && i!==3))

	return i

	}



function combat (){

	do { 

		var chance = Math.random();

		if ( chance <0.5 ) {

			var degatsrecus = attackDragon ();
			hpKnight = hpKnight - degatsrecus
			if (hpKnight <= 0 ) {
				hpKnight= 0
			}
			console.log('le dragon attaque et inflige '+degatsrecus+'pv, il vous reste '+hpKnight+' points de vie');
				
		}

		else {

			var degatinflige = attackKnight ();
			hpDragon = hpDragon - degatinflige
			if(hpDragon <= 0) {
				hpDragon = 0
			}
			console.log('vous attaquez et infligés '+degatinflige+', il reste '+hpDragon+'  points de vies au dragon');
		}



	}	while ( hpDragon >=1 && hpKnight >=1 )

		if (hpDragon<=0) {
		document.write('<img src="images/knight.jpg">');
		}

	else {
		document.write('<img src="images/dragon.jpg">');
	}


}








/*************************************************************************************************/
/* *************************************** FONCTIONS JEU *************************************** */
/*************************************************************************************************/




/*************************************************************************************************/
/* ************************************** CODE PRINCIPAL *************************************** */
/*************************************************************************************************/


