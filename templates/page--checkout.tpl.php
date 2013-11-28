
<div id="page" class="container">

  <header class="clearfix" role="banner">

    <section class="above-header header-section">
      <div class="inside clearfix">
        <?php print render($page['above-header']); ?>
      </div>
    </section>

    <section class="mainmenu header-section">
      <div class="inside clearfix">
        <?php if ($linked_site_logo): ?>
          <div id="logo"><?php print $linked_site_logo; ?></div>
        <?php endif; ?>

        <?php if ($site_name || $site_slogan): ?>
          <hgroup<?php if (!$site_slogan && $hide_site_name): ?> class="<?php print $visibility; ?>"<?php endif; ?>>
            <?php if ($site_name): ?>
              <h1 id="site-name"<?php if ($hide_site_name): ?> class="<?php print $visibility; ?>"<?php endif; ?>><?php print $site_name; ?></h1>
            <?php endif; ?>
            <?php if ($site_slogan): ?>
              <h2 id="site-slogan"><?php print $site_slogan; ?></h2>
            <?php endif; ?>
          </hgroup>
        <?php endif; ?>

        <?php print render($page['header']); ?>
      </div>
    </section>

  </header>



      <?php $tag = $title ? 'section' : 'div'; ?>
      <<?php print $tag; ?> id="main-content" role="main">
        <?php print $messages; ?>
        <?php print render($title_prefix); ?>
        <?php if ($title || $primary_local_tasks || $secondary_local_tasks || $action_links = render($action_links)): ?>
          <header>
            <?php if (!$is_front && $title):?>
              <div id="page-title"><?php print $title; ?> </div><span class="button-wrapper checkout-continue"><a href="/"><?php print t('Continue Shopping'); ?></a>
            <?php endif; ?>
            <?php if ($primary_local_tasks || $secondary_local_tasks || $action_links): ?>
              <div id="tasks">
                <?php if ($primary_local_tasks): ?>
                  <ul class="tabs primary clearfix"><?php print render($primary_local_tasks); ?></ul>
                <?php endif; ?>
                <?php if ($secondary_local_tasks): ?>
                  <ul class="tabs secondary clearfix"><?php print render($secondary_local_tasks); ?></ul>
                <?php endif; ?>
                <?php if ($action_links = render($action_links)): ?>
                  <ul class="action-links clearfix"><?php print $action_links; ?></ul>
                <?php endif; ?>
               </div>
            <?php endif;?>
          </header>
        <?php endif; ?>
        <?php print render($title_suffix);?>

        <div id="content" class="shop panel-pane section-box-865"><?php print render($page['content']); ?></div>

        <?php print $feed_icons; ?>


      <?php if ($page['sidebar_right']): ?>
        <div id="sidebar-right" class="column sidebar section-box-279"><div class="section">
          <?php print render($page['sidebar_right']); ?>
        </div></div> <!-- /.section, /#sidebar-first -->
      <?php endif; ?>
        <div class="clearfix"></div>
  </<?php print $tag; ?>>

  <?php if ($page['above_footer']): ?>
    <section class="above-footer">
      <?php print render($page['above_footer']); ?>
    </section>
  <?php endif; ?>
  
  <?php if ($page['footer']): ?>
    <footer role="contentinfo">
      <div class="inner clearfix">
        <div class="footer-logo">
          <?php if ($site_name): ?>
                <?php print $site_name; ?>
          <?php endif; ?>
        </div>
        <?php print render($page['footer']); ?>
      </div>
    </footer>
  <?php endif; ?>

  <?php print theme('share_close', array('content' => $page['gallery_overlay']));?> 

</div>
