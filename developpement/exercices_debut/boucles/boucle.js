/***** var num=0;

while (num<50) {
	document.write('Hello ');
	num++;
}
 ***/


// for (var count=0; count <10; count += 2) {

// 	document.write('<p>La boucle for </p>')
// }  

const PA121 = ['Jean', 'Alan', 'Max', 'Younes', 'Marc', 'julien', 'Rémi', 'Saliou', 'Laurent', 'Marie', 'Camille', 'Céline', 'Pierre', 'Baptiste' ]


console.log(PA121.length);
console.log(PA121[13].length);

document.write('Dans la PA121 il y a :');

for (var i=0; i<PA121.length; i++) {
	document.write('<p>'+PA121[i]+'</p>')
}