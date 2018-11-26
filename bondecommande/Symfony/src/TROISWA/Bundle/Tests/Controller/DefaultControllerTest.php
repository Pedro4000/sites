<?php

namespace TROISWA\Bundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    public function testIndex()
    {
        $repository = $this->getDoctrine()->getManager()->getRepository('TROISWAPCommandBundle:Default');

        var_dump($repository);
        
        $listAdverts = $repository->findAll();

        var_dump($listAdverts);

        $content = $this->get('templating')->render('TROISWAPCommandBundle:Default:index.html.twig', ["nom" => $name, 'listAdverts'=> $listAdverts]);


        return new Response($content);
    }
}
