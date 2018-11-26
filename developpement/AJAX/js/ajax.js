'use scrict'


var y;
var x;


$('#run').on('click', displayhtml);

function displayhtml(){
	var radioChoice = $('input[name=what]:checked').val();

	console.log(radioChoice);
	if(radioChoice == 1) {
		$.get('php/ajax.php',extracthtml);
	}
	if (radioChoice==2){
		$.getJSON('php/ajax2.php', extractJSON)

	}
	if (radioChoice==3){
		$.get('php/ajax3.php', extracthtml)

	}			
		
}

function extracthtml(canard){
	$('#target').html(canard);
	//$('#target h2').css('display', 'none');
}


function extractJSON(canard){
	console.log(canard);
 	var list = $('<ul>');
 	for (var i = 0 ; i < canard.length; i++) {
 		var li = $('<li>');
 		list.append(li.append('<p><strong> Prénom : '+canard[i].firstName+'</strong></p><p><em> Téléphone : '+canard[i].phone+'</em></p>'));
	 	}
 	$('#target').html(list);

 	

 //	$('#target').html(
 }


function extractfilm(canard){
 
 	$('#target').html(canard);

 	 //	$('#target').html(
}

