<?php
/**
 * @file views-view-unformatted.tpl.php
 * Default simple view template to display a list of rows.
 *
 * @ingroup views_templates
 */
?>



 
 


<script type="text/javascript">
  
jQuery(document).ready(function() {
     slideembed.popup(this,'show','slider2');
     
     jQuery('#slider2-overlay-close').replaceWith('<a id="slider2-overlay-close" title="" href="#"><span>Close</span></a>');
     
     jQuery('#slider2-overlay-close').live('click', function(){
         if (history.length <= 1) {             
             window.location.href = '/';
         }
         else {
           window.history.back();
         }
     });
});

</script>

<div class="slider-t2" id="slider2">
		<div class="enlarge" id="slider2-enlarge">
			<a href="#" title="" onclick="slideembed.popup(this,'show','slider2');return false;"><span><?php print  t('Enlarge'); ?></span></a>
		</div>
    
    <div class="close" id="slider2-close">
			<a href="#" title="" id="slider2-close-lnk"><span><?php print t('Player stop, close'); ?></span></a>
		</div>
		
		<div class="player" id="slider2-player">
			<iframe src="about:blank" id="slider2-video-iframe" width="100%" height="100%" frameborder="0" border="0" scrolling="no"></iframe>
		</div>

<?php 
$vowelsimage = array("<!---0", "0--->");
foreach ($rows as $id => $row): ?>
  <?php     
    print str_replace($vowelsimage, '', $row); 
  ?>  
<?php endforeach;?>

  <!-- Backup background image -->

    		<!-- Navigation -->
		<div class="navi display" id="slider2-navi">
		
			<!-- The thumbnails -->
			<div class="list" id="slider2-list">
				<div class="abs" id="slider2-mover">
					<ul>
   
<?php 
$vowelsnav = array("<!---1", "1--->");
foreach ($rows as $id => $row): 
?>
  <?php
    print str_replace($vowelsnav, '', $row);
  ?>  
<?php endforeach;?>
            
					</ul>
				</div>
			</div>
			
			<!-- Back / Next navigation -->
			<div class="controls" id="slider2-navi">
				<ul>
					<li><a href="#" title="" class="prev" id="slider2-navi-back"><span><?php print  t('Back'); ?></span></a></li>
					<li><a href="#" title="" class="next" id="slider2-navi-next"><span><?php print  t('Next'); ?></span></a></li>
				</ul>
			</div>
			
		</div>

    
</div>

<div class="slider-t2-desc">
		<p id="slider2-desc"></p>
	</div>