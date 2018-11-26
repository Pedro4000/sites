

$('#searchbutton').on("click",searchkeyword);
$('#searchoffice').on("click",searchoffice);
$('#searchofficewithid').on("click",searchofficewithid);

$.getJSON('http://devman.fr/api/office.php', extractJSON2);

function searchkeyword (event)
{
	event.preventDefault();
	var moncoco = $("#research").val();
	console.log('http://devman.fr/api/recupKeyWordcustomers.php?mot='+moncoco);
	$.getJSON('http://devman.fr/api/recupKeyWordcustomers.php?mot='+moncoco, extractJSON);
	console.log('yo');
}


function searchoffice (event)
{
	event.preventDefault();
	var moncoco = $("#research").val();
	$.getJSON('http://devman.fr/api/office.php', extractJSON2);
}

function searchofficewithid (event)
{
	event.preventDefault();
	var officenumber = $("#researchoffice").val();

	console.log(officenumber);

	console.log('http://devman.fr/getofficeswithid.php?officeCode='+officenumber);

	$.getJSON('http://devman.fr/getofficeswithid.php?officeCode='+officenumber, extractJSON3);
	console.log('yo');
}




function extractJSON(canard)
{
	console.log(canard);
	var list = $('<ul>');
 	for (var i = 0 ; i < canard.length ; i++) 
	{

		var li = $('<li>');
 		list.append(li.append('<p>'+canard[i]['customerName']+'</p>'));
	}
 		$('#generic-form').html(list);
}


function extractJSON2(canard)
{
	console.log(canard[1]['city']);
	var list = $('<ul>');
 	for (var i = 0 ; i < canard.length ; i++) 
	{

		var li = $('<li>');
 		list.append(li.append('<p>'+canard[i]['city']+'</p>'));
	}
 		$('#generic-form').html(list);
}


function extractJSON3(canard)
{
	console.log(canard['city']);
	var list = $('<ul>');
	var li = $('<li>');
 		list.append(li.append('<p>'+canard['city']+'</p>'));
 		$('#generic-form').html(list);
}
