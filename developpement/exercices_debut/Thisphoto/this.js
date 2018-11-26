var myPara = document.querySelectorAll('.img1');



for (var i = myPara.length - 1; i >= 0; i--) {
	myPara[i].addEventListener('click',becomegreen)
}


function becomegreen(){
	this.classList.toggle('clicker');
	var k = document.querySelectorAll('.clicker');
	console.log(k.length);
	
}
