<?php

//	function stockdata()

// ici on vient stocker les données


	$titre=$_POST['titre'];
	$file=fopen('donnes.csv','a');
	fputcsv($file,$_POST);
	fclose($file);



// ensuite on vient chooper les données depuis données.csv

	$allData = [];
	$filelec=fopen('donnes.csv','r');
	while (true) {
		$data=fgetcsv($filelec);
		if ($data == false) {
			break;
		}
		array_push($allData, $data);
	}
	fclose($filelec);


// 	Ici on traduit alldata en lignes de données pour HTML


	$longueurdonnes=(count($allData));
	$titre=[];
	$tache=[];
	$date=[];
	$priorite=[];


	for ($i=0; $i < $longueurdonnes-1 ; $i++){ 
	
		array_push($titre, $allData[$i][0]);
		array_push($tache, $allData[$i][1]);
		array_push($date, $allData[$i][2]);
		array_push($priorite, $allData[$i][3]);

		}


?>