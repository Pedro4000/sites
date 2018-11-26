'use strict'

var montantHT;
var Reduction;
var Remise;
var MontantTTC;
var MontantTVA;



montantHT=parseFloat(window.prompt('Entrez le montant HT'));
Reduction=window.prompt('Voulez vous une remise?');
MontantTVA=(montantHT*1.2)-montantHT;

if (Reduction ==='Yes' || Reduction === 'Oui' || Reduction === 'oui' || Reduction=== 'yes')

{

	Remise=parseFloat(window.prompt('Quel est le montant de la remise'));
	MontantTTC=montantHT*1.2*(1-(Remise/100));
	document.write('<p>Le montant à payer est de '+MontantTTC+'€</p>');
	document.write('<p>Le montant de TVA est de '+MontantTVA+'€</p>');
}

else
{
	MontantTTC=montantHT*1.2;
		document.write('<p> il n\'y a pas de remise vous devez donc payer  '+MontantTTC+'€</p>');
		document.write('<p> la TVA est de '+ MontantTVA+' € </p>');
}



