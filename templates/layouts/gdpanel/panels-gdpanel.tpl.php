<section class="panel-display panel-gdpanel clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  
  <?php if ($content['top']): ?>
    <section class="panel-panel panel-col-first panel-col-top clearfix layout-cols-4">
      <?php print $content['top']; ?>
    </section>
  <?php endif ?>
      
  <?php if ($content['main_content']): ?>
	<section class="panel-panel panel-col-main-content clearfix layout-cols-4">
	  <?php print $content['main_content']; ?>
	</section>
  <?php endif ?>

  <?php if ($content['bottom_row']): ?>
    <section class="panel-panel panel-col-bottom-row-full-width clearfix layout-cols-4">
      <div class="inner">
        <?php print $content['bottom_row']; ?>
      </div>
    </section>
  <?php endif ?>

</section>
