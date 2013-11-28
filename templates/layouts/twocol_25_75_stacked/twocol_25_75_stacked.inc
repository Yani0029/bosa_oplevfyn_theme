<?php

// Plugin definition
$plugin = array(
  'title' => t('Two columns 25% 75%'),
  'category' => t('Columns: 2'),
  'icon' => 'twocol_25_75_stacked.png',
  'theme' => 'panels_twocol_25_75_stacked',
  'css' => 'twocol_25_75_stacked.css',
  'regions' => array(
    'nav' => t('Navigation'),
    'top' => t('Top'),
    'main_content_col_1' => t('Main Content Col 1'),
    'main_content_col_2' => t('Main Content Col 2'),
    'bottom_row' => t('Bottom'),
  ),
);
