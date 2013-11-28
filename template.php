<?php

/**
 * Preprocess and Process Functions SEE: http://drupal.org/node/254940#variables-processor
 * 1. Rename each function and instance of "visit" to match
 *    your subthemes name, e.g. if you name your theme "footheme" then the function
 *    name will be "footheme_preprocess_hook". Tip - you can search/replace
 *    on "visit".
 * 2. Uncomment the required function to use.
 */

/* Disable aggregation of fonts.css because it breaks the site in IE8 */
//drupal_add_css( drupal_get_path('theme', 'visit') . '/css/fonts.css', array('group' => CSS_THEME, 'weight' => -100, 'preprocess' => FALSE));

 // Auto-rebuild the theme registry during theme development.
if (theme_get_setting('clear_registry')) {
  // Rebuild .info data.
  system_rebuild_theme_data();
  // Rebuild theme registry.
  drupal_theme_rebuild();
}
// Add Zen Tabs styles
if (theme_get_setting('visit_tabs')) {
  drupal_add_css( drupal_get_path('theme', 'visit') .'/css/tabs.css');
}

/**
 * Override or insert variables into the html templates.
 */
function visit_preprocess_html(&$vars) {
  // Load the media queries styles
  // Remember to rename these files to match the names used here - they are
  // in the CSS directory of your subtheme.
  $media_queries_css = array(
    'visit.responsive.style.css'
  );
  load_subtheme_media_queries($media_queries_css, 'visit');
  
  drupal_add_library('system', 'ui.slider');

  


 /**
  * Load IE specific stylesheets
  * AT automates adding IE stylesheets, simply add to the array using
  * the conditional comment as the key and the stylesheet name as the value.
  *
  * See our online help: http://adaptivethemes.com/documentation/working-with-internet-explorer
  *
  * For example to add a stylesheet for IE8 only use:
  *
  *  'IE 8' => 'ie-8.css',
  *
  * Your IE CSS file must be in the /css/ directory in your subtheme.
  */
  /* -- Delete this line to add a conditional stylesheet for IE 7 or less.
  $ie_files = array(
    'lte IE 7' => 'ie-lte-7.css',
  );
  load_subtheme_ie_styles($ie_files, 'visit');
  // */

  $ie_files = array(
    'lte IE 9' => 'ieall.css',
  );
  load_subtheme_ie_styles($ie_files, 'visit');

  if (function_exists('mobile_tools_is_mobile_device')) {
    if (!empty($_GET['device'])) {
      $vars['classes_array'][] = $_GET['device'];
    }
    else {
      $device = mobile_tools_is_mobile_device();
      if (isset($device['type'])) {
        $vars['classes_array'][] = $device['type'];
      }
    }
  }
  
}

/* -- Delete this line if you want to use this function
function visit_process_html(&$vars) {
}
// */

/**
 * Override or insert variables into the page templates.
 */

function visit_preprocess_page(&$vars, $hook) {
  if (isset($vars['node_title'])) {
    $vars['title'] = $vars['node_title'];
  }
  // Adding classes wether #navigation is here or not
  if (!empty($vars['main_menu']) or !empty($vars['sub_menu'])) {
    $vars['classes_array'][] = 'with-navigation';
  }
  if (!empty($vars['secondary_menu'])) {
    $vars['classes_array'][] = 'with-subnav';
  }
  if (isset($vars['node'])) {
    $vars['theme_hook_suggestions'][] = 'page__'. str_replace('_', '--', $vars['node']->type);
    if ($vars['node']->type == 'iframe' && $vars['node']->field_page_empty['und'][0]['value'] &&
       !in_array('page__node__edit', $vars['theme_hook_suggestions'], true)) {

      $theme_hook_suggestions = $vars['theme_hook_suggestions'];
      $primary_local_tasks = $vars['primary_local_tasks'];
      $description = $vars['node']->body['und'][0]["value"];
         $vars = array(
          'page' => array(
            'content' => $description,
            'header' => NULL,
            'highlight' => NULL,
            'header' => NULL,
            'footer' => NULL,
            'sidebar_first' => array(),
            'sidebar_second' => array(),
          ),
          'theme_hook_suggestions' => $theme_hook_suggestions,
          'classes_array' => array(),
          'attributes_array' => array(),
          'title_attributes_array' => array(),
          'content_attributes_array' => array(),
          'tabs' => array(),
          'show_messages' => FALSE,
          'action_links' => array(),
          'feed_icons' => NULL,
          'main_menu' => array(),
          'secondary_menu' => array(),
          'primary_local_tasks' => $primary_local_tasks,
          'linked_site_logo' => NULL,
          'site_name' => '',
          'site_slogan' => '',
          'secondary_local_tasks' => array(),
         );
    }
  }
  $pathargs = explode('/',request_uri());
  if ($pathargs[1] == 'iframe') {
    // Use template: page__widgets
     $variables['theme_hook_suggestion'] = 'page__iframe';
  }
  if ($pathargs[1] =='bundles') {
    $variables['theme_hook_suggestion'] = 'page__bundle';
  }
}


   /**
   * Returns HTML for status and/or error messages, grouped by type.
   *
   * An invisible heading identifies the messages for assistive technology.
   * Sighted users see a colored box. See http://www.w3.org/TR/WCAG-TECHS/H69.html
   * for info.
   *
   * @param $variables
   *   An associative array containing:
   *   - display: (optional) Set to 'status' or 'error' to display only messages
   *     of that type.
   */
  function visit_status_messages($variables) {
    $display = $variables['display'];
    $output = '';

    $status_heading = array(
      'status' => t('Status message'),
      'error' => t('Error message'),
      'warning' => t('Warning message'),
    );
    foreach (drupal_get_messages($display) as $type => $messages) {
      $output .= "<div class=\"messages $type\">\n" . '<a class="close-message" onclick="closemessage(this)">'.t('Close').'</a>';
      if (!empty($status_heading[$type])) {
        $output .= '<h2 class="element-invisible">' . $status_heading[$type] . "</h2>\n";
      }
      if (count($messages) > 1) {
        $output .= " <ul>\n";
        foreach ($messages as $message) {
          $output .= '  <li>' . $message . "</li>\n";
        }
        $output .= " </ul>\n";
      }
      else {
        $output .= $messages[0];
      }
      $output .= '</div>' . "\n";
    }
    return $output;
  }


/**
 * Override or insert variables into the node templates.
 */
function visit_preprocess_node(&$vars) {
  // Add a striping class.
  $vars['classes_array'][] = 'node-' . $vars['zebra'];


  $vars['pages_type'] = '';

  if (isset($vars['node']->type)){
    $vars['pages_type'] = $vars['node']->type;
  }



}

/**
 * Override or insert variables into the comment templates.
 */
/* -- Delete this line if you want to use these functions
function visit_preprocess_comment(&$vars) {
}

function visit_process_comment(&$vars) {
}
// */

/**
 * Override or insert variables into the block templates.
 */
function visit_preprocess_block(&$vars, $hook) {
  // Add a striping class.
  $vars['classes_array'][] = 'block-' . $vars['zebra'];
}


/**
 * Return a themed breadcrumb trail.
 *
 * @param $breadcrumb
 *   An array containing the breadcrumb links.
 * @return
 *   A string containing the breadcrumb output.
 */
function visit_breadcrumb($variables) {
  $breadcrumb = $variables['breadcrumb'];
  // Determine if we are to display the breadcrumb.
  $show_breadcrumb = theme_get_setting('visit_breadcrumb');
  if ($show_breadcrumb == 'yes' || $show_breadcrumb == 'admin' && arg(0) == 'admin') {

    // Optionally get rid of the homepage link.
    $show_breadcrumb_home = theme_get_setting('visit_breadcrumb_home');
    if (!$show_breadcrumb_home) {
      array_shift($breadcrumb);
    }

    // Return the breadcrumb with separators.
    if (!empty($breadcrumb)) {
      $breadcrumb_separator = theme_get_setting('visit_breadcrumb_separator');
      $trailing_separator = $title = '';
      if (theme_get_setting('visit_breadcrumb_title')) {
        $item = menu_get_item();
        if (!empty($item['tab_parent'])) {
          // If we are on a non-default tab, use the tab's title.
          $title = check_plain($item['title']);
        }
        else {
          $title = drupal_get_title();
        }
        if ($title) {
          $trailing_separator = $breadcrumb_separator;
        }
      }
      elseif (theme_get_setting('visit_breadcrumb_trailing')) {
        $trailing_separator = $breadcrumb_separator;
      }

      // Provide a navigational heading to give context for breadcrumb links to
      // screen-reader users. Make the heading invisible with .element-invisible.
      $heading = '<h2 class="element-invisible">' . t('You are here') . '</h2>';

      return $heading . '<div class="breadcrumb">' . implode($breadcrumb_separator, $breadcrumb) . $trailing_separator . $title . '</div>';
    }
  }
  // Otherwise, return an empty string.
  return '';
}

/*
 * 	Converts a string to a suitable html ID attribute.
 *
 * 	 http://www.w3.org/TR/html4/struct/global.html#h-7.5.2 specifies what makes a
 * 	 valid ID attribute in HTML. This function:
 *
 * 	- Ensure an ID starts with an alpha character by optionally adding an 'n'.
 * 	- Replaces any character except A-Z, numbers, and underscores with dashes.
 * 	- Converts entire string to lowercase.
 *
 * 	@param $string
 * 	  The string
 * 	@return
 * 	  The converted string
 */


function visit_id_safe($string) {
  // Replace with dashes anything that isn't A-Z, numbers, dashes, or underscores.
  $string = strtolower(preg_replace('/[^a-zA-Z0-9_-]+/', '-', $string));
  // If the first character is not a-z, add 'n' in front.
  if (!ctype_lower($string{0})) { // Don't use ctype_alpha since its locale aware.
    $string = 'id'. $string;
  }
  return $string;
}

/**
 * Generate the HTML output for a menu link and submenu.
 *
 * @param $variables
 *   An associative array containing:
 *   - element: Structured array data for a menu link.
 *
 * @return
 *   A themed HTML string.
 *
 * @ingroup themeable
 */

function visit_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }
  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  // Adding a class depending on the TITLE of the link (not constant)
  $element['#attributes']['class'][] = visit_id_safe($element['#title']);
  // Adding a class depending on the ID of the link (constant)
  $element['#attributes']['class'][] = 'mid-' . $element['#original_link']['mlid'];
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . '<span class="link-end"></span>' . $sub_menu . "</li>\n";
}

/**
 * Override or insert variables into theme_menu_local_task().
 */
function visit_preprocess_menu_local_task(&$variables) {
  $link =& $variables['element']['#link'];

  // If the link does not contain HTML already, check_plain() it now.
  // After we set 'html'=TRUE the link will not be sanitized by l().
  if (empty($link['localized_options']['html'])) {
    $link['title'] = check_plain($link['title']);
  }
  $link['localized_options']['html'] = TRUE;
  $link['title'] = '<span class="tab">' . $link['title'] . '</span>';
}

/*
 *  Duplicate of theme_menu_local_tasks() but adds clearfix to tabs.
 */
function visit_menu_local_tasks(&$variables) {
  $output = '';

  if (!empty($variables['primary'])) {
    $variables['primary']['#prefix'] = '<h2 class="element-invisible">' . t('Primary tabs') . '</h2>';
    $variables['primary']['#prefix'] .= '<ul class="tabs primary clearfix">';
    $variables['primary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['primary']);
  }
  if (!empty($variables['secondary'])) {
    $variables['secondary']['#prefix'] = '<h2 class="element-invisible">' . t('Secondary tabs') . '</h2>';
    $variables['secondary']['#prefix'] .= '<ul class="tabs secondary clearfix">';
    $variables['secondary']['#suffix'] = '</ul>';
    $output .= drupal_render($variables['secondary']);
  }

  return $output;
}

/**
 * Add the Style Schemes if enabled.
 * NOTE: You MUST make changes in your subthemes theme-settings.php file
 * also to enable Style Schemes.
 */
/* -- Delete this line if you want to enable style schemes.
// DONT TOUCH THIS STUFF...
function get_at_styles() {
  $scheme = theme_get_setting('style_schemes');
  if (!$scheme) {
    $scheme = 'style-default.css';
  }
  if (isset($_COOKIE["atstyles"])) {
    $scheme = $_COOKIE["atstyles"];
  }
  return $scheme;
}
if (theme_get_setting('style_enable_schemes') == 'on') {
  $style = get_at_styles();
  if ($style != 'none') {
    drupal_add_css(path_to_theme() . '/css/schemes/' . $style, array(
      'group' => CSS_THEME,
      'preprocess' => TRUE,
      )
    );
  }
}
// */

function visit_preprocess_views_view_fields($vars) {
  $arg = arg(1);
  if ($vars['view']->name == 'encyclopedia_terms_filter' && $arg) {
      $id = $vars['id'] - 1;
      $tid = $vars['view']->result[$id]->tid;
      if ($tid == $arg) {
        $vars['fields']['name']->wrapper_prefix = '<div class="views-field views-field-name active">';
      }
    }
 }

 /**
 * Returns HTML for a button form element.
 *
 * @param $variables
 *   An associative array containing:
 *   - element: An associative array containing the properties of the element.
 *     Properties used: #attributes, #button_type, #name, #value.
 *
 * @ingroup themeable
 */
function visit_button($variables) {
  $element = $variables['element'];
  $element['#attributes']['type'] = 'submit';
  element_set_attributes($element, array('id', 'name', 'value'));

  $element['#attributes']['class'][] = 'form-' . $element['#button_type'];
  if (!empty($element['#attributes']['disabled'])) {
    $element['#attributes']['class'][] = 'form-button-disabled';
  }

  return '<span class="button-wrapper"><input' . drupal_attributes($element['#attributes']) . ' /></span>';
}

function visit_addthis_wrapper($variables) {
  $element = $variables['addthis_wrapper'];
  $output = '<' . $element['#tag'] . drupal_attributes($element['#attributes']) . '>'
              . '<span class="icon"></span>'
              //. t('Share')
            . '</' . $element['#tag'] . ">\n";

  $children = element_children($element);

  if (count($children) > 0) {
    foreach ($children as $child) {
      $output .= render($element[$child]);
    }
  }

  $output = theme('addthis_wrapper_extra', array('content' => $output));

  return $output;
}

function visit_addthis_element($variables) {
  $element = $variables['addthis_element'];

  if (!$element['#addthis_service']) {
    return '';
  }
  if (!isset($element['#value'])) {
    return '<' . $element['#tag'] . drupal_attributes($element['#attributes']) . " />\n";
  }
  $output = '<li>';

    $output .= '<' . $element['#tag'] . drupal_attributes($element['#attributes']) . ' title="">';
    if (isset($element['#value_prefix'])) {
      $output .= $element['#value_prefix'];
    }
    $output .= $element['#value'];
    if (isset($element['#value_suffix'])) {
      $output .= $element['#value_suffix'];
    }
    $output .= $element['#addthis_service'] . '</' . $element['#tag'] . ">\n";

  $output .= '</li>';

  return $output;
}

/**
 * Clean up the panel pane variables for the template.
 */
function visit_preprocess_panels_pane(&$vars) {
  $content = &$vars['original_content'];
  $pane = $vars['pane'];

  if (!empty($content->css_id)) {
    $vars['id'] = ' id="' . $content->css_id . '"';
  }

  if (isset($content->module) && strpos($content->module, 'facetapi') !== FALSE) {
    $vars['id'] = ' id="' . $content->type . '-' . $content->module . '-' . $content->delta . '"';
  }
  drupal_alter('panel_pane_classess', $vars['classes_array'], $pane);

  if (!empty($content->css_class)) {
    $vars['classes_array'][] = $content->css_class;
  }
}

/**
 * Returns HTML for the inactive facet item's count.
 *
 * @param $variables
 *   An associative array containing:
 *   - count: The item's facet count.
 *
 * @ingroup themeable
 */
function visit_facetapi_count($variables) {
  $enable_counts = variable_get('visitdk_search_facetapi_item_count', 0);
  if ($enable_counts) {
    return '(' . (int) $variables['count'] . ')';
  }
  else {
    return '';
  }
}

/**
 * Override or insert variables into the html template.
 */
function visit_process_html(&$vars) {
  // Hook into color.module
  if (module_exists('color')) {
    _color_html_alter($vars);
  }
}

/**
 * Override or insert variables into the page template.
 */
function visit_process_page(&$vars) {
  // Hook into color.module
  if (module_exists('color')) {
    _color_page_alter($vars);
  }
}

/**
 * MYTHEME_theme_name().
 * wraps output in <span>
 */
function visit_facetapi_link_active($variables) {
  // Sanitizes the link text if necessary.
  $sanitize = empty($variables['options']['html']);
  $link_text = ($sanitize) ? check_plain($variables['text']) : $variables['text'];

  $variables['options']['html'] = TRUE;
  foreach ($variables['options']['attributes']['class'] as $index => $class) {
    if ($class == 'facetapi-active') {
      $variables['options']['attributes']['class'][$index] = 'facetapi-text-active';
    }
  }

  return '<span class="active-link">' . theme('link', $variables) . '</span>';
}

function visit_facetapi_link_inactive__text($variables) {
  return '<span class="facet_level_collapsible">' . $variables['text'] . '</span>';
}

/***
 * ############################     Styling pager     #####################################
 */


/**
 * Returns HTML for a query pager.
 *
 * Menu callbacks that display paged query results should call theme('pager') to
 * retrieve a pager control so that users can view other results. Format a list
 * of nearby pages with additional query results.
 *
 * @param $variables
 *   An associative array containing:
 *   - tags: An array of labels for the controls in the pager.
 *   - element: An optional integer to distinguish between multiple pagers on
 *     one page.
 *   - parameters: An associative array of query string parameters to append to
 *     the pager links.
 *   - quantity: The number of pages in the list.
 *
 * @ingroup themeable
 */
function visit_pager($variables) {
  $tags = $variables['tags'];
  $element = $variables['element'];
  $parameters = $variables['parameters'];
  // Ugly hack for setting default value of 3
  $quantity = ($variables['quantity'] == 9) ? 3 : $variables['quantity'];
  global $pager_page_array, $pager_total;

  // Calculate various markers within this pager piece:
  // Middle is used to "center" pages around the current page.
  $pager_middle = ceil($quantity / 2);
  // current is the page we are currently paged to
  $pager_current = $pager_page_array[$element] + 1;
  // first is the first page listed by this pager piece (re quantity)
  $pager_first = $pager_current - $pager_middle + 1;
  // last is the last page listed by this pager piece (re quantity)
  $pager_last = $pager_current + $quantity - $pager_middle;
  // max is the maximum page number
  $pager_max = $pager_total[$element];
  // End of marker calculations.

  // Prepare for generation loop.
  $i = $pager_first;
  if ($pager_last > $pager_max) {
    // Adjust "center" if at end of query.
    $i = $i + ($pager_max - $pager_last);
    $pager_last = $pager_max;
  }
  if ($i <= 0) {
    // Adjust "center" if at start of query.
    $pager_last = $pager_last + (1 - $i);
    $i = 1;
  }
  // End of generation loop preparation.

  $li_first = theme('pager_first', array('text' => 1, 'element' => $element, 'parameters' => $parameters));
  $li_previous = theme('pager_previous', array('text' => (isset($tags[1]) ? $tags[1] : t('‹ previous')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));
  $li_next = theme('pager_next', array('text' => (isset($tags[3]) ? $tags[3] : t('next ›')), 'element' => $element, 'interval' => 1, 'parameters' => $parameters));
  $li_last = theme('pager_last', array('text' => $pager_max, 'element' => $element, 'parameters' => $parameters));

  if ($pager_total[$element] > 1) {
    if ($pager_current != 1) {
      $items[] = array(
        'class' => array('pager-first'),
        'data' => theme('pager_first', array('text' => 1, 'element' => $element, 'parameters' => $parameters)),
      );
    }
    if ($li_previous) {
      $items[] = array(
        'class' => array('pager-previous'),
        'data' => $li_previous,
      );
    }

    // When there is more than one page, create the pager list.
    if ($i != $pager_max) {
      if ($i > 2) {
        $items[] = array(
          'class' => array('pager-ellipsis'),
          'data' => '…',
        );
      }
      // Now generate the actual pager piece.
      for (; $i <= $pager_last && $i <= $pager_max; $i++) {
        if ($i < $pager_current && $i > 1) {
          $items[] = array(
            'class' => array('pager-item'),
            'data' => theme('pager_previous', array('text' => $i, 'element' => $element, 'interval' => ($pager_current - $i), 'parameters' => $parameters)),
          );
        }
        if ($i == $pager_current && $i != $pager_max) {
          $items[] = array(
            'class' => array('pager-current'),
            'data' => $i,
          );
        }
        if ($i > $pager_current && $i != $pager_max) {
          $items[] = array(
            'class' => array('pager-item'),
            'data' => theme('pager_next', array('text' => $i, 'element' => $element, 'interval' => ($i - $pager_current), 'parameters' => $parameters)),
          );
        }
      }
      if ($i < $pager_max) {
        $items[] = array(
          'class' => array('pager-ellipsis'),
          'data' => '…',
        );
      }
    }
    // End generation.
    if ($li_next) {
      $items[] = array(
        'class' => array('pager-next'),
        'data' => $li_next,
      );
    }
    
    if ($pager_current == $pager_max) {
      $items[] = array(
        'class' => array('pager-last', 'pager-current'),
        'data' => $pager_max,
      );
    }
    else {
      $items[] = array(
        'class' => array('pager-last'),
        'data' => theme('pager_last', array('text' => $pager_max, 'element' => $element, 'interval' => ($pager_current - $i), 'parameters' => $parameters)),
      );
    }
    
    
    return '<h2 class="element-invisible">' . t('Pages') . '</h2>' . theme('item_list', array(
      'items' => $items,
      'attributes' => array('class' => array('pager')),
    ));
  }
}


/**
 * Returns HTML for a query pager.
 *
 * Menu callbacks that display paged query results should call theme('pager') to
 * retrieve a pager control so that users can view other results. Format a list
 * of nearby pages with additional query results.
 *
 * @param $variables
 *   An associative array containing:
 *   - tags: An array of labels for the controls in the pager.
 *   - element: An optional integer to distinguish between multiple pagers on
 *     one page.
 *   - parameters: An associative array of query string parameters to append to
 *     the pager links.
 *   - quantity: The number of pages in the list.
 *
 * @ingroup themeable
 */
function visit_pager__term_page_list($variables) {
  $element = $variables['element'];
  
  global $pager_page_array, $pager_total, $pager_total_items, $pager_limits;
  $total_items = $pager_total_items[$element];
  $page_limit = $pager_limits[$element];

  $pager_current = $pager_page_array[$element] + 1;
  // max is the maximum page number
  $pager_max = $pager_total[$element];
  // End of marker calculations.

  if ($pager_current < $pager_max) {
    $viewed_items = $pager_current * $page_limit;
  }
  else {
    $viewed_items = $total_items;
  }
 
  if ($pager_total[$element] > 1) {
    
    if (arg(0) == 'taxonomy' && arg(1) == 'term' && is_numeric(arg(2))) {
      $term = taxonomy_term_load(arg(2));
    }
    $term_name = isset($term->name) ? $term->name : t('unknown');

    return '<div class="search-results-header-wrapper"><h2 class="element-invisible">' . t('Pages') . '</h2>' .
      '<div class="search-results-counter pager-current-count">'.t('Showing @count from @max marked with "%term"', array('@count' => $viewed_items, '@max' => $total_items, '%term' => $term_name)) .'</div></div><div class="pager">'.
      theme('pager', $variables).'</div>';
  }
  else {
    if (arg(0) == 'taxonomy' && arg(1) == 'term' && is_numeric(arg(2))) {
      $term = taxonomy_term_load(arg(2));
    }
    $term_name = isset($term->name) ? $term->name : t('unknown');
    return '<h2 class="element-invisible">' . t('Pages') . '</h2>' .
      '<div class="text-result-wrapper">' . t('Showing @count from @max marked with "%term"', array('@count' => $viewed_items, '@max' => $total_items, '%term' => $term_name)) .'</div>';
  }
}

/**
 * Returns HTML for a list or nested list of items.
 *
 * @param $variables
 *   An associative array containing:
 *   - items: An array of items to be displayed in the list. If an item is a
 *     string, then it is used as is. If an item is an array, then the "data"
 *     element of the array is used as the contents of the list item. If an item
 *     is an array with a "children" element, those children are displayed in a
 *     nested list. All other elements are treated as attributes of the list
 *     item element.
 *   - title: The title of the list.
 *   - type: The type of list to return (e.g. "ul", "ol").
 *   - attributes: The attributes applied to the list element.
 */
function visit_item_list__term_page_list($variables) {
  $items = $variables['items'];
  $title = $variables['title'];
  $type = $variables['type'];
  $attributes = $variables['attributes'];

  // Only output the list container and title, if there are any list items.
  // Check to see whether the block title exists before adding a header.
  // Empty headers are not semantic and present accessibility challenges.
  $output = '<div class="item-list">';
  if (isset($title) && $title !== '') {
    $output .= '<h3>' . $title . '</h3>';
  }

  if (!empty($items)) {
    $output .= "<$type" . drupal_attributes($attributes) . '>';
    $num_items = count($items);
    foreach ($items as $i => $item) {
      $attributes = array();
      $children = array();
      $data = '';
      if (is_array($item)) {
        foreach ($item as $key => $value) {
          if ($key == 'data') {
            $data = $value;
          }
          elseif ($key == 'children') {
            $children = $value;
          }
          else {
            $attributes[$key] = $value;
          }
        }
      }
      else {
        $data = $item;
      }
      if (count($children) > 0) {
        // Render nested list.
        $data .= theme_item_list(array('items' => $children, 'title' => NULL, 'type' => $type, 'attributes' => $attributes));
      }
      if ($i == 0) {
        $attributes['class'][] = 'first';
      }
      if ($i == $num_items - 1) {
        $attributes['class'][] = 'last';
      }
      $output .= '<li' . drupal_attributes($attributes) . '>' . $data . "</li>\n";
    }
    $output .= "</$type>";
  }
  $output .= '</div>';
  return $output;
}

/**
 * Returns HTML for a date_select 'date' label.
 */
function visit_date_part_label_date($variables) {
  if ($variables['element']['#label_title']) {
    return $variables['element']['#label_title'];
  }
  else {
    return t('Date', array(), array('context' => 'datetime'));
  }
}


/**
 * Returns HTML for the "previous page" link in a query pager.
 *
 * @param $variables
 *   An associative array containing:
 *   - text: The name (or image) of the link.
 *   - element: An optional integer to distinguish between multiple pagers on
 *     one page.
 *   - interval: The number of pages to move backward when the link is clicked.
 *   - parameters: An associative array of query string parameters to append to
 *     the pager links.
 *
 * @ingroup themeable
 */

function visit_pager_previous($variables) {
  $text = $variables['text'];
  $element = $variables['element'];
  $interval = $variables['interval'];
  $parameters = $variables['parameters'];
  global $pager_page_array;
  $output = '';

  $page_new = pager_load_array($pager_page_array[$element] - $interval, $element, $pager_page_array);

  // If the previous page is the first page, mark the link as such.
  if ($page_new[$element] == 0) {
    $output = theme('pager_first', array('text' => $text, 'element' => $element, 'parameters' => $parameters));
  }
  // This is the first inactive
  elseif ($page_new[$element] < 1) {
    $page_new[$element] = 0;
    $output = theme('pager_previous_inactive', array('text' => $text, 'page_new' => $page_new, 'element' => $element, 'parameters' => $parameters));
  }
  // The previous page is not the first page.
  else {
    $output = theme('pager_link', array('text' => $text, 'page_new' => $page_new, 'element' => $element, 'parameters' => $parameters));
  }

  return $output;
}

/**
 * Returns HTML for the "next page" link in a query pager.
 *
 * @param $variables
 *   An associative array containing:
 *   - text: The name (or image) of the link.
 *   - element: An optional integer to distinguish between multiple pagers on
 *     one page.
 *   - interval: The number of pages to move forward when the link is clicked.
 *   - parameters: An associative array of query string parameters to append to
 *     the pager links.
 *
 * @ingroup themeable
 */
function visit_pager_next($variables) {
  $text = $variables['text'];
  $element = $variables['element'];
  $interval = $variables['interval'];
  $parameters = $variables['parameters'];
  global $pager_page_array, $pager_total;
  $output = '';

  $page_new = pager_load_array($pager_page_array[$element] + $interval, $element, $pager_page_array);
   // If the next page is the last page, mark the link as such.
  if ($page_new[$element] == ($pager_total[$element] - 1)) {
    $output = theme('pager_last', array('text' => $text, 'element' => $element, 'parameters' => $parameters));
  }
  // This is the first inactive
  elseif ($pager_page_array[$element] >= ($pager_total[$element] - 1)) {
    $page_new[$element] = $pager_total[$element];
    $output = theme('pager_next_inactive', array('text' => $text, 'page_new' => $page_new, 'element' => $element, 'parameters' => $parameters));
  }
  // The next page is not the last page.
  else {
    $output = theme('pager_link', array('text' => $text, 'page_new' => $page_new, 'element' => $element, 'parameters' => $parameters));
  }

  return $output;
}

/**
 * Theme function for inactive previous link from pager.
 * @param array $element
 * @return string
 */
function visit_pager_next_inactive($element) {
  return '&rsaquo;';
}

/**
 * Theme function for inactive next link from pager.
 * @param array $element
 * @return string
 */
function visit_pager_previous_inactive($element) {
  return '&lsaquo;';
}

/**
 * Implements hook_theme().
 */
function visit_theme() {
  return array(
      'pager_previous_inactive' => array(
          'function' => 'visit_pager_previous_inactive',
      ),
      'pager_next_inactive' => array(
          'function' => 'visit_pager_next_inactive',
      ),
  );
}

function visit_preprocess_menu_link(&$variables) {
  global $language_url;

  if (($variables['element']['#href'] == $_GET['q'] || ($variables['element']['#href'] == '<front>' && drupal_is_front_page()))) {
    $variables['element']['#attributes']['class'][] = 'active';
  }
}

function visit_form_alter(&$form, &$form_state, $form_id) {
  if($form_id === 'views_exposed_form') {
    $form['field_offer_dato_value']['value']['#date_format'] = "d/m/Y";
    $form['field_offer_dato_value_1']['value']['#date_format'] = "d/m/Y";
  }
}
