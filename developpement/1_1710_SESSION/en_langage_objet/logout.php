<?php
session_start();
include 'classes/Database.class.php';
include 'classes/User.class.php';


$logout = new User();
$logout->logoutSession();


/*
session_destroy();
header('Location: index.php');
exit();
*/

?>


