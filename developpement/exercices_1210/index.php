<?php 


session_start();


if( array_key_exists('user', $_SESSION)) {

	echo '<p>Bonjour '.$_SESSION['user']['FirstName'].' '.$_SESSION['user']['LastName'].'</p>';

}



include 'application/bdd_connection.php';

$query = $pdo->prepare

(
	'SELECT Post.Id, Title, Content, Author_Id, Categorie_Id, Author.FirstName, Author.LastName, Categorie_Id, Category.Name, CreationTimestamp FROM Post INNER JOIN Author ON Author.Id=Post.Author_Id INNER JOIN Category ON Category.Id=Post.Categorie_Id'
);

$query->execute();

$articles = $query->fetchAll(PDO::FETCH_ASSOC);


$template = 'index';
include 'layout.phtml';


?>