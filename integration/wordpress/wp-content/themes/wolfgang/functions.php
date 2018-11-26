<?php

// Création de la fonction qui permet l'appel des fichiers CSS et JS;
function wolfgangAddCssJs(){
  wp_enqueue_style('moncss' , get_template_directory_uri().'/css/wolfgang.css', '', '1.5', 'all');
  wp_enqueue_script('monjs', get_template_directory_uri().'/js/wolfgang.js', '', '2.2', true);
}
add_action('wp_enqueue_scripts', 'wolfgangAddCssJs');

function wolfgangAddingMenus(){
  // on demande à utiliser le menus
  add_theme_support('menus');
  // on crée 2 emplacements (ou plus) de menus, 2 paremètre à chaque fois
  // identifant unique (en minuscules)
  // desription qu'on retrouve dabs l'adminastration des menus
  register_nav_menu('primary', 'menu primaire');
  register_nav_menu('secondary', 'menu secondaire');
}
// on appelle la fonction qui active les menus, au moment de l'initialisation du thème (init)
add_action('init', 'wolfgangAddingMenus');

// image du header
add_theme_support('custom-header');

//image à la Une
add_theme_support('post-thumbnails');


function wolfie_ajout_widgets(){
 register_sidebar(
 array(
 'name' => 'accueil social',
 'id' => 'sidebar-home',
 'class' => '',
 'description' => 'widgets de la page accueil',
 'before_widget' => '<aside>',
 'afer_widget' => '</aside>',
 'before_title' => '<h3 class="widget-title">',
 'afer_title' => '</h3>'
 )
 );

  register_sidebar(
 array(
 'name' => 'accueil social',
 'id' => 'sidebar-video',
 'class' => '',
 'description' => 'widgets de la page accueil',
 'before_widget' => '<aside>',
 'afer_widget' => '</aside>',
 'before_title' => '<h3 class="widget-title">',
 'afer_title' => '</h3>'
 )
 );




}
add_action('widgets_init', 'wolfie_ajout_widgets');



