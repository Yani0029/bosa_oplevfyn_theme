<section class="panel-display panel-theme clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  
  <?php if ($content['top']): ?>
    <section class="panel-panel panel-col-first panel-col-top clearfix">
      <?php print $content['top']; ?>
    </section>
  <?php endif ?>
  
  <?php if ($content['main_content_row_1']): ?>
    <section class="panel-panel panel-row-main_content_row_1 clearfix">
      <?php print $content['main_content_row_1']; ?>
    </section>
  <?php endif ?>
  
  <?php if ($content['main_content_row_2']): ?>
    <section class="panel-panel panel-row-main_content_row_2 clearfix">
      <?php print $content['main_content_row_2']; ?>
    </section>
  <?php endif ?>
  
  <?php if ($content['main_content_row_3']): ?>
    <section class="panel-panel panel-row-main_content_row_3 clearfix">
      <?php print $content['main_content_row_3']; ?>
    </section>
  <?php endif ?>
  
  <?php if ($content['main_content_row_4']): ?>
    <section class="panel-panel panel-row-main_content_row_4 clearfix">
      <?php print $content['main_content_row_4']; ?>
    </section>
  <?php endif ?>
  
  <?php if ($content['bottom_row']): ?>
    <section class="panel-panel panel-col-bottom-row clearfix">
      <?php print $content['bottom_row']; ?>
    </section>
  <?php endif ?>
  
</section>
