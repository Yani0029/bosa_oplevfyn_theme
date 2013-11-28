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
  // Alt Text
  $alt_text = '';
  if (isset($row->field_field_image[0]['rendered']['#item']["alt"])) {
    $alt_text =  truncate_utf8(strip_tags($row->field_field_image[0]['rendered']['#item']['alt']), 140, $wordsafe = TRUE);
  }
  //Image path
  $uriImagefromView = '';
  if(isset($row->field_field_image[0]['rendered']['#item']['uri']))  {
    $uriImagefromView = $row->field_field_image[0]['rendered']['#item']['uri'];
  }
  //Image path creation 
  $urlImagefromView = file_create_url($uriImagefromView);
  
  //Image style applied
  $field_image = theme('image_style', array('style_name' => 'galleries_ratio' ,'path' => $uriImagefromView,'attributes' => array('id' => 'slider2-img'.$field_counter.'-i'),'alt' => $alt_text));
  
  //Get the image src path after style applied
  $fiels_image_from_image_style = explode("\"", $field_image);
  $field_image_path =  $fiels_image_from_image_style[5];

  //Slide Main Title
  $fp_slide_title = '';
    
  if(isset($row->node_node_title))  {
    $fp_slide_title = $row->node_node_title;
  }
  
  //Slide Title Position
  $fp_slide_title_position = '';
  if(isset($row->field_field_title_position[0]['rendered']['#markup']))  {
    $fp_slide_title_position = $row->field_field_title_position[0]['rendered']['#markup'];
  }
  
  //Get Array of links
  $fp_slide_links = '';
  if(isset($row->field_field_link))  {
    $fp_slide_links = $row->field_field_link;
  }  
?>

<!---0
    <div class="stxt <?php print $fp_slide_title_position ?>" id="slider1-txt<?php print $field_counter ?>">
			<div class="bx">
				<p><?php print $fp_slide_title; ?></p>
			</div>
			<div class="arr"></div>
		</div>   
0--->


<?php if($field_counter == 1 ){ ?>

<!---1
		<div class="image" id="slider1-img<?php print $field_counter ?>">
			<img src="<?php print $field_image_path ?>" alt="<?php print $fp_slide_title; ?>" id="slider1-img<?php print $field_counter ?>-i" />
		</div>
1--->

<!---2
    <li class="active" id="slider1-indi<?php print $field_counter ?>-li">
      <a href="#" title="<?php print $fp_slide_title; ?>" class="slnk"><?php print $field_image; ?></a>
      <div class="indi">
        <div class="in" id="slider1-indi<?php print $field_counter ?>"></div>
      </div>
    </li>
2--->

<!---3
    <div id="slider1-item<?php print $field_counter ?>-links">
      <ul>
        <?php 
          foreach ($fp_slide_links as $value) {
            print '<li>' . l($value['raw']['title'], $value['raw']['url']) . '</li>';
          }
        ?>
      </ul>
    </div>
3--->

    
<?php } else { ?>  
<!---1
		<div class="image autohide" id="slider1-img<?php print $field_counter ?>">
			<img src="<?php print $field_image_path ?>" alt="<?php print $fp_slide_title; ?>" id="slider1-img<?php print $field_counter ?>-i" />
		</div>
1--->

<!---2
    <li id="slider1-indi<?php print $field_counter ?>-li">
      <a href="#" title="<?php print $fp_slide_title; ?>" class="slnk"><?php print $field_image; ?></a>
      <div class="indi">
        <div class="in" id="slider1-indi<?php print $field_counter ?>"></div>
      </div>
    </li>
2--->

<!---3
    <div id="slider1-item<?php print $field_counter ?>-links" class="autohide">
      <ul>
        <?php 
          foreach ($fp_slide_links as $value) {
            print '<li>' . l($value['raw']['title'], $value['raw']['url']) . '</li>';
          }
        ?>
      </ul>
    </div>
3--->    
        
<?php } ?>  



    





<?php foreach ($fields as $id => $field):  ?>

    <?php // print $field->content; ?>

<?php endforeach;?>