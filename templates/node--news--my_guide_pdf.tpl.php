<?php
  $title = $node->title;
  $body = isset($node->body['und'][0]['value']) ? $node->body['und'][0]['value'] : '';
  $image = isset($node->field_image['und'][0]['uri']) ? image_style_url('medium', $node->field_image['und'][0]['uri']) : '';
?>
<body>
<article>
  <div class="title">
      <?php print $title; ?>
  </div>
  <?php if (!empty($image)) : ?>
  <div class="images-wrapper">
    <img src="<?php print $image ?>" />
  </div>
  <?php endif; ?>
  <div class="info-wrapper <?php if (!empty($image)) : ?> widthfixed <?php endif; ?>">
    <div class="info-fields">
      
      <!-- ITEM START -->
      <div class="info-field-wrapper description">
        <div class="info-label">
          <?php print t('Description:'); ?>
        </div>
        <div class="info-field">
          <?php print $body; ?>
        </div>
      </div>
      <!-- ITEM END -->     
      
    </div>
  </div>
  
</article>
  
</body>