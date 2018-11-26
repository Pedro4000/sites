var i=0;
var carre= document.getElementById("square");
var left=0;
var bottom=93;
var k=0;
var l=0;




document.addEventListener('keydown',myFunction);

function myFunction(event){

		if (event.keyCode === 37 && left>=1 ){
			left--;
			carre.style.left=left+"%";
 		 	changeclass();

		}

		if (event.keyCode === 38 && bottom<=93 ){
			bottom++;
			carre.style.bottom=bottom+"%";
			changeclass();
		}
		if (event.keyCode === 39 && left<=101 ){
			left++;
			carre.style.left=left+"%";
			changeclass();
		}
		if (event.keyCode === 40 && bottom>=1 ){
			bottom--;
			carre.style.bottom=bottom+"%";
			changeclass();
		}




}


function changeclass(){
	
	if (i===26) 
		{
			i=0;
			i=i+1;
			j=i+1;
			$('#square').addClass('anim1');
			$('#square').removeClass('anim27');


		}

	else
		{
			i=i+1;
			j=i+1;
			$('#square').toggleClass('anim'+i);
			$('#square').toggleClass('anim'+j);
			console.log(i);
		}
}


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


for (var k = 0 ; k < map.length; k++) {
	document.write('<tr class="fond'+map[k][l]+'"')

for (var l = -1 ; l < map[k].length ; l++) {
	document.write('<td class="fond'+map[k][l]+'"></td>');
}

	document.write('</tr>');
}