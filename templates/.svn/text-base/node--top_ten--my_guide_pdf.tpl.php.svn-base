<?php

  $title = $node->title;
  $age = isset($node->field_age['und'][0]['value']) ? $node->field_age['und'][0]['value'] : '';
  $area = isset($node->field_area['und'][0]['value']) ? $node->field_area['und'][0]['value'] : '';
  
  if (isset($node->field_profession['und'][0]['tid'])) {
    $profession_term = taxonomy_term_load($node->field_profession['und'][0]['tid']);
    $profession = $profession_term->name;
  }
  else {
    $profession = '';
  }
  
  $website = isset($node->field_website['und'][0]['url']) ? $node->field_website['und'][0]['url'] : '';
  $body = isset($node->body['und'][0]['value']) ? $node->body['und'][0]['value'] : '';
 ?>
<body>
<article>

  <div class="info-wrapper">
    <div class="title">
      <?php print $title; ?>
    </div>
    <div class="info-fields">
      
      <!-- ITEM START -->
      <div class="info-field-wrapper">
        <div class="info-label">
          <?php print t('Age:'); ?>
        </div>
        <div class="info-field">
          <?php print $age; ?>
        </div>
      </div>
      <!-- ITEM END -->
      
      <!-- ITEM START -->
      <div class="info-field-wrapper">
        <div class="info-label">
          <?php print t('Area:'); ?>
        </div>
        <div class="info-field">
          <?php print $area; ?>
        </div>
      </div>
      <!-- ITEM END -->
      
      <!-- ITEM START -->
      <div class="info-field-wrapper">
        <div class="info-label">
          <?php print t('Profession:'); ?>
        </div>
        <div class="info-field">
          <?php print $profession; ?>
        </div>
      </div>
      <!-- ITEM END -->
      
      <!-- ITEM START -->
      <div class="info-field-wrapper">
        <div class="info-label">
          <?php print t('Website:'); ?>
        </div>
        <div class="info-field">
          <?php print $website; ?>
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