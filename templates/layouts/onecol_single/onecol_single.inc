<?php

// Plugin definition
$plugin = array(
  'title' => t('One Column Single'),
  'category' => t('Columns: 1'),
  'icon' => 'onecol_single.png',
  'theme' => 'panels_onecol_single',
  'css' => 'onecol_single.css',
  'regions' => array(
    'top' => t('Top'),
    'main_content' => t('Main Content'),
    'col_4' => t('4 Cols'),
    'bottom_row' => t('Bottom'),
  ),
);
