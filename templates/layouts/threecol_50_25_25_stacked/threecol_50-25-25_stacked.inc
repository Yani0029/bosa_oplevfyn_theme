<?php

// Plugin definition
$plugin = array(
  'title' => t('Three column 50/25/25 stacked'),
  'category' => t('Columns: 3'),
  'icon' => 'threecol_50_25_25_stacked.png',
  'theme' => 'panels_threecol_50_25_25_stacked',
  'css' => 'threecol_50_25_25_stacked.css',
  'regions' => array(
    'top' => t('Top'),
    'left' => t('Left side'),
    'middle' => t('Middle column'),
    'right' => t('Right side'),
    'bottom' => t('Bottom'),
  ),
);
