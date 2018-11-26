<?php

 $dictionary =
    [
        'cat'    => 'chat',
        'dog'    => 'chien',
        'monkey' => 'singe',
        'sea'    => 'mer',
        'sun'    => 'soleil'
    ];

include 'trad.phtml' ;

	var_dump($_POST['direction']);
	$selectoption=$_POST['direction'];

	if ($selectoption==='FrancaisversAnglais') 
	{
	
		$frenchword= $_POST['word'];
		$resultat = array_search($frenchword,$dictionary);
		var_dump($resultat);
		if (in_array($frenchword, $dictionary)==true){
		echo $resultat;}
		else {echo "ce mot n'existe pas";}
	}

	else if ($selectoption==='AnglaisversFrancais') 
	{
		$englishword= $_POST['word'];
		var_dump($englishword);
		if (array_key_exists($englishword, $dictionary)==true) 
		{
		$resultat2 = $dictionary[$englishword];
		var_dump($resultat2);
		echo $resultat2;
		}
		else {echo "ce mot n'existe pas";}
	}






?>