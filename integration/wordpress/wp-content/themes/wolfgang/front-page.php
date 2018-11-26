  <?php get_header(); ?>

  <main>
    <section class=products>
      <?php
      $args = array(
        'category_name' => 'moto',
        'posts_per_page' => 4
      );
      query_posts($args);
      if (have_posts()):
        while (have_posts()):
          the_post();
          echo '<article class="item-product">';
          get_template_part('template-parts/content','home');
          echo '</article>';

        endwhile;
      endif;
      wp_reset_query();
      ?>
    </section>
    <section class="info">
      <h2 class="section-title">Pour nous connaitre <p></p><span>plus en détail</span></h2>
        <div class="social">
        <?php get_sidebar(); ?>
        </div>
        <div class="video">
        <?php get_sidebar('video'); ?>
        </div>
    </section>
  </main>

  <?php get_footer(); ?>

