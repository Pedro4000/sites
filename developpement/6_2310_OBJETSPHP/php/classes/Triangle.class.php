
<?php

class Triangle {

	public $r;
	public $stroke;
	
    
    
    public function __construct($a,$b,$c,$d,$e,$f)
	{
		
		$this->a=$a;
		$this->b=$b;
		$this->c=$c;
		$this->d=$d;
		$this->e=$e;
		$this->f=$f;


		

	}
    

	public function setSize($width, $height) {
		$this->width = $width;
		$this->height = $height ;
	}

	

}



?>