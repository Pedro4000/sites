<?php
session_start();


$user = [
	'FirstName' => 'Thib',
    'LastName' => 'Monesma',
	'Email' => 'thib@gmail.com',
    'Password' => 'azerty' 
];


if(empty($_POST) == false ) {
	var_dump($_POST);
    
    include 'config.php';
    
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
    
    var_dump($user);
    
    
    
    if( $user['Password'] == $_POST['password'] ) {
    	
        $_SESSION['user']['FirstName'] = $user['FirstName'];
		$_SESSION['user']['LastName'] = $user['LastName'];
        $_SESSION['user']['Email'] = $user['Email'];
        
        echo 'Connecté';
        
        var_dump($_SESSION);
    
    }
}

?>


<a href="index.php">index</a>

<?php if (array_key_exists('user', $_SESSION) == false) {?>

<form id="login-form" action="login.php" method="POST">
	<label>Email</label>
	<input type="text" name="email" />
    
    <label>Password</label>
	<input type="password" name="password" />

	<input type="submit" value="envoyer" />
</form>

<?php } else {?>

<p>Vous êtes connecté</p>
<a href="logout.php">logout</a>

<?php } ?>
