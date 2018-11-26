
<?php

class Ellipse extends Shape {

	public $rx;
	public $stroke;
	public $ry;
	
    
    
    public function __construct($x, $y,$rx,$ry, $stroke, $fill, $opacity)
	{
    	
        parent::__construct($x, $y, $fill, $opacity);
		
		$this->rx=$rx;
		$this->ry=$ry;
		$this->stroke=$stroke;

		

	}
    

	public function setSize($width, $height) {
		$this->width = $width;
		$this->height = $height ;
	}

	

}



?>