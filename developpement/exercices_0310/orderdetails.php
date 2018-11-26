<?php


$ordernumber=$_GET['id'];

$pdo = new PDO('mysql:host=localhost;dbname=classicmodels', 'root', 'troiswa');

$pdo->exec('SET NAMES UTF8');

$query = $pdo->prepare

(
	'SELECT products.productName, priceEach, quantityOrdered, (priceEach*quantityOrdered) AS Total, customers.customerName, customers.contactLastName, customers.contactFirstName, customers.addressLine1, customers.city
FROM orderdetails 
INNER JOIN products ON orderdetails.productCode=products.productCode 
INNER JOIN orders ON orderdetails.orderNumber=orders.orderNumber
INNER JOIN customers ON orders.customerNumber=customers.customerNumber WHERE orders.orderNumber= ?'
);

$query->execute([$ordernumber]);

$orderdetails = $query->fetchAll(PDO::FETCH_ASSOC);


	$somme=0;
	$toto=0;
foreach ($orderdetails as $index => $somme) {
	$somme=(float)$somme['Total'];
	$toto=$toto+$somme;
}




include 'orderdetails.phtml';

?>