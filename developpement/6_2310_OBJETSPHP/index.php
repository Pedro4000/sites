<?php

include 'php/classes/Shape.class.php';

include 'php/classes/Rectangle.class.php';

include 'php/classes/Circle.class.php';

include 'php/classes/Ellipse.class.php';

include 'php/classes/Triangle.class.php';

include 'php/classes/Program.class.php';

$rectangle = new Rectangle('50', '20', '200', '100', 'firebrick', '1');

$circle = new Circle('50', '120', '50', 'black', 'black', '1');

$ellipse = new Ellipse('550', '420', '50', '80', 'Teal', 'Teal', '1');

$triangle = new Triangle('200', '10', '400', '500', '160', '210');




$program = new Program($rectangle, $circle, $ellipse, $triangle);


$results = $program->drawAll();

include 'index.phtml';

?>
