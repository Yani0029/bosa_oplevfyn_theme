<section class="panel-display panel-threecol_25_50_25_sep clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>

  <?php if ($content['nav']): ?>
    <section class="panel-panel panel-col-nav clearfix layout-cols-4">
        <?php print $content['nav']; ?>
    </section>
  <?php endif ?>


  <?php if ($content['title']): ?>
    <section class="panel-panel panel-col-first panel-col-title clearfix layout-cols-4">
      <div class="inside">
        <?php print $content['title']; ?>
      </div>
    </section>
  <?php endif ?>
  
  <?php if ($content['top']): ?>
    <section class="panel-panel panel-col-first panel-col-top clearfix layout-cols-4">
      <div class="inside">
        <?php print $content['top']; ?>
      </div>
    </section>
  <?php endif ?>
 
  <?php if ($content['main_content_col_1'] || $content['main_content_col_2'] || $content['main_content_col_3'] ): ?>
    <section class="panel-panel-wrapper panel-col-main-content-col-wrapper clearfix layout-cols-4">
      <div class="inside">
        <?php if ($content['main_content_col_1']): ?>
          <section class="panel-panel panel-col-main-content-col-1 panel-col-first clearfix layout-cols-1">
            <div class="inside">
              <?php print $content['main_content_col_1']; ?>
            </div>
          </section>
        <?php endif ?>

        <?php if ($content['main_content_col_2']): ?>
          <section class="panel-panel panel-col-main-content-col-2 panel-col clearfix layout-cols-2">
            <div class="inside">
              <?php print $content['main_content_col_2']; ?>
            </div>
          </section>
        <?php endif ?>

        <?php if ($content['main_content_col_3']): ?>
          <section class="panel-panel panel-col-main-content-col-3 panel-col-last clearfix layout-cols-1">
            <div class="inside">
              <?php print $content['main_content_col_3']; ?>
            </div>
          </section>
        <?php endif ?>
      </div>
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
