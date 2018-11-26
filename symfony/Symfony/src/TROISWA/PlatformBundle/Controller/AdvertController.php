<?php

namespace TROISWA\PlatformBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Generator\UrlGeneratorInterface;
use Symfony\Component\HttpFoundation\Request;
use TROISWA\PlatformBundle\Entity\Advert;


class AdvertController extends Controller
{
    public function indexAction($name)
    {	
        
        /*$listAdverts = array(
          array(
            'title'   => 'Recherche développpeur Symfony',
            'id'      => 1,
            'author'  => 'Alexandre',
            'content' => 'Nous recherchons un développeur Symfony débutant sur Lyon. Blabla…',
            'date'    => new \Datetime()),
          array(
            'title'   => 'Mission de webmaster',
            'id'      => 2,
            'author'  => 'Hugo',
            'content' => 'Nous recherchons un webmaster capable de maintenir notre site internet. Blabla…',
            'date'    => new \Datetime()),
          array(
            'title'   => 'Offre de stage webdesigner',
            'id'      => 3,
            'author'  => 'Mathieu',
            'content' => 'Nous proposons un poste pour webdesigner. Blabla…',
            'date'    => new \Datetime())
        );
        */
        
        $repository = $this->getDoctrine()->getManager()->getRepository('TROISWAPlatformBundle:Advert');
        
        $listAdverts = $repository->findAll();

        var_dump($repository);
        var_dump($listAdverts);

        $content = $this->get('templating')->render('TROISWAPlatformBundle:Advert:index.html.twig', ["nom" => $name, 'listAdverts'=> $listAdverts]);


        return new Response($content);

    }

    public function homeAction()
    {   
        
        $content = $this->get('templating')->render('TROISWAPlatformBundle:Advert:home.html.twig');



        return new Response($content);

    }    

    public function AddAction()
    {   
        
        $advert = new Advert();
        
        $advert->setTitle('Recherche développeur Symfony.');
        $advert->setAuthor('Alexandre');
        $advert->setContent("Nous recherchons un développeur Symfony débutant sur Lyon. Blabla…");



        $em = $this->getDoctrine()->getManager();

        $em->persist($advert);

        //$em->detach($advert);  retire $avdert du persist
        //$em->clear();  vide entièrement persist
        //var_dump($em->contains($comment)); // Affiche false dit si il y a $comment persisté

        $em->flush();


        return $this->render('TROISWAPlatformBundle:Advert:add.html.twig');

    }   

    public function viewAction($id)
    {   
        
        $repository = $this->getDoctrine()->getManager()->getRepository('TROISWAPlatformBundle:Advert');
        
        $advert = $repository->find($id);

    
        
        return $this->render('TROISWAPlatformBundle:Advert:view.html.twig', array(
          'advert' => $advert
        ));
        

    }   

    public function EditAction($id)
    {   
        
       $advert = array(
          'title'   => 'Recherche développpeur Symfony',
          'id'      => $id,
          'author'  => 'Alexandre',
          'content' => 'Nous recherchons un développeur Symfony débutant sur Lyon. Blabla…',
          'date'    => new \Datetime()
        );

        return $this->render('TROISWAPlatformBundle:Advert:edit.html.twig', array(
          'advert' => $advert
        ));


        return new Response($content);

    }   

    public function DeleteAction($id)
    {   
        
        $content = $this->get('templating')->render('TROISWAPlatformBundle:Advert:delete.html.twig',['id' => 125]);


        return new Response($content);

    }    
    
}



?>