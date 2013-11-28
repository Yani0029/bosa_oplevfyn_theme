<section class="panel-display panel-tema-layout clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>

  <?php if ($content['nav']): ?>
    <section class="panel-panel panel-col-nav clearfix layout-cols-4">
        <?php print $content['nav']; ?>
    </section>
  <?php endif ?>

  <?php if ($content['top_left'] || $content['top_right'] ||  $content['top'] ): ?>
    <section class="panel-col-top-wrapper panel-panel-wrapper clearfix">
        <?php if ($content['top']): ?>
          <section class="panel-panel panel-col-first panel-col-top clearfix layout-cols-4">
            <div class="inside">
              <?php print $content['top']; ?>
            </div>
          </section>
        <?php endif ?>
        <?php if ($content['top_left']): ?>
          <section class="panel-panel panel-col-first panel-col-top-left clearfix layout-cols-2">
              <?php print $content['top_left']; ?>
          </section>
        <?php endif ?>
        <?php if ($content['top_right']): ?>
          <section class="panel-panel panel-col-last panel-col-top-right clearfix layout-cols-2">
              <?php print $content['top_right']; ?>
          </section>
        <?php endif ?>
    </section>
  <?php endif ?>

  <?php if ($content['main_content']): ?>
    <section class="panel-panel panel-col-main-content clearfix layout-cols-4">
      <div class="inside">
        <?php print $content['main_content']; ?>
      </div>
    </section>
  <?php endif ?>
  
  <?php if ($content['main_content_col_1'] || $content['main_content_col_2'] || $content['main_content_col_3'] ): ?>
    <section class="panel-panel-wrapper panel-col-main-content-col-wrapper clearfix layout-cols-4">
    <div class="inside">              
      <?php if ($content['main_content_col_1'] || $content['main_content_col_2'] ): ?>
        <section class="panel-panel-wrapper panel-col-main-content-2-col-wrapper layout-cols-3">
          <div class="inside">
            <?php if ($content['main_content_col_1']): ?>
              <section class="panel-panel panel-col-main-content-col-1 panel-col-first clearfix layout-cols-2">
                <div class="inside">
                  <?php print $content['main_content_col_1']; ?>
                </div>
              </section>
            <?php endif ?>

            <section class="panel-panel panel-col-main-content-col-2 panel-col clearfix layout-cols-1">
              <div class="inside">
                <?php if ($content['main_content_col_2']): ?>
                 <?php print $content['main_content_col_2']; ?>
                <?php endif ?>
              </div>
            </section>
          </div>
        </section>
      <?php endif ?>

      <?php if ($content['main_content_col_3']): ?>
        <section class="panel-panel panel-col-main-content-col-3 panel-col-last clearfix fright layout-cols-1">
          <div class="inside">
            <?php print $content['main_content_col_3']; ?>
          </div>
        </section>
      <?php endif ?>
    </div>  
    </section>
  <?php endif ?>

  <?php if ($content['col_4']): ?>
    <section class="panel-panel panel-col-col-4 clearfix layout-cols-4">
      <div class="inside">
        <?php print $content['col_4']; ?>
      </div>
    </section>
  <?php endif ?>
  
  <?php if ($content['content_bottom_left'] || $content['content_bottom_right'] ): ?>
    <section class="panel-col-content-bottom-wrapper panel-panel-wrapper clearfix">
      <?php if ($content['content_bottom_left']): ?>
        <section class="panel-panel panel-col-first panel-col-content-bottom-left clearfix layout-cols-2">
            <?php print $content['content_bottom_left']; ?>
        </section>
      <?php endif ?>
      <?php if ($content['content_bottom_right']): ?>
        <section class="panel-panel  panel-col-last panel-col-content-bottom-right clearfix layout-cols-2">
            <?php print $content['content_bottom_right']; ?>
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
