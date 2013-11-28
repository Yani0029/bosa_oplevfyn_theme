<section class="panel-display panel-twocol_25_75_stacked clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
    <?php if ($content['nav']): ?>
      <section class="panel-panel panel-col-nav clearfix layout-cols-4">
          <?php print $content['nav']; ?>
      </section>
    <?php endif ?>
  
  <div class="inside">
    <div class="inner">

      <?php if ($content['top']): ?>
        <section class="panel-panel panel-col-first panel-col-top clearfix layout-cols-4">
          <div class="inside">
            <?php print $content['top']; ?>
          </div>
        </section>
      <?php endif ?>

      <?php if ($content['main_content_col_1'] || $content['main_content_col_2'] ): ?>
        <section class="panel-panel-wrapper panel-col-main-content-2-col-wrapper clearfix layout-cols-4">
          <div class="inside">
            <?php if ($content['main_content_col_1']): ?>
              <section class="panel-panel panel-col-main-content-col-1 panel-col-first clearfix layout-cols-1">
                <div class="inside">
                  <?php print $content['main_content_col_1']; ?>
                </div>
              </section>
            <?php endif ?>

            <?php if ($content['main_content_col_2']): ?>
              <section class="panel-panel panel-col-main-content-col-2 panel-col-last clearfix layout-cols-3">
                <div class="inside">
                  <?php print $content['main_content_col_2']; ?>
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
    </div>
  </div>
</section>
