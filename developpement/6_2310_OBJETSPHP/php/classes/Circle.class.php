
<?php

class Circle extends Shape {

	public $r;
	public $stroke;
	
    
    
    public function __construct($x, $y,$r, $stroke, $fill, $opacity)
	{
    	
        parent::__construct($x, $y, $fill, $opacity);
		
		$this->r=$r;
		$this->stroke=$stroke;

		

	}
    

	public function setSize($width, $height) {
		$this->width = $width;
		$this->height = $height ;
	}

	

}



?>