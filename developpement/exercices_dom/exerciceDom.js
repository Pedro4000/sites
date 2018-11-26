

var para1 = document.getElementById('para1');
var myPara = document.querySelectorAll('.my-para');

var para2= document.getElementById('para2');

console.log(myPara);

para1.style.color="red";
para1.style.backgroundColor="green";

	

	for (var i = myPara.length - 1; i >= 0; i--) {
	myPara[i].style.color="pink";
	}

para1.classList.add('blue');
para1.classList.remove('useless');

function myFunction ()  
{
	para2.classList.toggle('blue');
}

para2.addEventListener('click',myFunction);

function becomered ()  
{
	para2.classList.add('important');
}

para2.addEventListener('hover',becomered);
