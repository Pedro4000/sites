

var nombre = parseInt(window.prompt('entrez un nombre'));

var i=1;
var j=1;

	document.write('<table>');

for (var j = i ; j <= nombre; j++) {

	document.write('<tr>')

for (var i = 1 ; i <= nombre ; i++) {
	
if (i===j) {
	document.write('<td class="olive">'+i*j+' </td>')	
} 	
else{
	document.write('<td> '+i*j+' </td>');
}

}
	
	document.write('</tr>');

}

