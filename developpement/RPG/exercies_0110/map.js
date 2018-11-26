var i=0;
var j=0;
var carre= document.getElementById("square");
var gauchedroite=9;
var hautbas=9;


var map =[
[1,1,1,1,1,1,1,1,1,1],

[1,2,0,0,0,0,2,0,0,1],

[1,2,0,0,0,0,2,0,0,1],

[1,0,0,0,0,0,0,0,0,1],

[0,0,0,2,0,0,0,2,2,1],

[1,0,0,0,0,0,0,0,0,1],

[1,2,0,0,0,0,2,0,0,1],

[1,2,0,0,0,0,2,0,0,1],

[1,1,1,1,1,1,1,1,1,1],

];

	document.write('<table>');
	console.log(map.length);


for (var j = 0 ; j < map.length; j++) {
	document.write('<tr class="fond'+map[j][i]+'"')

for (var i = -1 ; i < map[j].length ; i++) {
	document.write('<td class="fond'+map[j][i]+'"></td>');
}

	document.write('</tr>');
}


document.addEventListener('keydown',myFunction);

function myFunction(event){
	console.log(event.keyCode);
	console.log(hautbas);
	console.log(gauchedroite);
	console.log(carre);

		if (event.keyCode === 37 && gauchedroite>=62 ){
			gauchedroite-=62;
			carre.style.left=gauchedroite+"px";
		}

		if (event.keyCode === 38 && hautbas>=62 ){
			hautbas-=62;
			carre.style.top=hautbas+"px";
		}
		if (event.keyCode === 39 && gauchedroite<=563 ){
			gauchedroite+=62;
			carre.style.left=gauchedroite+"px";
		}
		if (event.keyCode === 40 && hautbas<=502 ){
			hautbas+=62;
			carre.style.top=hautbas+"px";
		}
}
