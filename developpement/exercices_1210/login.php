<?php 


session_start();


	include 'application/lib.php';

if(empty($_POST) == false ) {
    
	include 'application/bdd_connection.php';
    
    $query = $pdo->prepare
		(
		    'SELECT
	            *
             FROM
              	Users
             WHERE Email = ?'
		);

	$query->execute([ $_POST['email'] ]);


	$user = $query->fetch(PDO::FETCH_ASSOC);

    
    
    
    
 if (verifyPassword($_POST['password'], $user['Password']) && $user != false) {
    
    	$_SESSION['user']['FirstName'] = $user['FirstName'];
		$_SESSION['user']['LastName'] = $user['LastName'];
        $_SESSION['user']['Email'] = $user['Email'];
        
        header('Location: index.php');
        exit();

    
    }

	

	

}


$template = 'login';
include 'layout.phtml';

?>