

var para1 = document.getElementById('para1');
var myPara = document.querySelectorAll('.my-para');

console.log(myPara);

para1.style.color="red";
para1.style.backgroundColor="green";

	

	for (var i = myPara.length - 1; i >= 0; i--) {
	myPara[i].style.color="pink";
	}

para1.classList.add('blue');
