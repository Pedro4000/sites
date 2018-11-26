var largeur = document.querySelector('.remplir')
var l=0;
var k;



k = setInterval(GO,50);

function GO() {
	
	l++;
	largeur.style.width=l+"%";
	l.textcontent=
	if (l>=100){
		l=0;
	}
}



