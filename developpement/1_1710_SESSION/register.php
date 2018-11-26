<?php
// register.php
session_start();

include 'application/lib.php';



if(empty($_POST) == false) {

    $hashPassword = hashPassword($_POST['Password']);

	var_dump($hashPassword);

    include 'config.php';


    $query = $pdo->prepare
		(
		    ' INSERT INTO
                Users
                (FirstName, LastName, Email, Password)
            VALUES
                (?, ?, ?, ?)'
		);

	$query->execute([$_POST['FirstName'], $_POST['LastName'], $_POST['Email'], $hashPassword ]);

}


?>

<form id="register-form" action="register.php" method="POST">
	<label>Nom</label>
    <input type="text" name="LastName"/>
    <label>Prénom</label>
    <input type="text" name="FirstName"/>
    <label>Email</label>
    <input type="text" name="Email"/>
    <label>Password</label>
    <input type="text" name="Password"/>

	<input type="submit" value="envoyer"/>

</form>
