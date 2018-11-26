<?php

namespace TROISWA\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;

class DefaultController extends Controller
{
    public function indexAction()
    {
        return $this->render('TROISWAPlatformBundle:Default:index.html.twig');
    }
    
    public function helloAction()
    {
    	return $this->render('TROISWAPlatformBundle:Hello:hello.html.twig');
    
    }    

    public function finderaceAction()
    {
    	return $this->render('TROISWAPlatformBundle:Finderace:finderace.html.twig');
    
    }

    public function bzzzAction()
    {
    	return $this->render('TROISWAPlatformBundle:Bzzz:bzzz.html.twig');
    
    }
        public function testAction($param)
    {
    	return $this->render('TROISWAPlatformBundle:Test:test.html.twig', ["canard" => $param]);
    
    }
}
