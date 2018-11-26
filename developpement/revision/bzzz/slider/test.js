var prev = document.querySelector('.previousbutton');
var next = document.querySelector('.nextbutton');
var img = document.querySelector('.image');

prev.addEventListener('click',prevA);
next.addEventListener('click',nextA);

var i=0;
var imgsrc;

function prevA (){
	if (i==1 || i==0) {
		i=4;
	}
	console.log('yo');
	i--;
	imgsrc='team/'+i+'.jpg';
	console.log(i);
	console.log(imgsrc);
	img.src=imgsrc;
}

function nextA (){
	if (i==4) {
		i=0;
	}
	i++;
	imgsrc='team/'+i+'.jpg';
	console.log(i);
	console.log(imgsrc);
	img.src=imgsrc;
}