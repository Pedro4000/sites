<!DOCTYPE html>
<html lang="fr">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Wolfgang</title>
    <?php wp_head(); ?>
  </head>
  <body>
    <header class="header-main">
      <nav class="nav-main">
        <!-- <a href="index.php"><img class="logo" src='<?php header_image(); ?>' alt='image'></a> -->
        <h1> <?php bloginfo(name) ?> </h1>
        <?php wp_nav_menu(array('theme_location'=>'primary')); ?>
      </nav>
    </header>
    <main>
      <?php
      if (have_posts()):
        while (have_posts()):
          the_post();
          the_title();
          the_content();
        endwhile;
      endif;
      ?>
    </main>
    <?php wp_footer(); ?>
    <?php wp_nav_menu(array('theme_location'=>'secondary')); ?>
    <small> <?php bloginfo(description) ?> </small>
  </body>
</html>
