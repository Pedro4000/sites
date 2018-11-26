
<?php

include 'classes/Database.class.php';

$databases = new Database();

$sql = 'SELECT * FROM `customers` WHERE `customerName` LIKE ?';

$execute = ['%'.$_GET['mot'].'%'];

$customer = $databases->selectAllInSql($sql, $execute);

if ($customer!=false){
	echo json_encode($customer);
	exit();
}

else{
	echo 'Erreur 404';
	}



?>

<script
 src="https://code.jquery.com/jquery-3.3.1.js"
 integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60="
 crossorigin="anonymous"></script>

 <script type="text/javascript" src="api.js"></script>