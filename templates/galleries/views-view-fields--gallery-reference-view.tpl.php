<?php
/**
 * @file views-view-fields.tpl.php
 * Default simple view template to all the fields as a row.
 *
 * - $view: The view in use.
 * - $fields: an array of $field objects. Each one contains:
 *   - $field->content: The output of the field.
 *   - $field->raw: The raw data for the field, if it exists. This is NOT output safe.
 *   - $field->class: The safe class id to use.
 *   - $field->handler: The Views field handler object controlling this field. Do not use
 *     var_export to dump this object, as it can't handle the recursion.
 *   - $field->inline: Whether or not the field should be inline.
 *   - $field->inline_html: either div or span based on the above flag.
 *   - $field->wrapper_prefix: A complete wrapper containing the inline_html to use.
 *   - $field->wrapper_suffix: The closing tag for the wrapper.
 *   - $field->separator: an optional separator that may appear before a field.
 *   - $field->label: The wrap label text to use.
 *   - $field->label_html: The full HTML of the label to use including
 *     configured element type.
 * - $row: The raw result object from the query, with all data it fetched.
 *
 * @ingroup views_templates
 */

  // Counter Var
  $field_counter = '';
  if(isset($fields['counter']->content)) {
    $field_counter = $fields['counter']->content;
  }

  // Body field
  $field_body = '';
  
  if(isset($row->field_field_photo_copy[0]['rendered']['#markup'])) {
    $field_body =  strip_tags($row->field_field_photo_copy[0]['rendered']['#markup'],'<a><b><i>');
  }
  
  // Alt Text
  $alt_text = '';
  if (isset($row->field_field_photo[0]['rendered']['#item']["alt"])) {
    $alt_text =  truncate_utf8(strip_tags($row->field_field_photo[0]['rendered']['#item']['alt']), 140, $wordsafe = TRUE);
  }
  
  // Headline Popup
  $field_headline = '';
  if(isset($row->field_field_photo[0]['rendered']['#item']['title'])) {
    $field_headline =  truncate_utf8(strip_tags($row->field_field_photo[0]['rendered']['#item']['title']), 140, $wordsafe = TRUE);
  }
    
  //Image path
  $uriImagefromView = '';
  if(isset($row->field_field_photo[0]['raw']['uri']))  {
    $uriImagefromView = $row->field_field_photo[0]['raw']['uri'];
  }
  //Image path creation 
  $urlImagefromView = file_create_url($uriImagefromView);

  if(isset($row->field_field_video[0]))  {
    $uriImagefromView = (string)file_stream_wrapper_get_instance_by_uri($row->field_field_video[0]['raw']['uri'])->getLocalThumbnailPath();
    $filename = $row->field_field_video[0]['raw']['filename'];
    
    $file_type = str_replace('video/', '', $row->field_field_video[0]['raw']['filemime']);
    
    if ($file_type == '23video') {
      $field_video = '<iframe src="/media_23video/video/' . $filename . '&autoPlay=1" width="100%" height="100%" frameborder="0" border="0" scrolling="no" id="slider2-img' . $field_counter . '-iframe"></iframe>';  
    }
    elseif ($file_type == 'youtube') {
      $field_video = '<iframe width="100%" height="100%" src="http://www.youtube.com/embed/' . arg(1, file_uri_target($row->field_field_video[0]['raw']['uri'])) . '?wmode=transparent&autoplay=1" frameborder="0" allowfullscreen id="slider2-img' . $field_counter . '-iframe"></iframe>';
    }
    else {
      //$video_path = drupal_realpath($row->field_field_video[0]['raw']['uri']);
      $field_video = theme('media_' . $file_type . '_video', array('uri' => $row->field_field_video[0]['raw']['uri'], 'width' => '640', 'height' => '480', 'autoplay' => 1, 'only_iframe' => 1));
    }
  }
  
  //Image path creation 
  $urlImagefromView = file_create_url($uriImagefromView);

  //Image style applied
  $field_image = theme('image_style', array('style_name' => 'galleries_ratio' ,'path' => $uriImagefromView,'attributes' => array('id' => 'slider2-img'.$field_counter.'-i'),'alt' => $alt_text));

  //Get the image src path after style applied
  $fiels_image_from_image_style = explode("\"", $field_image);
  $field_image_path =  $fiels_image_from_image_style[5];
      
  //Popup Title - print hidden field (qith JS them applied to popup)
  $gallery_popup_title = '';
  if(isset($row->node_title))  {
    $gallery_popup_title = truncate_utf8($row->node_title, 20);
  }
  print '<div class="hidden gallery-popup-title">' . $gallery_popup_title . '</div>';
  
?>

<?php if($field_counter == 1 ){ ?>
<!---0
    <div class="image" id="slider2-img<?php print $field_counter; ?>">
      <?php if(isset($field_video)) : ?>
        <a href="#" title="<?php print $alt_text; ?>" class="play" rel="slider2-img<?php print $field_counter; ?>" id="slider2-img<?php print $field_counter; ?>-play"><span>Video play</span></a>
      <?php endif; ?>

      <?php print $field_image; ?>
			<p id="slider2-img<?php print $field_counter; ?>-head" class="autohide"><?php print $field_headline; ?></p>
			<p id="slider2-img<?php print $field_counter; ?>-desc" class="autohide"><?php print $field_body; ?></p>
      <div class="autohide"><?php print isset($field_video) ? $field_video : ''; ?></div>
    </div>
0--->
<!---1
    <li class="active" id="slider2-indi<?php print $field_counter; ?>-li">
      <a href="#" title="<?php print $alt_text; ?>" class="slnk" rel="<?php print $field_image_path; ?>"><?php print $field_image; ?>
      <?php if(isset($field_video)) : ?>
        <span class="mplay">&nbsp;</span>
      <?php endif; ?>
      </a>
      <div class="indi">
        <div class="in" id="slider2-indi<?php print $field_counter; ?>"></div>
      </div>
    </li>
1--->
<?php } else { ?>
<!---0
    <div class="image autohide" id="slider2-img<?php print $field_counter; ?>">
      <?php if(isset($field_video)) : ?>
        <a href="#" title="<?php print $alt_text; ?>" class="play" rel="slider2-img<?php print $field_counter; ?>" id="slider2-img<?php print $field_counter; ?>-play"><span>Video play</span></a>
      <?php endif; ?>

      <?php print $field_image; ?>
			<p id="slider2-img<?php print $field_counter; ?>-head" class="autohide"><?php print $field_headline; ?></p>
			<p id="slider2-img<?php print $field_counter; ?>-desc" class="autohide"><?php print $field_body; ?></p>
      <div class="autohide"><?php print isset($field_video) ? $field_video : ''; ?></div>
    </div>
0--->
<!---1
    <li id="slider2-indi<?php print $field_counter; ?>-li">
      <a href="#" title="<?php print $alt_text; ?>" class="slnk" rel="<?php print $field_image_path; ?>"><?php print $field_image; ?>
        <?php if(isset($field_video)) : ?>
        <span class="mplay">&nbsp;</span>
      <?php endif; ?>
      </a>
      <div class="indi">
        <div class="in" id="slider2-indi<?php print $field_counter; ?>"></div>
      </div>
    </li>
1--->
<?php } ?>  



    




<?php foreach ($fields as $id => $field):  ?>

    <?php // print $field->content; ?>

<?php endforeach;?>
