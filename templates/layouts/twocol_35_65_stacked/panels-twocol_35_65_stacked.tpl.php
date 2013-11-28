<section class="panel-display panel-twocol_35_65_stacked clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  
  <?php if ($content['top']): ?>
    <section class="panel-panel panel-col-first panel-col-top clearfix layout-cols-4">
      <div class="inside">
        <?php print $content['top']; ?>
      </div>
    </section>
  <?php endif ?>
      
  <?php if ($content['main_content_col_1'] || $content['main_content_col_2'] ): ?>
    <section class="panel-panel-wrapper panel-col-main-content-2-col-wrapper clearfix">
      <?php if ($content['main_content_col_1']): ?>
        <section class="panel-panel panel-col-main-content-col-1 panel-col-first clearfix">
          <div class="inside">
            <?php print $content['main_content_col_1']; ?>
          </div>
        </section>
      <?php endif ?>

      <?php if ($content['main_content_col_2']): ?>
        <section class="panel-panel panel-col-main-content-col-2 panel-col-last clearfix">
          <div class="inside">
            <?php print $content['main_content_col_2']; ?>
          </div>
        </section>
      <?php endif ?>
    </section>
  <?php endif ?>
  
  <?php if ($content['bottom_row']): ?>
    <section class="panel-panel panel-col-bottom-row clearfix layout-cols-4">
      <div class="inside">
        <?php print $content['bottom_row']; ?>
      </div>
    </section>
  <?php endif ?>
  
</section>
