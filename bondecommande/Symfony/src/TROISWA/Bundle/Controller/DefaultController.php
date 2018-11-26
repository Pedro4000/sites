<?php

namespace TROISWA\Bundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\Request;
use TROISWA\PlatformBundle\Entity\Advert;

class DefaultController extends Controller
{
    public function indexAction()
    {
        $repository = $this->getDoctrine()->getManager()->getRepository('CommandeBundle:Orders');

        
        $listAdverts = $repository->findAll();

        $content = $this->get('templating')->render('CommandeBundle:Default:index.html.twig', ['listAdverts'=> $listAdverts]);


        return new Response($content);
    }


    public function orderAction($id)

    {

        $repository = $this->getDoctrine()->getManager()->getRepository('CommandeBundle:Orders');

        
        $listAdverts = $repository->find($id);

        $content = $this->get('templating')->render('CommandeBundle:Default:index.html.twig', ['listAdverts'=> $listAdverts]);


        return new Response($content);

	}



}
