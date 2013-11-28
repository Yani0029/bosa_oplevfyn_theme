<style>
  #visitdk-regions-list { float: left; width: 274px; margin-right: 16px; background: #fff;          min-height: 505px; }
  #visitdk-regions-current { float: left; width: 274px; margin-right: 16px; background: #fff;       min-height: 505px; }
  #visitdk-regions-map { float: left; width: 570px; height: 505px; background: #fff;                min-height: 505px; }
  #visitdk-regions-current .region-information { display: none; margin: 1em; }
  #visitdk-regions-current .region-information .body { font-size: .8em; }
  #visitdk-regions-list .custom-block { margin: 1em; }
  #visitdk-regions-list .regions-list a { padding: 0 1em; display: block; }
  #visitdk-regions-list .regions-list a.current { background: #EFEEEA; }
  #visitdk-regions-list ul { margin: 0; padding: 0; }
</style>

<div id="visitdk-regions-list">
  <div class="custom-block">
    <h2 class="title">
      <?php echo $custom_block->title?>
    </h2>
    <div class="body">
      <?php echo $custom_block->body?>
    </div>
  </div>
  <div class="regions-list">

    <?php
    /*
     * If links are generated instead of hardcoded.
    <ul>
      <?php foreach ($regions as $region):?>
      <li>
        <a href="#<?php echo $region->vid?>" id="region-link-<?php echo $region->vid?>">
          <?php echo t($region->title)?>
        </a>
      </li>
      <?php endforeach?>
    </ul>
    <ul>
        <li><a href="#{node_vid}"><?php echo t('Region 1')?></a></li>
        <li><a href="#{node_vid}"><?php echo t('Region 2')?></a></li>
        <li><a href="#{node_vid}"><?php echo t('Region 3')?></a></li>
        <li><a href="#{node_vid}"><?php echo t('Region 4')?></a></li>
    </ul>
    */
    ?>

    <p>&nbsp;</p>

    <form id="visitdk-regions-select">

      <select id="regions-list-select">
        <?php foreach ($regions as $region):?>
        <option value="<?php echo $region->vid?>">
            <?php echo t($region->title)?>
        </option>
        <?php endforeach?>
      </select>

    </form>

  </div>
</div>

<div id="visitdk-regions-current">
  <?php foreach ($regions as $region):?>
  <div class="region-information" id="region-information-<?php echo $region->vid?>">
    <h2 class="title"><?php echo $region->title?></h2>
    <div class="body"><?php echo $region->body?></div>
  </div>
  <?php endforeach ?>
</div>

<div id="visitdk-regions-map">
  <?php echo $map?>
</div>

<div class="clearfix"></div>
<p>&nbsp;</p>
<p>&nbsp;</p>