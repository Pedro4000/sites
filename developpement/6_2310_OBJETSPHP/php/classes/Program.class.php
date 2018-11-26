
<?php

class Program {

	private $rectangle;
	private $circle;

    public function __construct(Rectangle $rectangle,Circle $circle , Ellipse $ellipse, Triangle $triangle)
	{

		$this->rectangle = $rectangle;
		$this->circle = $circle;
		$this->ellipse=$ellipse;
		$this->triangle=$triangle;

	}
    
    public function drawRectangle() {
    	
        return '<rect x="'.$this->rectangle->x.'" y="'.$this->rectangle->y.'" width="'.$this->rectangle->width.'" height="'.$this->rectangle->height.'" fill="'.$this->rectangle->fill.'" opacity="'.$this->rectangle->opacity.'"></rect>';
    
    
    }

	public function drawCircle() {
	    	
	    return '<circle cx="'.$this->circle->x.'" cy="'.$this->circle->y.'" r="'.$this->circle->r.'"stroke="'.$this->circle->stroke.'" fill="'.$this->circle->fill.'" opacity="'.$this->circle->opacity.'"></circle>';
	    
	    
	}
	 
	public function drawEllipse() {
	    	
	    return '<ellipse cx="'.$this->ellipse->x.'" cy="'.$this->ellipse->y.'" rx="'.$this->ellipse->rx.'" ry="'.$this->ellipse->ry.'"stroke="'.$this->ellipse->stroke.'" fill="'.$this->ellipse->fill.'" opacity="'.$this->ellipse->opacity.'"></ellipse>';
	    
	}


	public function drawTriangle() {
    	
    return '<polygon points="'.$this->triangle->a.','.$this->triangle->b.' '.$this->triangle->c.','.$this->triangle->d.' '.$this->triangle->e.','.$this->triangle->f.' 210,50 65,320, 451,552 " style="fill:lime;stroke:purple;stroke-width:1" />';
    
}
    

    public function drawAll() { 
    	$result = [];
        array_push( $result, $this->drawRectangle() );
        array_push( $result, $this->drawCircle() );
        array_push( $result, $this->drawEllipse() );
        array_push( $result, $this->drawTriangle() );
     	return $result;

    }
}


?>