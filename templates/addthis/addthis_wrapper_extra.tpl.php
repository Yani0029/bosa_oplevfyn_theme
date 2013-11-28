<div class="sharebox-t1">
  <ul>
    <!--<li><a href="#" title="" class="add"><span>Add</span></a></li>-->

    <li>
      <a class="share-button" id="sharebox" href="#"><span class="icon"></span> <?php print t('Share'); ?> </a>

      <div class="drop" id="sharebox-drop" style="visibility:hidden;display:none;">

        <div class="bg">

          <div class="px">

            <ul>
              <?php print($content); ?>
            </ul>

          </div>  

          <div class="cpy">

            <div class="lf">
              <input type="text" name="share-url" id="share-url" value="" readonly="readonly" class="share-url" />
            </div>

            <div class="rg">
              
              <div id="sharebox-d-clip" class="bx">
                
                <div id="sharebox-d-clip-button" class="close-btn"> <?php print t('Copy url'); ?> </div>
                
              </div>
              
            </div>

            <div class="cl"></div>

          </div>

        </div>

      </div>
    </li>

  </ul>	

</div>