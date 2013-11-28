<?php

// Plugin definition
$plugin = array(
  'title' => t('Three columns 25% 25% 50%'),
  'category' => t('Columns: 3'),
  'icon' => 'threecol252550.png',
  'theme' => 'panels-threecol252550',
  'css' => 'threecol252550.css',
  'regions' => array(
    'above_top' => t('Above Top'),
    'nav' => t('Navigation'),
    'top' => t('Top'),
    'main_content_col_1' => t('Main Content Col 1'),
    'main_content_col_2' => t('Main Content Col 2'),
    'main_content_col_3' => t('Main Content Col 3'),
    'bottom_row' => t('Bottom'),
  ),
);
