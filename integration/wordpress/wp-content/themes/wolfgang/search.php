   <?php get_header();?>
    <main>
    <?php echo 'votre recherche:' ?>
    <?php echo get_search_query(); ?>
      <?php
           if(have_posts()):
             while(have_posts()):
                 the_post();
                 echo'<article class="item-product">';
                 get_template_part('template-parts/content','page');
                 echo'</article>';
             endwhile;?>  
             <div class="next-previous">
           <?php
           previous_posts_link();
            next_posts_link();
            else: ?> <h2> nononon </h2>  

            </div><?php
           endif;
           wp_reset_query();
        ?>
    </main>
    <?php wp_footer(); ?>
    <?php wp_nav_menu(array('theme_location'=>'secondary')); ?>
    <small> <?php bloginfo(description) ?> </small>
  </body>
</html>
