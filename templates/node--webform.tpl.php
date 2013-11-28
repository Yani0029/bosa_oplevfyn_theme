<article id="article-<?php print $node->nid; ?>" class="<?php print $classes; ?> clearfix"<?php print $attributes; ?>>

<?php print $unpublished; ?>


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


<?php print render($content['comments']); ?>

</article>