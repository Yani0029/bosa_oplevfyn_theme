<section class="panel-display panel-threecol_50_25_25 clearfix" <?php if (!empty($css_id)) { print "id=\"$css_id\""; } ?>>
  
  <?php if ($content['top']): ?>
    <section class="panel-panel panel-col-first panel-col-top clearfix layout-cols-4">
      <div class="inside">
        <?php print $content['top']; ?>
      </div>
    </section>
  <?php endif ?>
  
  <?php if ($content['main_content']): ?>
    <section class="panel-panel panel-col-main-content clearfix layout-cols-4">
      <div class="inside">
        <?php print $content['main_content']; ?>
      </div>
    </section>
  <?php endif ?>
  

  
  <?php if ($content['main_content_col_1'] || $content['main_content_col_2'] || $content['main_content_col_3'] || $content['main_content_col_1_bottom'] || $content['main_content_col_2_bottom'] ): ?>
    <section class="panel-panel-wrapper panel-col-main-content-col-wrapper clearfix layout-cols-4">
      <div class="inside">
        <?php if ($content['main_content_col_3']): ?>
          <section class="panel-panel panel-col-main-content-col-3 panel-col-last clearfix fright layout-cols-1">
            <div class="inside">
              <?php print $content['main_content_col_3']; ?>
            </div>
          </section>
        <?php endif ?>
        <?php if ($content['main_content_col_1'] || $content['main_content_col_2'] || $content['main_content_col_1_bottom'] || $content['main_content_col_2_bottom'] ): ?>
          <section class="panel-panel-wrapper panel-col-main-content-2-col-wrapper clearfix layout-cols-3">
            <div class="inside">
              <?php if ($content['main_content_col_1']): ?>
                <section class="panel-panel panel-col-main-content-col-1 panel-col-first clearfix layout-cols-2">
                  <div class="inside">
                    <?php print $content['main_content_col_1']; ?>
                  </div>
                </section>
              <?php endif ?>

              <?php if ($content['main_content_col_2']): ?>
                <section class="panel-panel panel-col-main-content-col-2 panel-col clearfix layout-cols-1">
                  <div class="inside">
                    <?php print $content['main_content_col_2']; ?>
                  </div>
                </section>
              <?php endif ?>


              <?php if ($content['main_content_col_1_bottom'] || $content['main_content_col_2_bottom'] ): ?>
                <section class="panel-panel-wrapper panel-col-main-content-2-col-wrapper-bottom clearfix">
                  <?php if ($content['main_content_col_1_bottom']): ?>
                    <section class="panel-panel panel-col-main-content-col-1-bottom panel-col-first clearfix layout-cols-2">
                      <div class="inside">
                        <?php print $content['main_content_col_1_bottom']; ?>
                      </div>
                    </section>
                  <?php endif ?>

                  <?php if ($content['main_content_col_2_bottom']): ?>
                    <section class="panel-panel panel-col-main-content-col-2-bottom panel-col clearfix layout-cols-1">
                      <div class="inside">
                        <?php print $content['main_content_col_2_bottom']; ?>
                      </div>
                    </section>
                  <?php endif ?>
                </section>
              <?php endif ?>
            </div>
        </section>

        <?php endif ?>
        
        <?php if ($content['main_content_bottom']): ?>
          <section class="panel-panel panel-main-content-bottom panel-col-last clearfix layout-cols-3">
            <div class="inside">
              <?php print $content['main_content_bottom']; ?>
            </div>
          </section>
        <?php endif ?>


      </div>
    </section>
  <?php endif ?>
  
  <?php if ($content['bottom_row']): ?>
    <section class="panel-panel panel-col-bottom-row clearfix layout-cols-4">
      <div class="inside">
        <section class="panel-panel panel-col-bottom-row-left panel-col clearfix layout-cols-4">
          <div class="inside">
            <?php print $content['bottom_row']; ?>
          </div>
        </section>
      </div>
    </section>
  <?php endif ?>
  
</section>
