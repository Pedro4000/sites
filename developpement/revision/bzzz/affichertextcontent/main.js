$('.coucou').on('click',gettextvalue);


function gettextvalue() {

	console.log($(this).text());

}

var coucou = document.querySelectorAll('.coucou');
console.log(coucou);

for (var i = 0; i < coucou.length; i++) {
	coucou[i].addEventListener('click', sayPara);
}

function sayPara() {
	console.log(this.textContent);
}

