<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>



<!-- **************************************************** -->
	<!-- Webpart: Frontpage slideshow -->
	<!-- **************************************************** -->
	
	<div class="slider-t1" id="slider1">


    <?php 
    $fp_tooltips = array("<!---0", "0--->");
    foreach ($rows as $id => $row):
        print str_replace($fp_tooltips, '', $row); 
    endforeach;
    ?>

    <?php 
    $fp_image_slides = array("<!---1", "1--->");
    foreach ($rows as $id => $row):
        print str_replace($fp_image_slides, '', $row); 
    endforeach;
    ?>

		
		<!-- Navigation -->
		<div class="navi" id="slider1-navi">
		
			<!-- The thumbnails -->
			<div class="list" id="slider1-list">
				<ul>
          <?php 
            $fp_slides_nav = array("<!---2", "2--->");
          foreach ($rows as $id => $row):
              print str_replace($fp_slides_nav, '', $row); 
          endforeach;
          ?>

				</ul>
			</div>
			
			<!-- The text links for each image -->
			<div class="label" id="slider1-links">
        <?php 
          $fp_slides_links = array("<!---3", "3--->");
        foreach ($rows as $id => $row):
            print str_replace($fp_slides_links, '', $row); 
        endforeach;
        ?>
      </div>
			
		</div>

	</div>
