
<?php

include 'classes/Database.class.php';

$database = new Database();

$sql = 'SELECT * FROM offices WHERE officeCode =?';

$execute = [$_GET['officeCode']];

$customer = $database->selectOneInSql($sql, $execute);

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