<?php 


session_start();

include 'application/lib.php';


if(empty($_POST) == false) {


  $hashPassword = hashPassword($_POST['Password']);

  var_dump($hashPassword);

  include 'application/bdd_connection.php';


    $query = $pdo->prepare
    (
        ' INSERT INTO
                Users
                (FirstName, LastName, Email, Password)
            VALUES
                (?, ?, ?, ?)'
    );

  $query->execute([$_POST['FirstName'], $_POST['LastName'], $_POST['Email'], $hashPassword]);



}

$template = 'register';
include 'layout.phtml';

?>