var i=1
var carre= document.getElementById("square");
var left=0;
var bottom=93;




document.addEventListener('keydown',myFunction);

function myFunction(event){
	console.log(event.keyCode);
	console.log(top);
	console.log(left);

		if (event.keyCode === 37 && left>=1 ){
			left--;
			carre.style.left=left+"%";
		}

		if (event.keyCode === 38 && bottom<=93 ){
			bottom++;
			carre.style.bottom=bottom+"%";
		}
		if (event.keyCode === 39 && left<=101 ){
			left++;
			carre.style.left=left+"%";
		}
		if (event.keyCode === 40 && bottom>=1 ){
			bottom--;
			carre.style.bottom=bottom+"%";
		}




}