<?php
  $title = $node->title;
  $summary = isset($node->field_body_summary['und'][0]['safe_value']) ? $node->field_body_summary['und'][0]['safe_value'] : '';
  $body = isset($node->body['und'][0]['value']) ? $node->body['und'][0]['value'] : '';
  $image = isset($node->field_image['und'][0]['uri']) ? image_style_url('medium', $node->field_image['und'][0]['uri']) : '';
  
  $coordinates = array(
    'longtitude' => isset($product['product']['locationList']['location']['geoLocation']['longitude']) ? $product['product']['locationList']['location']['geoLocation']['longitude'] : '',
    'latitude' => isset($product['product']['locationList']['location']['geoLocation']['latitude']) ? $product['product']['locationList']['location']['geoLocation']['latitude'] : '',
  );

  $map = '';
  if (isset($coordinates['longtitude'], $coordinates['latitude'])) {
    $map = "http://maps.googleapis.com/maps/api/staticmap?center=$coordinates[latitude],$coordinates[longtitude]&zoom=14&size=500x400&sensor=false";
  }
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
      <div class="info-field-wrapper summary">
        <div class="info-label">
          <?php print t('Summary:'); ?>
        </div>
        <div class="info-field">
          <?php print $summary; ?>
        </div>
      </div>
      <!-- ITEM END -->  
      
      <!-- ITEM START -->
      <div class="info-field-wrapper">
        <div class="info-label">
          <?php print t('Coordinates:'); ?>
        </div>
        <div class="info-field">
          <?php print $coordinates; ?>
        </div>
      </div>
      <!-- ITEM END -->
      
      <!-- ITEM START -->
      <div class="info-field-wrapper map">
        <div class="info-label">
          <?php print t('Map:'); ?>
        </div>
        <div class="info-field">
          <?php print '<img src="' . $map . '" width="350"/>'; ?>
        </div>
      </div>
      <!-- ITEM END -->
      
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