jQuery(document).ready(function($){
  if($(window).width() < 480 )
  {
    $("[id^=edit-line-item-fields-field-line-item-comment]").attr('placeholder', 'Kommentar')
  }
});
