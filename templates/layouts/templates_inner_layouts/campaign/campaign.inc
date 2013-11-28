<?php

// Plugin definition
$plugin = array(
  'title' => t('campaign'),
  'category' => t('Inner Templates'),
  'icon' => 'campaign.png',
  'theme' => 'panels-campaign',
  'css' => 'campaign.css',
  'regions' => array(
    'top' => t('Top'),
    'main_content_row_1' => t('Main Content Row 1 (25 - 50 - 25)'),
    'main_content_row_2' => t('Main Content Row 2 - White banners'),
    'main_content_row_3' => t('Main Content Row 3 (25 - 25 - 50)'),
    'main_content_row_4' => t('Main Content Row 4 (25 - 25 - 25 - 25)'),
    'bottom_row' => t('Bottom'),
  ),
);
