<div>
  
  <?php if (!empty($content['field_mouseover'])):?>
    <div class="hidden custom_block_image_mouseover_teaser" ><?php print render($content['field_mouseover']); ?></div>
  <?php endif?>

  <?php if (!empty($title)):?>
	<div class="block_title">
		<h2>
			<span class="title"><?php echo render($title); ?></span>
			<span class="align-span"></span>
		</h2>
	</div>
  <?php endif?>
  <?php if (!empty($content['body'])):?>
    <div class="block_teaser"><?php print render($content['body'])?></div>
  <?php endif?>

  <?php if (!empty($content['field_video'])):?>
    <div class="block_image"><?php print render($content['field_video'])?></div>
  <?php elseif (!empty($content['field_image'])):?>
    <div class="block_image"><?php print render($content['field_image'])?></div>
  <?php endif?>

</div>