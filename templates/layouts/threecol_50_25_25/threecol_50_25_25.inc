<?php

// Plugin definition
$plugin = array(
  'title' => t('Three columns (50% 25%) 25%'),
  'category' => t('Columns: 3'),
  'icon' => 'threecol_50_25_25.png',
  'theme' => 'panels-threecol-50-25-25',
  'css' => 'threecol_50_25_25.css',
  'regions' => array(
    'top' => t('Top'),
    'main_content' => t('Main Content'),
    'main_content_col_1' => t('Main Content Col 1'),
    'main_content_col_2' => t('Main Content Col 2'),
    'main_content_col_1_bottom' => t('Main Content Col 1 bottom'),
    'main_content_col_2_bottom' => t('Main Content Col 2 bottom'),
    'main_content_bottom' => t('Main Content Bottom'),
    'main_content_col_3' => t('Main Content Col 3'),
    'bottom_row' => t('Bottom'),
  ),
);
