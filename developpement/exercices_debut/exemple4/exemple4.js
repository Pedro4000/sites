/* var number1;
var number2;
var number3

number1= parseFloat(window.prompt('veuillez entrer un nombre'));

number2= number1*1.2;
number3=number2-number1

document.write(number2+' TTC avec une TVA de 20% soit un montant HT de '+number1+' donc un montant de TVA de '+number3);
*/ 
const TAUX_DE_TVA = 20;

var montantHT;
var montantTTC;
var montantTVA;


montantHT = window.prompt('Quel est le montant HT');
montantHT = parseFloat(montantHT);

montantTVA = montantHT * (TAUX_DE_TVA / 100);
montantTTC = montantHT + montantTVA;


document.write
(
    '<p>Pour un montant HT de ' + montantHT + ' € il y a ' + montantTVA + ' € de TVA.</p>'
);
document.write('<p>Le montant TTC est donc de ' + montantTTC + ' €.</p>');
