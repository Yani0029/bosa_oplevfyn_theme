<div id="page" class="container iframe front ">

<?php 
        if ($page['content']['system_main']['main']) {   
        $page_content = $page['content']['system_main']['main']['#markup'];

        // Widget pages: add 'parent' target to node links
        $page['content'] = preg_replace('/<a (.+?)>/','<a $1 target="_blank">',$page_content);
        }
?>

        <div id="content"><?php print render($page['content']); ?></div>

</div>
