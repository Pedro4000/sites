<?php 



session_start();
// ALLER CHOPPER LES ECRIVAINS

include 'application/bdd_connection.php';

$query = $pdo->prepare

(
	'SELECT Id, FirstName, LastName FROM Author'
);

$query->execute();

$authors = $query->fetchAll(PDO::FETCH_ASSOC);



$query = $pdo->prepare

(
	'SELECT * FROM Category'
);

$query->execute();

$categories = $query->fetchAll(PDO::FETCH_ASSOC);





if(empty($_POST) == false) {

$titre=$_POST['title'];
$contenu=$_POST['contents'];
$auteur=$_POST['author'];
$categorie=$_POST['category'];

$query = $pdo->prepare

(
	'INSERT INTO `Post`(`Title`, `Content`, `CreationTimestamp`, `Author_Id`, `Categorie_Id`) VALUES (?,?,NOW(),?,?);'
);

$query->execute([$titre,$contenu,$auteur,$categorie]);

$orderdetails = $query->fetchAll(PDO::FETCH_ASSOC);

header('Location: index.php');
exit();

}


$template = 'add_post';
include 'layout.phtml';

?>