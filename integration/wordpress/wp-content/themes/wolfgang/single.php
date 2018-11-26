  <?php get_header('single'); ?>

  <main>
  <?php echo 'single' ?>
    <section class=products>
      <?php
     
      if (have_posts()):
        while (have_posts()):
          the_post();
          echo '<article class="item-product">';
          get_template_part('template-parts/content','single');
          echo '</article>';

        endwhile;
        ?> <div class="pages"> <?php
        previous_post_link();
        next_post_link();
         ?> </div> <?php
      endif;
      wp_reset_query();
      ?>
    </section>
  </main>

  <?php get_footer(); ?>

