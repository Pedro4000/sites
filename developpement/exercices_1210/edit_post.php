<?php 


session_start();

include 'application/bdd_connection.php';

$articleId=$_GET['id'];

if(empty($_POST) == false) {

	$titre=$_POST['title'];
	$contenu=$_POST['contents'];

	$query = $pdo->prepare

	(
		'UPDATE `Post` SET `Title`=?,`Content`=? WHERE Id=?'
	);

	$query->execute([$titre,$contenu,$articleId]);

	$orderdetails = $query->fetchAll(PDO::FETCH_ASSOC);

	header('Location: index.php');
	exit();

}


$template='edit_post';
include 'layout.phtml';

?>