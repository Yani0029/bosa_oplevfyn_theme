<article id="article-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

  <?php print $unpublished; ?>

  <?php print render($title_prefix); ?>
  <?php if ($title && !$page): ?>
    <header>
      <?php if ($title): ?>
        <h1<?php print $title_attributes; ?>>
          <a href="<?php print $node_url; ?>" rel="bookmark"><?php print $title; ?></a>
        </h1>
      <?php endif; ?>
    </header>
  <?php endif; ?>
  <?php print render($title_suffix); ?>

  <?php if ($display_submitted): ?>
    <footer class="submitted<?php $user_picture ? print ' with-user-picture' : ''; ?>">
      <?php print $user_picture; ?>
      <p class="author-datetime"><?php print $submitted; ?></p>
    </footer>
  <?php endif; ?>
  
  <div<?php print $content_attributes; ?>>
  <?php
    hide($content['comments']);
    hide($content['links']);
    print render($content);
  ?>
  </div>
      
  <?php if (!empty($content['links']['terms'])): ?>
    <nav class="terms"><?php print render($content['links']['terms']); ?></nav>
  <?php endif;?>
  
  <?php if (!empty($content['links'])): ?>
    <nav class="links"><?php print render($content['links']); ?></nav>
  <?php endif; ?>

  <?php print render($content['comments']); ?>
  
</article>