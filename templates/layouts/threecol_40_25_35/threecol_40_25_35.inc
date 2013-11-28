<?php

// Plugin definition
$plugin = array(
  'title' => t('Three columns (40% 25%) 35%'),
  'category' => t('Columns: 3'),
  'icon' => 'threecol_40_25_35.png',
  'theme' => 'panels_threecol_40_25_35',
  'css' => 'threecol_40_25_35.css',
  'regions' => array(
    'background' => t('Background'),
    'top' => t('Top'),
    'main_content_col_1' => t('Main Content Col 1'),
    'main_content_col_2' => t('Main Content Col 2'),
    'main_content_col_3' => t('Main Content Col 3'),
    'bottom_row' => t('Bottom'),
  ),
);
