<?php

// Plugin definition
$plugin = array(
  'title' => t('Three columns 25% 50% 25%'),
  'category' => t('Columns: 3'),
  'icon' => 'threecol_25_50_25_sep.png',
  'theme' => 'panels-threecol_25_50_25_sep',
  'css' => 'threecol_25_50_25_sep.css',
  'regions' => array(
    'top' => t('Top'),
    'nav' => t('Navigation'),
    'title' => t('Title'),    
    'main_content_col_1' => t('Main Content Col 1'),
    'main_content_col_2' => t('Main Content Col 2'),
    'main_content_col_3' => t('Main Content Col 3'),
    'bottom_row' => t('Bottom'),
  ),
);
