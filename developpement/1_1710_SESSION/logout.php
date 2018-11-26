
<?php

// logout.pĥp
session_start();

session_destroy();


var_dump($_SESSION);
header('Location: index.php');
exit();



?>

<a href="index.php">index</a>



