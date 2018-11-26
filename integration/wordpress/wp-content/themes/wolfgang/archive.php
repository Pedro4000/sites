  <?php get_header(); ?>

  <main>

    <section class="products">
      <?php

     
      if (have_posts()):
        while (have_posts()):
          the_post();
          echo '<article class="item-product">';
          get_template_part('template-parts/content','archive');
          echo '</article>';

        endwhile; 
        ?> <div class="pages"> <?php
        previous_posts_link();
        next_posts_link();
       ?> </div> <?php

      endif;
      wp_reset_query();
      ?>
    </section>
  </main>

  <?php get_footer(); ?>

