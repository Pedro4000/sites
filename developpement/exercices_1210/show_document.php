<?php 


session_start();

include 'application/bdd_connection.php';


//// affichage de l'article

$articleId=$_GET['id'];


$query = $pdo->prepare

(
	'SELECT Post.Id, Title, Content, Author_Id, Categorie_Id, Author.FirstName, Author.LastName, Categorie_Id, Category.Name, CreationTimestamp FROM Post INNER JOIN Author ON Author.Id=Post.Author_Id INNER JOIN Category ON Category.Id=Post.Categorie_Id WHERE Post.Id=?'
);

$query->execute([$articleId]);

$articledetail = $query->fetchAll(PDO::FETCH_ASSOC);



/// SAUVEGARDE DU COMMENTAIRE 


if(empty($_POST) == false) {

$pseudo=$_POST['nickName'];
$contenu=$_POST['contents'];

$query = $pdo->prepare

(
	'INSERT INTO `Comments`(`Pseudo`, `Comment`,`Article_Id`) VALUES (?,?,?)'
);

$query->execute([$pseudo,$contenu,$articleId]);

$orderdetails = $query->fetchAll(PDO::FETCH_ASSOC);
}




/// affichage du commentaire


$query = $pdo->prepare

(
	'SELECT * FROM `Comments` WHERE Article_Id=?'
);

$query->execute([$articleId]);

$comments = $query->fetchAll(PDO::FETCH_ASSOC);


$template='show_document';
include 'layout.phtml';

?>