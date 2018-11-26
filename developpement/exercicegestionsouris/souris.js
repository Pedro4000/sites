
var myPara = document.querySelector('.rectangle-bleu');
var button = document.querySelector('.button');


myPara.style.backgroundcolor="firebrick";


button.addEventListener('click',disapear);
myPara.addEventListener('mouseover',becomered);
myPara.addEventListener('mouseout',becomered);
myPara.addEventListener('dblclick',becomegreen);


document.addEventListener('keyup',myFunction);

myFunction(event){
	console.log(event.keyCode)	
}

function becomegreen(){

	myPara.classList.toggle('good');
}

function becomered(){

	myPara.classList.toggle('important');
}

function disapear(){

	myPara.classList.toggle('disapear');
}