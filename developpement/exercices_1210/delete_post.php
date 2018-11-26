<?php 


session_start();


if(array_key_exists('user', $_SESSION) == false)
 { 


include 'application/bdd_connection.php';

$articleId=$_GET['id'];

var_dump($articleId);

$query = $pdo->prepare
(
	'DELETE FROM `Post` WHERE Id=?'
);

$query->execute([$articleId]);

$articlesaussi = $query->fetchAll(PDO::FETCH_ASSOC);


header('Location: admin.php');
exit();

}

?>

<h2>fdjsifdsjofs</h2>
