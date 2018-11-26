var buttonprevious = document.querySelector('#previousbutton');
var buttonplay = document.querySelector('#playbutton');
var buttonstop = document.querySelector('#stopbutton');
var buttonnext = document.querySelector('#nextbutton');
var buttonrandom = document.querySelector('#randombutton');
var image = document.getElementById('img');
var actionbar = document.querySelector('.actionbar');
var barreoutil = document.querySelector('.barre-outil');
var j=1;
var k;

image.src="carousel/images/1.jpg"





barreoutil.addEventListener('click',disapear);
buttonnext.addEventListener('click',nextimage);
buttonprevious.addEventListener('click',previousimage);
buttonrandom.addEventListener('click',randomimage);
buttonplay.addEventListener('click',play);
buttonstop.addEventListener('click',stop);
document.addEventListener('keyup',myFunction);
var state = false;



function myFunction(event){
	console.log(event.keyCode);

		if (event.keyCode === 39){
			nextimage();
		}
		if (event.keyCode === 37){
			previousimage();
		}
		if (event.keyCode === 82){
			randomimage ();
		}
		if (event.keyCode ===32 && state == true ){
			stop();
		}	
		if (event.keyCode ===32 && state == false){
			play();
		}

}

console.log(k);
console.log(state);

function disapearsButton(){
	buttonplay.classList.toggle('disapear');
	buttonstop.classList.toggle('disapear');
}
function disapear(){
	actionbar.classList.toggle('disapear');
}


function nextimage () {
	j++;
	if (j===7) {
		j=1 
		image.src="carousel/images/1.jpg" 
	}
	else {
		image.src="carousel/images/"+j+".jpg"
	};
	console.log(j)
}


function previousimage () {
	j--;
	if (j===0) {
		j=6 
		image.src="carousel/images/1.jpg" 
	}
	else {
		image.src="carousel/images/"+j+".jpg"
	};
}


function randomimage(){
	j=parseInt(Math.random()*6+1);
	image.src="carousel/images/"+j+".jpg"
}


function play (){
	k=setInterval(nextimage,1500);
	disapearsButton();
	state = true;

}

function stop (){
	clearInterval(k);
	disapearsButton();
	state = false;
}
