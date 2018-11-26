<?php

// info.php

session_start();

if( array_key_exists('user', $_SESSION)) {

	echo '<p>'.$_SESSION['user']['FirstName'].'</p>';
    echo '<p>'.$_SESSION['user']['LastName'].'</p>';
    echo '<p>'.$_SESSION['user']['Email'].'</p>';

} else {

	echo 'Vous n\'êtes pas connecté';

}


?>
<a href="index.php"><p>index<p></a>

