
(function ($) {
  
/***********************************
 *    CHECKBOXES
 **********************************/
  
  Drupal.behaviors.checkboxesprocess = {
    attach: function (context, settings) {
      
    
      var formcheckedclass = function(thiselement) {
              var label = jQuery("[for=" + jQuery(thiselement).attr("id") + "]");

              if (jQuery(thiselement).is(":checked")) {
                  jQuery(label).addClass('checked');
                  jQuery(thiselement).parents('fieldset').addClass('active active-trail');
              }
              else {
                  jQuery(label).removeClass('checked');
              }

      }

      jQuery('.webform-client-form input:checkbox, .webform-client-form input:radio, .views-exposed-form input:checkbox, .views-exposed-form input:radio').each(function () {

          formcheckedclass(jQuery(this));

            jQuery(this).click(function () {
               formcheckedclass(jQuery(this));
            });
          });



          } 
  
  };
}(jQuery));




jQuery(document).ready(function() {



/*Add Slider*/

jQuery('#edit-submitted-accommodation-hotel-category').selectToUISlider().hide();
/*Replace the src of the first image in the box listing of my guide*/

var srcOfTheFirstImage = jQuery('#content .pane-my-guide-list.blocks-3-custom .TellusProductList .TellusProduct:first-child img').attr('src');

    if ( typeof srcOfTheFirstImage !== "undefined" && srcOfTheFirstImage.length > 4) {
        var srcSubstr = srcOfTheFirstImage.substr(0, srcOfTheFirstImage.length - 3);
        var imageBoxSize = srcSubstr + '583';
        jQuery('#content .pane-my-guide-list.blocks-3-custom .TellusProductList .TellusProduct:first-child img').attr('src', imageBoxSize);
    } 




/*Footer height*/
var footerHeight = jQuery('.desktop #page > footer').height() + 14;
jQuery('.desktop #main-content').css('padding-bottom',footerHeight + 'px');

/**********************
 * slider2-img1-head
 **********************/


jQuery('#slider2-desc').replaceWith(function() {
  return '<p id="slider2-desc">' + jQuery("#slider2-img1-desc").html() + '</p>';
});

jQuery('#slider2-overlay-title').replaceWith(function() {
  return '<p id="slider2-overlay-title">' + jQuery("#slider2-img1-head").text() + '</p>';
});

 if (jQuery("#slider2-indi1-li .mplay").length ) {
    jQuery('#slider2-play-enl').css('display', 'block');
    jQuery('#slider2-play-enl').attr('rel', 'slider2-img1');
}

jQuery(".hidden.gallery-popup-title:first").hide();
jQuery('.gallery-popup-title:not(.hidden)').replaceWith(function() {
  return jQuery(".hidden.gallery-popup-title:first").text();
});

var contentFirstImageSlider = jQuery('#slider2-img1-i').attr('src');

jQuery('#slider2-overlay .img img').attr('src', contentFirstImageSlider);

/**************************
  SEARCH INPUT VALUE
***************************/
  
	var message = jQuery("#search-block-form label").html(); // getting the value of the invissible label
  jQuery("#search-block-form .form-text").val(message); // setting the value of the search form to the text of the label
  
  jQuery("#search-block-form .form-text").live("click", function(){
    var textmessage = jQuery("#search-block-form .form-text").val(); 
    if(textmessage == message) 
      jQuery("#search-block-form .form-text").val("");
     }
  );
    
  jQuery("#search-block-form .form-text").live("blur", function(){ 
   var text = jQuery("#search-block-form .form-text").val();  
   if(text == "") 
     jQuery("#search-block-form .form-text").val(message);
  });

/**************************
  JQTRANSFORM
***************************/
  /*These settings need to be done in admin/config/system/transform*/

/**************************
  TOOLTIP
***************************/

  jQuery(".custom_block_image_mouseover_teaser:not(:empty)").each( function(){
  jQuery(this).hide();
  jQuery(this).parent().tooltip({ 
    bodyHandler: function() { 
            return jQuery(this).children('.custom_block_image_mouseover_teaser').html(); 
        }, 
        track: true, 
        delay: 0, 
        showURL: false
    });
  });

/**************************
  ACCORDEON BROWSE FOR: Encyclopedia Filter
***************************/

  jQuery(".collapsibleList > li > span").nextAll().hide();
  
  jQuery(".collapsibleList > li > ul li a.active").parent().parent().parent().children('span').addClass('active active-trail').nextAll().show();
  jQuery(".collapsibleList > li > span").click( function(){
    jQuery(this).toggleClass('active active-trail').nextAll().slideToggle("fast");
    
  });
  
  
/**************************
  SEARCH RESULT LI LINK ADD FROM LINK
***************************/
jQuery('.panel-twocol_75_25_stacked .pane-tellus-search .TellusProduct, .panel-twocol_75_25_stacked .visitdk-search-search-result, #content .panel-searchpage .visitdk-search-search-result, #content .panel-searchpage .TellusProductList .TellusProduct, .visitdk-search-search-result, #activities .view-content .views-row').click(function() {
    window.location = jQuery(this).find('a:first').attr('href');
});

/**************************
  ACCORDEON BROWSE FOR: tellus page
***************************/

//hide lists
jQuery(".FacilityCategoryList ul > li > h4").next("ul").hide();

// expand lists if they are 3 or less and have 3 or less items in them
var facilitysize = jQuery(".FacilityCategoryList > ul > li").size();
var facilitysizechildshow = 0;

jQuery(".FacilityCategoryList > ul > li > ul").each( function () {
  
  var facilitysizechild = jQuery(this).children('li').size();
  if (facilitysizechild > 3){
    facilitysizechildshow = 1;
  }
});
if ((facilitysize <= 3) && (facilitysizechildshow == 0)){  
  jQuery(".FacilityCategoryList ul > li > h4").toggleClass('expanded').next("ul").slideToggle("fast");
} 

//expand lists on click
jQuery(".FacilityCategoryList ul > li > h4").click( function(){
  
  jQuery(this).toggleClass('expanded').next("ul").slideToggle("fast");
  
});
jQuery(".ProductTransportList ul > li > h4").next("div").hide();
jQuery(".ProductTransportList ul > li > h4").click( function(){
  
  jQuery(this).toggleClass('expanded').next("div").slideToggle("fast");
  
});
/**************************
  SEARCH BUTTONS HOVER
***************************/
    jQuery('body.desktop .ProductNavigation > *:first-child, body.desktop .panel-threecol252550 .section-box-572 .search-results .buttons-hover > *:first-child').addClass('first');
        jQuery('body.desktop .ProductNavigation > *:last-child, body.desktop .panel-threecol252550 .section-box-572 .search-results .buttons-hover > *:last-child').addClass('last');
  jQuery('body.desktop .ProductNavigation > *, body.desktop .panel-threecol252550 .section-box-572 .search-results .buttons-hover > *').hide();
  jQuery("body.desktop .panel-threecol252550 .TellusProduct, body.desktop .panel-threecol252550 .visitdk-search-search-result").hover( function(){
  
    jQuery(this).addClass('hover').find('.ProductNavigation > *, .buttons-hover > *').fadeIn('fast');
  
  }, function(){
    
    jQuery(this).removeClass('hover').find('.ProductNavigation > *, .buttons-hover > *').fadeOut('fast');
    
  });

/**************************
  Float: first item in main nav if it is myguide
***************************/
jQuery('#block-menu-block-2 ul.menu li.first a.myguide').parent().addClass('fright');

/**************************
  ACCORDEON BROWSE FOR: Encyclopedia Filter
***************************/






/**************************
DROP DOWNS CLASSES
 *************************/
jQuery('.desktop #block-menu-block-1 ul.menu a').mouseover( function(){
  jQuery('.qtip .panel-panel + .panel-panel').parents('div.qtip').addClass('multiple');
});


/**************************
  FILE INPUTS
***************************/

jQuery('body:not(".imce") input:file').each( function(){
  jQuery(this).addClass('filerepl').wrap('<div class="file" />').wrap('<div class="fil" />');

  jQuery(this).parent().parent().append('<div class="inp"><div class="pd"><input type="text" value="" id="'+ jQuery(this).attr("id") + '-name" class="filerepl-name" readonly="readonly" /></div></div>');

});

});









/**************************
  FILE:   TOOLTIP
***************************/

/*
 * jQuery Tooltip plugin 1.3
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-tooltip/
 */
eval(function(p,a,c,k,e,r){e=function(c){return(c<a?'':e(parseInt(c/a)))+((c=c%a)>35?String.fromCharCode(c+29):c.toString(36))};if(!''.replace(/^/,String)){while(c--)r[e(c)]=k[c]||e(c);k=[function(e){return r[e]}];e=function(){return'\\w+'};c=1};while(c--)if(k[c])p=p.replace(new RegExp('\\b'+e(c)+'\\b','g'),k[c]);return p}(';(8($){j e={},9,m,B,A=$.2u.2g&&/29\\s(5\\.5|6\\.)/.1M(1H.2t),M=12;$.k={w:12,1h:{Z:25,r:12,1d:19,X:"",G:15,E:15,16:"k"},2s:8(){$.k.w=!$.k.w}};$.N.1v({k:8(a){a=$.1v({},$.k.1h,a);1q(a);g 2.F(8(){$.1j(2,"k",a);2.11=e.3.n("1g");2.13=2.m;$(2).24("m");2.22=""}).21(1e).1U(q).1S(q)},H:A?8(){g 2.F(8(){j b=$(2).n(\'Y\');4(b.1J(/^o\\(["\']?(.*\\.1I)["\']?\\)$/i)){b=1F.$1;$(2).n({\'Y\':\'1D\',\'1B\':"2r:2q.2m.2l(2j=19, 2i=2h, 1p=\'"+b+"\')"}).F(8(){j a=$(2).n(\'1o\');4(a!=\'2f\'&&a!=\'1u\')$(2).n(\'1o\',\'1u\')})}})}:8(){g 2},1l:A?8(){g 2.F(8(){$(2).n({\'1B\':\'\',Y:\'\'})})}:8(){g 2},1x:8(){g 2.F(8(){$(2)[$(2).D()?"l":"q"]()})},o:8(){g 2.1k(\'28\')||2.1k(\'1p\')}});8 1q(a){4(e.3)g;e.3=$(\'<t 16="\'+a.16+\'"><10></10><t 1i="f"></t><t 1i="o"></t></t>\').27(K.f).q();4($.N.L)e.3.L();e.m=$(\'10\',e.3);e.f=$(\'t.f\',e.3);e.o=$(\'t.o\',e.3)}8 7(a){g $.1j(a,"k")}8 1f(a){4(7(2).Z)B=26(l,7(2).Z);p l();M=!!7(2).M;$(K.f).23(\'W\',u);u(a)}8 1e(){4($.k.w||2==9||(!2.13&&!7(2).U))g;9=2;m=2.13;4(7(2).U){e.m.q();j a=7(2).U.1Z(2);4(a.1Y||a.1V){e.f.1c().T(a)}p{e.f.D(a)}e.f.l()}p 4(7(2).18){j b=m.1T(7(2).18);e.m.D(b.1R()).l();e.f.1c();1Q(j i=0,R;(R=b[i]);i++){4(i>0)e.f.T("<1P/>");e.f.T(R)}e.f.1x()}p{e.m.D(m).l();e.f.q()}4(7(2).1d&&$(2).o())e.o.D($(2).o().1O(\'1N://\',\'\')).l();p e.o.q();e.3.P(7(2).X);4(7(2).H)e.3.H();1f.1L(2,1K)}8 l(){B=S;4((!A||!$.N.L)&&7(9).r){4(e.3.I(":17"))e.3.Q().l().O(7(9).r,9.11);p e.3.I(\':1a\')?e.3.O(7(9).r,9.11):e.3.1G(7(9).r)}p{e.3.l()}u()}8 u(c){4($.k.w)g;4(c&&c.1W.1X=="1E"){g}4(!M&&e.3.I(":1a")){$(K.f).1b(\'W\',u)}4(9==S){$(K.f).1b(\'W\',u);g}e.3.V("z-14").V("z-1A");j b=e.3[0].1z;j a=e.3[0].1y;4(c){b=c.2o+7(9).E;a=c.2n+7(9).G;j d=\'1w\';4(7(9).2k){d=$(C).1r()-b;b=\'1w\'}e.3.n({E:b,14:d,G:a})}j v=z(),h=e.3[0];4(v.x+v.1s<h.1z+h.1n){b-=h.1n+20+7(9).E;e.3.n({E:b+\'1C\'}).P("z-14")}4(v.y+v.1t<h.1y+h.1m){a-=h.1m+20+7(9).G;e.3.n({G:a+\'1C\'}).P("z-1A")}}8 z(){g{x:$(C).2e(),y:$(C).2d(),1s:$(C).1r(),1t:$(C).2p()}}8 q(a){4($.k.w)g;4(B)2c(B);9=S;j b=7(2);8 J(){e.3.V(b.X).q().n("1g","")}4((!A||!$.N.L)&&b.r){4(e.3.I(\':17\'))e.3.Q().O(b.r,0,J);p e.3.Q().2b(b.r,J)}p J();4(7(2).H)e.3.1l()}})(2a);',62,155,'||this|parent|if|||settings|function|current||||||body|return|||var|tooltip|show|title|css|url|else|hide|fade||div|update||blocked|||viewport|IE|tID|window|html|left|each|top|fixPNG|is|complete|document|bgiframe|track|fn|fadeTo|addClass|stop|part|null|append|bodyHandler|removeClass|mousemove|extraClass|backgroundImage|delay|h3|tOpacity|false|tooltipText|right||id|animated|showBody|true|visible|unbind|empty|showURL|save|handle|opacity|defaults|class|data|attr|unfixPNG|offsetHeight|offsetWidth|position|src|createHelper|width|cx|cy|relative|extend|auto|hideWhenEmpty|offsetTop|offsetLeft|bottom|filter|px|none|OPTION|RegExp|fadeIn|navigator|png|match|arguments|apply|test|http|replace|br|for|shift|click|split|mouseout|jquery|target|tagName|nodeType|call||mouseover|alt|bind|removeAttr|200|setTimeout|appendTo|href|MSIE|jQuery|fadeOut|clearTimeout|scrollTop|scrollLeft|absolute|msie|crop|sizingMethod|enabled|positionLeft|AlphaImageLoader|Microsoft|pageY|pageX|height|DXImageTransform|progid|block|userAgent|browser'.split('|'),0,{}))


/**************************
  ERROR MESSAGES FOR WEB WORMS
***************************/

var closemessage = function(thisElement){
    jQuery(thisElement).parent().slideUp('fast');
}



/* Singleline functions
---------------------------------------------------------------- */

function $d(d){
	return document.getElementById(d);
}

function $z(matchClass)
{
  return jQuery(matchClass);
}
/* Slider
---------------------------------------------------------------- */

var sw = 0;var current = 1;
var slidertim;var swclick = false;var swrestart;
var stimer = Math.round(8000 / 50); // Seconds to next switch (8000 miliseconds)

var slideshow = function(){
	return {
		initialize:function(f){
			var obj = $d(f);
			var txt = $d(f+'-txt1');
			var lst = $d(f+'-list');
			if(obj && txt && lst){
				var cx = 1;
				var x = slideshow.count(f,true);
				if(x>1){
					slidertim = setTimeout("slideshow.timer('"+f+"');", stimer);
					txt.style.display = 'block';
					obj.onmouseover = function(){slideshow.navi(f,true);};
					obj.onmouseout = function(){slideshow.navi(f,false);};
					var items = obj.getElementsByTagName('*');
					for(var d=0;d<items.length;d+=1){
						var str = items[d].className;
						if(str.indexOf('stxt')!=-1 || str.indexOf('image')!=-1 || str.indexOf('navi')!=-1){
							items[d].onmouseover = function(){slideshow.navi(f,true);};
							items[d].onmouseout = function(){slideshow.navi(f,false);};
						}
						if(items[d].className=='slnk'){
							items[d].id = f+'-raw'+cx;
							items[d].onclick = function(){slideshow.click(this,f);return false;}
							cx++;
						}
					}
				}
			}
		},
		timer:function(f){
			var obj = $d(f+'-indi'+current);
			if(obj){
				var w = parseInt(obj.style.width);
				if(w>=100){
					sw = 0;
					obj.style.width = '0%';
					slideshow.next(f,false);
				}else{
					sw = sw + 2;
					obj.style.width = sw + '%';
					slidertim = setTimeout("slideshow.timer('"+f+"');", stimer);
				}
			}
		},
		navi:function(f,s){
			var nav = $d(f+'-navi');
			if(nav){
				if(s){
					nav.className = 'navi display';
					if(swclick){clearTimeout(swrestart);}
					slideshow.tip(f,true);
				}else{
					nav.className = 'navi display';
					slideshow.tip(f,false);
					if(swclick){
						clearTimeout(swrestart);
						swrestart = setTimeout("slideshow.restart('"+f+"');", 3000);
					}
				}
			}
		},
		tip:function(f,s){
			var obj = $d(f+'-txt'+current);
			var nav = $d(f+'-navi');
			if(obj && nav){
				var opa = parseInt(library.getstyle(f+'-navi','opacity'));
				var str = obj.className;
				if(str.indexOf('bottomleft')!=-1 || str.indexOf('bottomright')!=-1){
					if(opa==1 || s){
						//obj.style.bottom = '85px';
					}else{
						//obj.style.bottom = '25px';
					}
				}
			}
		},
		restart:function(f){
			slidertim = setTimeout("slideshow.start('"+f+"');", 3000);
		},
		stop:function(f,m){
			if(m){clearTimeout(slidertim);}
		},
		start:function(f){
			clearTimeout(slidertim);
			slidertim = setTimeout("slideshow.timer('"+f+"');", stimer);
		},
		next:function(f,c,m){
			slideshow.reset(f);
			var x = parseInt(slideshow.count(f));
			if(!c){if(current==x){current=1;}else{current++;}}else{current=m;}
			var imx = $d(f+'-img'+current);
			var lix = $d(f+'-indi'+current+'-li');
			var lnk = $d(f+'-item'+current+'-links');
			var txt = $d(f+'-txt'+current);
			if(imx && lix && lnk && txt){
				var y = f+'-img'+current+'-i';
				var z = f+'-img'+current;
				var t = f+'-txt'+current;
				var iev = '';var isie = false;if(document.all){isie = true;if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){iev = new Number(RegExp.$1);}}
				imx.style.display = 'block';
				if(!c){slidertim = setTimeout("slideshow.timer('"+f+"');", 1000);}
				if(isie && iev<9){
					slideshow.set(z, 0);
					setTimeout("slideshow.fader('"+z+"',0,100,100);", 10);
				}else{
					slideshow.set(z, 0);
					setTimeout("slideshow.fader('"+z+"',0,100,800);", 10);
				}
				lix.className = 'active';
				lnk.style.display = 'block';
				txt.style.display = 'block';
				setTimeout("slideshow.redun('"+f+"');", 700);
				setTimeout("slideshow.delays('"+f+"');", 1000);
				slideshow.set(t, 0);
				slideshow.tip(f);
			}
		},
		delays:function(f){
			var t = f+'-txt'+current;
			slideshow.set(t, 100);
		},
		redun:function(f){
			var cux = $d(f+'-img'+current+'-i');
			var olx = $d(f+'-redun');
			if(cux && olx){olx.src = cux.src;}
		},
		click:function(t,f,m){
			var _m = t.id.toString();
			var _r = f + '-raw';_m = _m.replace(_r, '');
			clearTimeout(slidertim);
			slideshow.next(f,true,_m);
			swclick = true;
			try{t.blur();}catch(e){}
		},
		count:function(f,m){
			var obj = $d(f);
			var count = 0;
			var items = obj.getElementsByTagName('div');
			var images = new Array()
			for(var d=0;d<items.length;d+=1){
				var str = items[d].className;
				if(str.indexOf('image')!=-1){
					count++;
					if(m){
						var imx = $d(items[d].id+'-i');
						if(imx){
							images[d] = new Image();
							images[d].src = imx.src;
						}
					}
				}
			}
			return count;
		},
		reset:function(f){
			var obj = $d(f);
			var lst = $d(f+'-list');
			var lnk = $d(f+'-links');
			if(obj && lst){
				var items = obj.getElementsByTagName('*');
				for(var d=0;d<items.length;d+=1){
					var str = items[d].className;
					if(items[d].className=='image' || items[d].className=='image autohide'){items[d].style.display = 'none';}
					if(str.indexOf('stxt')!=-1){items[d].style.display = 'none';}
				}
				var list = lst.getElementsByTagName('*');
				for(var d=0;d<list.length;d+=1){
					var str = list[d].className;
					if(str.indexOf('active')!=-1){list[d].className = '';}
					if(list[d].className=='in'){list[d].style.width = '0%';}
				}
				var links = lnk.getElementsByTagName('div');
				for(var d=0;d<links.length;d+=1){links[d].style.display = 'none';}
			}
		},
		set:function(id,opacity){
			var obj = $d(id);
			if(obj){
				obj.style.opacity = (opacity / 100);
				obj.style.MozOpacity = (opacity / 100);
				obj.style.KhtmlOpacity = (opacity / 100);
				obj.style.filter = "alpha(opacity=" + opacity + ")";
			}
		},
		fader:function(id,opacStart,opacEnd,millisec){
			var speed = Math.round(millisec / 100);
			var timer = 0;
			if(opacStart>opacEnd){
				for(i=opacStart;i<=opacEnd;i=i-2){
					setTimeout("slideshow.set('" + id + "'," + i + ")",(timer * speed));
					timer++;
				}
			}else if(opacStart<opacEnd){
				for(i=opacStart;i<=opacEnd;i=i+2){
					setTimeout("slideshow.set('" + id + "'," + i + ")",(timer * speed));
					timer++;
				}
			}
		}
	};
}();

/* Embed slideshow
---------------------------------------------------------------- */

var sw = 0;var current = 1;var seccou = 1;var swkeyb;
var slidertim;var swclick = false;var swrestart;var swtimst;
var stimer = Math.round(8000 / 50); // Seconds to next switch (8000 miliseconds)

var slideembed = function(){
	return {
		initialize:function(f){
			var obj = $d(f);
			var lst = $d(f+'-list');
			var bck = $d(f+'-navi-back');
			var nxt = $d(f+'-navi-next');
			var nav = $d(f+'-navi');
			if(obj && lst && bck && nxt && nav){
				var cx = 1;
				var x = slideembed.count(f,true);
				if(x>1){
					slidertim = setTimeout("slideembed.timer('"+f+"');", stimer);
					obj.onmouseover = function(){slideembed.navi(f,true);};
					obj.onmouseout = function(){slideembed.navi(f,false);};
					bck.onmouseover = function(){slideembed.navi(f,true);};
					bck.onmouseout = function(){slideembed.navi(f,false);};
					bck.onclick = function(){slideembed.navgo(this,'back',f);return false;};
					nxt.onmouseover = function(){slideembed.navi(f,true);};
					nxt.onmouseout = function(){slideembed.navi(f,false);};
					nxt.onclick = function(){slideembed.navgo(this,'next',f);return false;};
					var items = obj.getElementsByTagName('*');
					for(var d=0;d<items.length;d+=1){
						var str = items[d].className;
						if(str.indexOf('image')!=-1 || str.indexOf('navi')!=-1){
							items[d].onmouseover = function(){slideembed.navi(f,true);};
							items[d].onmouseout = function(){slideembed.navi(f,false);};
							if(str.indexOf('image')!=-1){
								var tx = $d(items[d].id+'-play');
								if(tx){tx.onclick = function(){slideembed.play(f,this,'play');return false;};}
							}
						}
						if(items[d].className=='slnk'){
							items[d].id = f+'-raw'+cx;
							items[d].onclick = function(){slideembed.click(this,f);return false;}
							cx++;
						}
					}
					swtimst = setTimeout("slideembed.navi('"+f+"',false);", 5000);
					slideembed.copytooverlay(f);
					slideembed.navdetermine(f);
					swkeyb = f;
					
					// Add click events
					if($d(f+'-overlay-close')){$d(f+'-overlay-close').onclick = function(){slideembed.popup(this,'hide',f);return false;};}
					if($d(f+'-navi-back-enl1')){$d(f+'-navi-back-enl1').onclick = function(){slideembed.navgo(this,'back',f);return false;};}
					if($d(f+'-navi-next-enl1')){$d(f+'-navi-next-enl1').onclick = function(){slideembed.navgo(this,'next',f);return false;};}
					if($d(f+'-play-enl')){$d(f+'-play-enl').onclick = function(){slideembed.play(f,this,'play');return false;};}
					if($d(f+'-close-lnk-enl')){$d(f+'-close-lnk-enl').onclick = function(){slideembed.play(f,this,'stop');return false;};}
					if($d(f+'-navi-back-enl2')){$d(f+'-navi-back-enl2').onclick = function(){slideembed.navgo(this,'back',f);return false;};}
					if($d(f+'-navi-next-enl2')){$d(f+'-navi-next-enl2').onclick = function(){slideembed.navgo(this,'next',f);return false;};}
					if($d(f+'-enlarge-lnk')){$d(f+'-enlarge-lnk').onclick = function(){slideembed.popup(this,'show',f);return false;};}
					if($d(f+'-close-lnk')){$d(f+'-close-lnk').onclick = function(){slideembed.play(f,this,'stop');return false;};}
				}else{
					nav.style.display = 'none';
				}
			}
		},
		copytooverlay:function(f){
			var obja = $d(f+'-mover');
			var objb = $d(f+'-mover-enl');
			if(obja && objb){
				objb.innerHTML = obja.innerHTML;
				var items = objb.getElementsByTagName('*');
				for(var d=0;d<items.length;d+=1){
					var idx = items[d].id;
					if(idx!=''){items[d].id = idx + '-enl';}
					if(items[d].className=='slnk'){
						items[d].onclick = function(){slideembed.enlclick(this,f);return false;}
					}
				}
			}
		},
		timer:function(f){
			var obj = $d(f+'-indi'+current);
			var obja = $d(f+'-indi'+current+'-enl');
			if(obj && obja){
				var w = parseInt(obj.style.width);
				if(w>=100){
					sw = 0;
					obj.style.width = '0%';
					obja.style.width = '0%';
					slideembed.next(f,false);
					slideembed.navline(f,'next');
				}else{
					sw = sw + 2;
					obj.style.width = sw + '%';
					obja.style.width = sw + '%';
					slidertim = setTimeout("slideembed.timer('"+f+"');", stimer);
				}
			}
		},
		navi:function(f,s){
			var nav = $d(f+'-navi');
			var enl = $d(f+'-enlarge');
			var clo = $d(f+'-close');
			var pla = $d(f+'-player');
			if(nav && enl && clo && pla){
				if(s){
					nav.className = 'navi display';
					if(swclick){clearTimeout(swrestart);}
					var dis = library.getstyle(f+'-player', 'display');
					if(dis=='block'){
						clo.style.display = 'block';
					}else{
						enl.style.display = 'block';
					}
					clearTimeout(swtimst);
				}else{
					nav.className = 'navi';
					enl.style.display = 'none';
					clo.style.display = 'none';
					if(swclick){
						clearTimeout(swrestart);
						//swrestart = setTimeout("slideembed.restart('"+f+"');", 3000);
					}
				}
			}
		},
		navline:function(f,s){
			var mov = $d(f+'-mover');
			var mova = $d(f+'-mover-enl');
			if(mov && mova){
				var all = parseInt(slideembed.count(f));
				if(all>9){
					var y = parseInt(library.getstyle(f+'-mover', 'left'));
					var _y = -((current - 1) * 54);
					var dis = library.getstyle(f+'-overlay', 'display');
					var stage = Math.ceil((current/9));
					if(s=='back'){
						if(current==1){_y = 0;}
						if(current>=(all-7)){_y = -((all-9) * 54);}else{if(current>=1 && current<9){_y = 0;}else{_y = -((stage-1) * (9) * 54);}}
						if(dis=='block'){
							mover.move(f+'-mover-enl',y,_y);
							mov.style.left = _y + 'px';
						}else{
							mover.move(f+'-mover',y,_y);
							mova.style.left = _y + 'px';
						}
					}
					if(s=='next'){
						if(current>=1 && current<9){_y = 0;}else{_y = -((stage-1) * (9) * 54);}
						if(current>=(all-9)){_y = -((all-9) * 54);}
						if(current==1){_y = 0;}
						if(dis=='block'){
							mover.move(f+'-mover-enl',y,_y);
							mov.style.left = _y + 'px';
						}else{
							mover.move(f+'-mover',y,_y);
							mova.style.left = _y + 'px';
						}
					}
				}
				slideembed.navdetermine(f);
			}
		},
		navgo:function(f,s,t){
			var alw = true;
			try{f.blur();}catch(e){}
			if(s=='back'){if(current>1){alw=true;current=current-2;}else{alw=false;}}
			if(s=='next'){
				var all = parseInt(slideembed.count(t));
				if(current==all){
					alw = false;
				}
			}
			if(alw){
				sw = 0;
				clearTimeout(slidertim);
				slideembed.next(t,false);
				slideembed.navline(t,s);
			}
			slideembed.navdetermine(t);
		},
		navdetermine:function(f){
			var bck = $d(f+'-navi-back');
			var nxt = $d(f+'-navi-next');
			var bcka = $d(f+'-navi-back-enl1');
			var nxta = $d(f+'-navi-back-enl1');
			var bckb = $d(f+'-navi-back-enl2');
			var nxtb = $d(f+'-navi-back-enl2');
			if(bck && nxt && bcka && nxta && bckb && nxtb){
				var all = parseInt(slideembed.count(f));
				if(current==1){
					slideembed.set(f+'-navi-back', 20);
					slideembed.set(f+'-navi-back-enl1', 0);
					slideembed.set(f+'-navi-back-enl2', 20);
				}else{
					slideembed.set(f+'-navi-back', 100);
					slideembed.set(f+'-navi-back-enl1', 100);
					slideembed.set(f+'-navi-back-enl2', 100);
				}
				if(current==(all)){
					slideembed.set(f+'-navi-next', 20);
					slideembed.set(f+'-navi-next-enl1', 0);
					slideembed.set(f+'-navi-next-enl2', 20);
				}else{
					slideembed.set(f+'-navi-next', 100);
					slideembed.set(f+'-navi-next-enl1', 100);
					slideembed.set(f+'-navi-next-enl2', 100);
				}
			}
		},
		restart:function(f){
			slidertim = setTimeout("slideembed.start('"+f+"');", 3000);
		},
		stop:function(f,m){
			if(m){clearTimeout(slidertim);}
		},
		start:function(f){
			clearTimeout(slidertim);
			slidertim = setTimeout("slideembed.timer('"+f+"');", stimer);
		},
		next:function(f,c,m){
			slideembed.reset(f);
			var x = parseInt(slideembed.count(f));
			if(!c){if(current==x){current=1;}else{current++;}}else{current=m;}
			var imx = $d(f+'-img'+current);
			var lix = $d(f+'-indi'+current+'-li');
			var lixa = $d(f+'-indi'+current+'-li-enl');
			var eni = $d(f+'-overlay-img');
			var ens = $d(f+'-raw'+current);
			var txt = $d(f+'-img'+current+'-desc');
			var des = $d(f+'-desc');
			var hed = $d(f+'-img'+current+'-head');
			var tit = $d(f+'-overlay-title');
			var lbl = $d(f+'-overlay-label');
			var ifa = $d(f+'-img'+current+'-iframe');
			var pbt = $d(f+'-play-enl');
			if(imx && lix && lixa && eni && ens){
				var y = f+'-img'+current+'-i';
				var z = f+'-img'+current;
				var t = f+'-txt'+current;
				var iev = '';var isie = false;if(document.all){isie = true;if(/MSIE (\d+\.\d+);/.test(navigator.userAgent)){iev = new Number(RegExp.$1);}}
				imx.style.display = 'block';
				eni.src = ens.rel;
				if(pbt){
					if(ifa){
						pbt.style.display = 'block';
						pbt.rel = f+'-img'+current;
					}else{
						pbt.style.display = 'none';
					}
				}
				if(!c){slidertim = setTimeout("slideembed.timer('"+f+"');", 1000);}
				if(isie && iev<9){
					slideembed.set(z, 0);
					setTimeout("slideembed.fader('"+z+"',0,100,100);", 10);
				}else{
					slideembed.set(z, 0);
					setTimeout("slideembed.fader('"+z+"',0,100,800);", 10);
				}
				lix.className = 'active';
				lixa.className = 'active';
				setTimeout("slideembed.redun('"+f+"');", 700);
				setTimeout("slideembed.delays('"+f+"');", 1000);
				slideembed.set(t, 0);
				if(des && txt){des.innerHTML = txt.innerHTML;}
				if(hed && tit){if(tit.innerHTML!=''){tit.innerHTML = hed.innerHTML;}else{lbl.style.display = 'none';}}else{lbl.style.display = 'none';}
			}
		},
		delays:function(f){
			var t = f+'-txt'+current;
			slideembed.set(t, 100);
		},
		redun:function(f){
			var cux = $d(f+'-img'+current+'-i');
			var olx = $d(f+'-redun');
			if(cux && olx){olx.src = cux.src;}
		},
		click:function(t,f,m){
			var _m = t.id.toString();
			var _r = f + '-raw';_m = _m.replace(_r, '');
			clearTimeout(slidertim);
			slideembed.next(f,true,_m);
			swclick = true;
			try{t.blur();}catch(e){}
			slideembed.navdetermine(f);
		},
		enlclick:function(t,f,m){
			var _m = t.id.toString();
			var _r = f + '-raw';
			_m = _m.replace(_r, '');
			_m = _m.replace('-enl', '');
			clearTimeout(slidertim);
			slideembed.next(f,true,_m);
			swclick = true;
			try{t.blur();}catch(e){}
			slideembed.navdetermine(f);
		},
		play:function(f,s,m){
			var pla = $d(f+'-player');
			var ple = $d(f+'-player-enl');
			var vif = $d(f+'-video-iframe');
			var vie = $d(f+'-video-iframe-enl');
			var ove = $d(f+'-overlay');
			var cle = $d(f+'-close-enl');
			if(pla && ple && vif && vie && ove && cle){
				var dis = library.getstyle(f+'-overlay', 'display');
				if(m=='play'){
					var frm = $d(s.rel+'-iframe');
					if(frm){
						var str = frm.src.replace("autoPlay=0","autoPlay=1");
						if(dis=='block'){
							vie.src = str;
							ple.style.display = 'block';
							cle.style.display = 'block';
						}else{
							vif.src = str;
							pla.style.display = 'block';
						}
						clearTimeout(slidertim);
					}
				}else{
					pla.style.display = 'none';
					ple.style.display = 'none';
					cle.style.display = 'none';
					vif.src = 'about:blank';
					vie.src = 'about:blank';
					slideembed.restart(f);
				}
			}
		},
		count:function(f,m){
			var obj = $d(f);
			if(obj){
				var count = 0;
				var items = obj.getElementsByTagName('div');
				var images = new Array()
				for(var d=0;d<items.length;d+=1){
					var str = items[d].className;
					if(str.indexOf('image')!=-1){
						count++;
						if(m){
							var imx = $d(items[d].id+'-i');
							if(imx){
								images[d] = new Image();
								images[d].src = imx.src;
							}
						}
					}
				}
				return count;
			}
		},
		reset:function(f){
			var obj = $d(f);
			var lst = $d(f+'-list');
			var lsta = $d(f+'-list-enl');
			if(obj && lst && lsta){
				var items = obj.getElementsByTagName('*');
				for(var d=0;d<items.length;d+=1){
					var str = items[d].className;
					if(items[d].className=='image' || items[d].className=='image autohide'){
						items[d].style.display = 'none';
					}
					if(str.indexOf('stxt')!=-1){items[d].style.display = 'none';}
				}
				var list = lst.getElementsByTagName('*');
				for(var d=0;d<list.length;d+=1){
					var str = list[d].className;
					if(str.indexOf('active')!=-1){list[d].className = '';}
					if(list[d].className=='in'){list[d].style.width = '0%';}
				}
				var list = lsta.getElementsByTagName('*');
				for(var d=0;d<list.length;d+=1){
					var str = list[d].className;
					if(str.indexOf('active')!=-1){list[d].className = '';}
					if(list[d].className=='in'){list[d].style.width = '0%';}
				}
			}
		},
		set:function(id,opacity){
			var obj = $d(id);
			if(obj){
				obj.style.opacity = (opacity / 100);
				obj.style.MozOpacity = (opacity / 100);
				obj.style.KhtmlOpacity = (opacity / 100);
				obj.style.filter = "alpha(opacity=" + opacity + ")";
			}
		},
		fader:function(id,opacStart,opacEnd,millisec){
			var speed = Math.round(millisec / 100);
			var timer = 0;
			if(opacStart>opacEnd){
				for(i=opacStart;i<=opacEnd;i=i-2){
					setTimeout("slideembed.set('" + id + "'," + i + ")",(timer * speed));
					timer++;
				}
			}else if(opacStart<opacEnd){
				for(i=opacStart;i<=opacEnd;i=i+2){
					setTimeout("slideembed.set('" + id + "'," + i + ")",(timer * speed));
					timer++;
				}
			}
		},
		popup:function(f,m,t){
			var obj = $d(t+'-overlay');
			var gal = $d(t+'-gallery');
			var cou = $d(t+'-count');
			if(obj && gal && cou){
				var x = parseInt(slideembed.count(t));
				try{f.blur();}catch(e){}
				if(m=='show'){obj.style.display = 'block';jQuery('body').addClass('gallery-overlay-open');}
				if(m=='hide'){obj.style.display = 'none';slideembed.play(t,this,'stop');jQuery('body').removeClass('gallery-overlay-open');}
				if(x>1){
					cou.innerHTML = x;
				}else{
					gal.style.display = 'none';
				}
			}
		},
		keyboard:function(m){
			var x = parseInt(slideembed.count(swkeyb));
			if(x>1){
				if(m=='39' || m=='102' || m=='13'){slideembed.navgo(this,'next',swkeyb);}
				if(m=='37' || m=='100'){slideembed.navgo(this,'back',swkeyb);}
			}
			if(m=='27' || m=='35' || m=='36'){slideembed.popup(this,'hide',swkeyb);}
			if(m=='1' && m=='13'){slideembed.popup(this,'hide',swkeyb);}
		}
	};
}();

/* Explore images
---------------------------------------------------------------- */

var exploreimgs = function(){
	return {
		initialize:function(){
			var items = document.getElementsByTagName('div');
			for(var d=0;d<items.length;d+=1){
				var str = items[d].className;
				if(str.indexOf('explore-t1')!=-1){
					var imgs = items[d].getElementsByTagName('div');
					for(var m=0;m<imgs.length;m+=1){
						var stx = imgs[m].className;
						if(stx.indexOf('exp')!=-1){
							var nid = 'explore'+m;
							imgs[m].id = nid;
							imgs[m].onmouseover = function(){exploreimgs.over(this);};
						}
					}
				}
			}
		},
		over:function(f){
			var obj = $d(f.id);
			if(obj){
				exploreimgs.reset();
				obj.style.zIndex = '120';
			}
		},
		reset:function(){
			var items = document.getElementsByTagName('div');
			for(var d=0;d<items.length;d+=1){
				var str = items[d].className;
				if(str.indexOf('explore-t1')!=-1){
					var imgs = items[d].getElementsByTagName('div');
					var sta = 100;
					for(var m=0;m<imgs.length;m+=1){
						var stx = imgs[m].className;
						if(stx.indexOf('exp')!=-1){
							imgs[m].style.zIndex = sta;
							sta++;
						}
					}
				}
			}
		}
	};
}();

/* YouTube
---------------------------------------------------------------- */

var youtube = function(){
	return {
		thumbs:function(f){
			var obj = $d(f);
			if(obj){
				var items = obj.getElementsByTagName('a');
				for(var d=0;d<items.length;d+=1){
					var url = items[d].href;
					var des = items[d].title;
					var id = youtube.getid(url);
					items[d].innerHTML = '<img src="http://img.youtube.com/vi/'+id+'/2.jpg" alt="'+des+'" />';
				}
			}
		},
		getid:function(s){
			var gid = s.match('[\\?&]v=([^&#]*)');
			var url = gid[1];
			return url;
		}
	};
}();

/* Lists with rating
---------------------------------------------------------------- */

var listwrtim;var listwrold = '';

var listwr = function(){
	return {
		initialize:function(){
			var count = 1;
			var items = document.getElementsByTagName('div');
			for(var d=0;d<items.length;d+=1){
				var str = items[d].className;
				if(str.indexOf('item-w-rating')!=-1){
					items[d].id = 'itmwr'+count;
					items[d].onmouseover = function(){listwr.over(this);};
					items[d].onmouseout = function(){listwr.out(this);};
					count++;
				}
			}
		},
		over:function(f){
			listwrtim = setTimeout("listwr.show('"+f.id+"');", 500);
		},
		out:function(f){
			clearTimeout(listwrtim);
		},
		show:function(f){
			var obj = $d(f);
			if(obj){listwr.reset();obj.className = 'item-w-rating active';clearTimeout(listwrtim);}
		},
		hide:function(f){
			var obj = $d(f);
			if(obj){obj.className = 'item-w-rating inactive';}
		},
		reset:function(){
			var items = document.getElementsByTagName('div');
			for(var d=0;d<items.length;d+=1){
				var str = items[d].className;
				if(str.indexOf('item-w-rating')!=-1){
					listwr.hide(items[d].id);
				}
			}
		}
	};
}();

/* Sharebox (dropdown)
---------------------------------------------------------------- */

var shareboxallow = true;

var sharebox = function(){
	return {
		initialize:function(){

      jQuery('.share-button').each(function(){
      
		  var obj = jQuery(this);
      var container = obj.next();
			var url = jQuery('.share-url', container);
			var dro = jQuery('.drop', container);
			var sfa = jQuery('.facebook-share', container);
			var stw = jQuery('.twitter-share', container);
			var sgo = jQuery('.googleplus', container);
			var sem = jQuery('.email-share', container);
      
      if(obj && url && dro && sfa && stw && sgo && sem){
        var u = window.location.href;
        u = u.replace('http://www.','');
        u = u.replace('https://www.','');
        u = u.replace('http://','');
        u = u.replace('https://','');
        u = u.replace('www.','');
        url.val(u);
        url.click(
          function(){sharebox.embed(this);}
        );
        dro.click(
          function(){sharebox.disallow();}
        );
        obj.click(
          function(){sharebox.show(this);return false;}        
        );
        document.onclick = function(){sharebox.force();}
        sfa.click(
          function(){sharebox.click(this,'facebook');return false;}
        );
        stw.click(
          function(){sharebox.click(this,'twitter');return false;}
        );
        sgo.click(
          function(){sharebox.click(this,'googleplus');return false;}
        );
        sem.click(
          function(){sharebox.click(this,'email-share');return false;}
        );
        try{zeroinit();}catch(e){};                                         
      }
      });
		},
		show:function(f){
			var obj = jQuery(f).next('.drop');
			if(obj){
        if(obj.css('display') == 'block'){
            obj.css('display', 'none');
          }else{
            f.blur();
            obj.css('visibility', 'visible');
            obj.css('display', 'block');
            setTimeout("sharebox.timer();", 50);
            shareboxallow = false;
        }				
			}
		},
		delay:function(f){
			var obj = jQuery('.drop');
			if(obj){
        obj.css('display', 'none');
				shareboxallow = true;
			}
		},
		force:function(f){
			var obj = jQuery('.drop');
			if(obj){
				//if(shareboxallow && obj.style.display=='block'){
					setTimeout("sharebox.delay();", 200);
				//}
			}
		},
		timer:function(){
			shareboxallow = true;
		},
		disallow:function(){
			shareboxallow = false;
			setTimeout("sharebox.allow();", 200);
		},
		allow:function(){
			shareboxallow = true;
		},
		click:function(f,a,url){
			var slt = document.getElementsByTagName('title')[0];//$d('share-title');
			//var sld = $d('share-desc');
			//var sli = $d('share-image');
			if(slt /*&& sld && sli*/){
				sharebox.allow();
				sharebox.force(f);
				var pop = false;var drl;if(!url){drl = window.location.href;}else{drl = url;}
				var serurl;var xw;var xh;var t = slt.innerHTML;
				if(a=='facebook'){xw='660';xh ='340';serurl='http://www.facebook.com/sharer.php?u='+drl+'&t=';pop=true;}
				if(a=='twitter'){xw='560';xh ='440';serurl='https://www.twitter.com/share?url='+drl;pop=true;}
				if(a=='googleplus'){serurl='http://plusone.google.com/_/+1/confirm?hl=en&url='+drl;}
				if(a=='pinterest'){xw='660';xh ='300';serurl='https://pinterest.com/pin/create/button/?url='+drl+'&media='+sli.innerHTML+'&description='+encodeURIComponent(sld.innerHTML);pop=true;}
				if(a=='email-share'){pop = false;serurl = 'mailto:?subject='+t+'&body='+drl;}
				if(pop){
					var cw = (window.screen.width - xw) / 2;
					var ch = (window.screen.height - xh) / 3;
					var nwx = window.open(serurl,'sharer','toolbar=0,status=0,width='+xw+',height='+xh+',left='+cw+',top='+ch);
				}else{
					window.location = serurl;
				}
			}
		},
		embed:function(f){
			f.select();
		}
	};
}();

/* Share (embedded)
---------------------------------------------------------------- */

var shareembed = function(){
	return {
		initialize:function(){
			var url = $d('share-url-x');
			var sfa = $d('share-facebook-x');
			var stw = $d('share-twitter-x');
			var sgo = $d('share-googleplus-x');
			var sem = $d('share-email-x');
			if(url && sfa && stw && sgo && sem){
				var u = window.location.href;
				u = u.replace('http://www.','');
				u = u.replace('https://www.','');
				u = u.replace('http://','');
				u = u.replace('https://','');
				u = u.replace('www.','');
				url.value = u;
				url.onclick = function(){shareembed.embed(this);}
				sfa.onclick = function(){sharebox.click(this,'facebook');return false;};
				stw.onclick = function(){sharebox.click(this,'twitter');return false;};
				sgo.onclick = function(){sharebox.click(this,'googleplus');return false;};
				sem.onclick = function(){sharebox.click(this,'email');return false;};
			}
		},
		embed:function(f){
			f.select();
		}
	};
}();

/* Menu expander
---------------------------------------------------------------- */

var linklists = function(){
	return {
		initialize:function(){
			var items = document.getElementsByTagName('div');
			for(var d=0;d<items.length;d+=1){
				var str = items[d].className;
				if(str.indexOf('link-list')!=-1){
					var links = items[d].getElementsByTagName('a');
					for(var m=0;m<links.length;m+=1){
						var cls = links[m].className;
						if(cls.indexOf('moth')!=-1){
							var rl = links[m].rel;
							var elm = $d(rl);
							if(elm){
								links[m].id = rl+'-mother';
								links[m].className = 'moth plus';
								links[m].onclick = function(){linklists.click(this);return false;};
							}else{
								links[m].className = '';
							}
						}
						if(cls.indexOf('show')!=-1){
							elm.style.display = 'block';
							links[m].className = 'moth minus';
						}
					}
				}
			}
		},
		click:function(f){
			var m = f.id;
			var el = m.replace('-mother','')
			var obj = $d(el);
			var elm = $d(m);
			if(obj && elm){
				var s = library.getstyle(el,'display');
				obj.style.display = s;
				if(s=='none'){
					slider.down(el);
					elm.className = 'moth minus';
				}else{
					slider.up(el);
					elm.className = 'moth plus';
				}
			}
		}
	};
}();

/* Sliding divs <|> slider.toogle('divname',['customfunction()','anotherfunction()']);
---------------------------------------------------------------- */

var slider = function(){
	var sliding = false,slideAtClose=true,duration=0.6,obj,newHeight,curHeight;
	return {
		init:function(elm){
			obj = $d(elm);
			if(obj.style.display == 'none'){
				obj.style.display = 'block';
				obj.style.height = parseInt(obj.offsetHeight) + 'px';
				obj.style.display = 'none';
			}else if(obj.style.display == 'block'){
				obj.style.display = 'block';
				obj.style.height = parseInt(obj.offsetHeight) + 'px';
			}
		},
		toogle:function(elm,functions){
			obj = $d(elm);
			if(obj.style.display=='none'){
				slider.down(elm,functions);
			}else{
				slider.up(elm,functions);
			}
		},
		down:function(elm,functions){
			if(!sliding){
				slider.init(elm);
				newHeight = parseInt(obj.style.height);
				curHeight = '1';
				obj.style.height = '1px';
				obj.style.display = 'block';
				slider.slide(elm,functions);
			}
		},
		up:function(elm,functions){
			if(!sliding){
				slider.init(elm);
				curHeight = parseInt(obj.style.height);
				newHeight = '1';
				var finishTime = slider.slide(elm,functions);
				window.setTimeout("slider.hide();",finishTime);
			}
		},
		slide:function(elm,functions){
			sliding = true;
			var frames = 30 * duration;
			var tinc = (duration * 1000) / frames;
			tinc = Math.round(tinc);
			var sinc = (curHeight - newHeight) / frames;
			var frameSizes = new Array();
			for(var i=0;i<frames;i++){
				if(i < frames / 2){
					frameSizes[i] = (sinc * (i / frames)) * 4;
				} else {
					frameSizes[i] = (sinc * (1 - (i / frames))) * 4;
				}
			}
			for(var i=0;i<frames;i++){
				curHeight = curHeight - frameSizes[i];
				window.setTimeout("$d('"+elm+"').style.height = '"+Math.round(curHeight)+"px';", tinc * i);
				if((i + 1) == frames){window.setTimeout("slider.complete("+functions+");", tinc * (i + 5));}
			}
			return tinc * i;
		},
		hide:function(){
			obj.style.display = 'none';
		},
		auto:function(){
			obj.style.height = 'auto';
		},
		complete:function(functions){
			sliding = false;
			if(functions){
				for(var i=0;i<functions.length;i++){
					try{eval(functions[i]);}catch(e){alert(e.description);}
				}
			}
			slider.auto();
		}
	};
}();

/* Move divs <|> mover.move(elm,from,to,functions)
---------------------------------------------------------------- */

var sliding = false;

var mover = function(){
	var slideAtClose = true, duration = 0.8, obj, newLeft, curLeft;
	return {
		init:function(elm,from){
			obj = $d(elm);
			if(obj){obj.style.left = from + 'px';}
		},
		move:function(elm,from,to,functions){
			if(!sliding){
				mover.init(elm,from);
				newLeft = to;
				curLeft = from;
				mover.slide(elm,functions);
			}
		},
		slide:function(elm,functions){
			sliding = true;
			var frames = 30 * duration;
			var tinc = (duration * 1000) / frames;
			tinc = Math.round(tinc);
			var sinc = (curLeft - newLeft) / frames;
			var frameSizes = new Array();
			for(var i=0;i<frames;i++){
				if(i < frames / 2){
					frameSizes[i] = (sinc * (i / frames)) * 4;
				} else {
					frameSizes[i] = (sinc * (1 - (i / frames))) * 4;
				}
			}
			for(var i=0;i<frames;i++){
				curLeft = curLeft - frameSizes[i];
				window.setTimeout("$d('"+elm+"').style.left = '"+Math.round(curLeft)+"px';", tinc * i);
				if((i + 1) == frames){window.setTimeout("mover.complete("+functions+");", tinc * (i + 5));}
			}
		},
		hide:function(){
			obj.style.display = 'none';
		},
		auto:function(){
			//obj.style.height = 'auto';
		},
		complete:function(functions){
			sliding = false;
			if(functions){
				for(var i=0;i<functions.length;i++){
					try{eval(functions[i]);}catch(e){alert(e.description);}
				}
			}
			mover.auto();
		}
	};
}();

/* Library
---------------------------------------------------------------- */

var library = function(){
	return {
		elementposition:function(obj){
			var curleft=curtop=0;
			if (obj.offsetParent){
				curleft=obj.offsetLeft;
				curtop=obj.offsetTop;
				while(obj=obj.offsetParent){
					curleft+=obj.offsetLeft
					curtop+=obj.offsetTop
				}
			}
			return curleft+'/'+curtop;
		},
		cursorposition:function(e){
			e = e || window.event;
		    var cursor = {x:0, y:0};
		    if(e.pageX || e.pageY){
		        cursor.x = e.pageX;
		        cursor.y = e.pageY;
		    }else{
		        var de = document.documentElement;
		        var b = document.body;
		        cursor.x = e.clientX + (de.scrollLeft || b.scrollLeft) - (de.clientLeft || 0);
		        cursor.y = e.clientY + (de.scrollTop || b.scrollTop) - (de.clientTop || 0);
		    }
		    return cursor.x+'/'+cursor.y;
		},
		documentdimensions:function(){
			var myWidth = 0, myHeight = 0;
			if(typeof(window.innerWidth)=='number'){
				myWidth = window.innerWidth;
				myHeight = window.innerHeight;
			}else if(document.documentElement && (document.documentElement.clientWidth || document.documentElement.clientHeight)){
				myWidth = document.documentElement.clientWidth;
				myHeight = document.documentElement.clientHeight;
			}else if(document.body && (document.body.clientWidth || document.body.clientHeight)){
				myWidth = document.body.clientWidth;
				myHeight = document.body.clientHeight;
			}
			return myWidth+'/'+myHeight;
		},
		scrollposition:function(){
			var myTop = 0, myLeft = 0;
			if(document.all){
				myLeft = (document.documentElement.scrollLeft) ? document.documentElement.scrollLeft : document.body.scrollLeft;
				myTop = (document.documentElement.scrollTop) ? document.documentElement.scrollTop : document.body.scrollTop;
			}else{
				myLeft = window.pageXOffset;
				myTop = window.pageYOffset
			}
			return myLeft+'/'+myTop;
		},
		whichelement:function(e){
			var targ,found=false;
			if(!e){var e=window.event;}
			if(e.target){targ=e.target;}else if(e.srcElement){targ=e.srcElement;}
			if(targ.nodeType==3){targ=targ.parentNode;}
			if(targ.className=='contextmenu'){found=true;}else{found=false;}
			return found;
		},
		keycode:function(evt){
			evt = (evt) ? evt : ((event) ? event : null);
			var evver = (evt.target) ? evt.target : ((evt.srcElement) ? evt.srcElement : null );
			var keynumber = evt.keyCode;
			if(keynumber){return keynumber;}
		},
		getstyle:function(el,prop){
			var x = $d(el);var y;
			if(x.currentStyle){
				y = x.currentStyle[prop];
			}else if (window.getComputedStyle){
				y = document.defaultView.getComputedStyle(x,null).getPropertyValue(prop);
			}
			return y;
		}
	};
}();

/* Input file workaround
---------------------------------------------------------------- */

var fafitim;

var fakefile = function(){
	return {
		initialize:function(){
			var count = 1;
			var items = document.getElementsByTagName('input');
			for(var d=0;d<items.length;d+=1){
				var str = items[d].className;
				if(str.indexOf('filerepl')!=-1){
					items[d].onclick = function(){
						fakefile.click(this);
					};
					count++;
				}
			}
		},
		click:function(f){
			fafitim = setInterval("fakefile.observe('"+f.id+"')", 1000);
		},
		observe:function(f){
			var obj = $d(f);
			var nam = $d(f+'-name');
			if(obj && nam){
				if(obj.value!=''){
					nam.value = obj.value;
					clearInterval(fafitim);
				}
			}
		}
	};
}();

/* Window load
---------------------------------------------------------------- */

window.onload = function(){

	// Slideshows
	slideshow.initialize('slider1');
	slideembed.initialize('slider2');
	
	// Link lists
	linklists.initialize();
	
	// YouTube thumbs
	youtube.thumbs('youtube-thumbs');
	
	// Sharebox
	sharebox.initialize();
	shareembed.initialize();
	
	// Explore images
	exploreimgs.initialize();
	
	// Input files replacement
	fakefile.initialize();
	
	// List with rating
	listwr.initialize();
	
}

/* Document keyup
---------------------------------------------------------------- */

document.onkeyup = function(event){
	
	// Get character code
	var charCode = library.keycode(event);
	_keycode = charCode;
	
	// Slideshows
	slideembed.keyboard(_keycode);
	
}


/*Twitter Widget*/

/*
 * twitter-text-js 1.4.10
 *
 * Copyright 2011 Twitter, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this work except in compliance with the License.
 * You may obtain a copy of the License at:
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 */
if(!window.twttr){window.twttr={}}(function(){twttr.txt={};twttr.txt.regexen={};var C={"&":"&amp;",">":"&gt;","<":"&lt;",'"':"&quot;","'":"&#39;"};twttr.txt.htmlEscape=function(R){return R&&R.replace(/[&"'><]/g,function(S){return C[S]})};function D(S,R){R=R||"";if(typeof S!=="string"){if(S.global&&R.indexOf("g")<0){R+="g"}if(S.ignoreCase&&R.indexOf("i")<0){R+="i"}if(S.multiline&&R.indexOf("m")<0){R+="m"}S=S.source}return new RegExp(S.replace(/#\{(\w+)\}/g,function(U,T){var V=twttr.txt.regexen[T]||"";if(typeof V!=="string"){V=V.source}return V}),R)}function E(S,R){return S.replace(/#\{(\w+)\}/g,function(U,T){return R[T]||""})}function B(S,U,R){var T=String.fromCharCode(U);if(R!==U){T+="-"+String.fromCharCode(R)}S.push(T);return S}var J=String.fromCharCode;var H=[J(32),J(133),J(160),J(5760),J(6158),J(8232),J(8233),J(8239),J(8287),J(12288)];B(H,9,13);B(H,8192,8202);twttr.txt.regexen.spaces_group=D(H.join(""));twttr.txt.regexen.spaces=D("["+H.join("")+"]");twttr.txt.regexen.punct=/\!'#%&'\(\)*\+,\\\-\.\/:;<=>\?@\[\]\^_{|}~/;twttr.txt.regexen.atSigns=/[@ï¼ ]/;twttr.txt.regexen.extractMentions=D(/(^|[^a-zA-Z0-9_])(#{atSigns})([a-zA-Z0-9_]{1,20})(?=(.|$))/g);twttr.txt.regexen.extractReply=D(/^(?:#{spaces})*#{atSigns}([a-zA-Z0-9_]{1,20})/);twttr.txt.regexen.listName=/[a-zA-Z][a-zA-Z0-9_\-\u0080-\u00ff]{0,24}/;twttr.txt.regexen.extractMentionsOrLists=D(/(^|[^a-zA-Z0-9_])(#{atSigns})([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?(?=(.|$))/g);var N=[];B(N,1024,1279);B(N,1280,1319);B(N,11744,11775);B(N,42560,42655);B(N,4352,4607);B(N,12592,12677);B(N,43360,43391);B(N,44032,55215);B(N,55216,55295);B(N,65441,65500);B(N,12449,12538);B(N,12540,12542);B(N,65382,65439);B(N,65392,65392);B(N,65296,65305);B(N,65313,65338);B(N,65345,65370);B(N,12353,12438);B(N,12441,12446);B(N,13312,19903);B(N,19968,40959);B(N,173824,177983);B(N,177984,178207);B(N,194560,195103);B(N,12293,12293);B(N,12347,12347);twttr.txt.regexen.nonLatinHashtagChars=D(N.join(""));twttr.txt.regexen.latinAccentChars=D("Ã€Ã?Ã‚ÃƒÃ„Ã…Ã†Ã‡ÃˆÃ‰ÃŠÃ‹ÃŒÃ?ÃŽÃ?Ã?Ã‘Ã’Ã“Ã”Ã•Ã–Ã˜Ã™ÃšÃ›ÃœÃ?ÃžÃŸÃ Ã¡Ã¢Ã£Ã¤Ã¥Ã¦Ã§Ã¨Ã©ÃªÃ«Ã¬Ã­Ã®Ã¯Ã°Ã±Ã²Ã³Ã´ÃµÃ¶Ã¸Ã¹ÃºÃ»Ã¼Ã½Ã¾ÅŸ\\303\\277");twttr.txt.regexen.endScreenNameMatch=D(/^(?:#{atSigns}|[#{latinAccentChars}]|:\/\/)/);twttr.txt.regexen.hashtagBoundary=D(/(?:^|$|#{spaces}|[ã€Œã€?ã€‚ã€?.,!ï¼??ï¼Ÿ:;"'])/);twttr.txt.regexen.hashtagAlpha=D(/[a-z_#{latinAccentChars}#{nonLatinHashtagChars}]/i);twttr.txt.regexen.hashtagAlphaNumeric=D(/[a-z0-9_#{latinAccentChars}#{nonLatinHashtagChars}]/i);twttr.txt.regexen.autoLinkHashtags=D(/(#{hashtagBoundary})(#|ï¼ƒ)(#{hashtagAlphaNumeric}*#{hashtagAlpha}#{hashtagAlphaNumeric}*)/gi);twttr.txt.regexen.autoLinkUsernamesOrLists=/(^|[^a-zA-Z0-9_]|RT:?)([@ï¼ ]+)([a-zA-Z0-9_]{1,20})(\/[a-zA-Z][a-zA-Z0-9_\-]{0,24})?/g;twttr.txt.regexen.autoLinkEmoticon=/(8\-\#|8\-E|\+\-\(|\`\@|\`O|\&lt;\|:~\(|\}:o\{|:\-\[|\&gt;o\&lt;|X\-\/|\[:-\]\-I\-|\/\/\/\/Ã–\\\\\\\\|\(\|:\|\/\)|âˆ‘:\*\)|\( \| \))/g;twttr.txt.regexen.validPrecedingChars=D(/(?:[^-\/"'!=A-Za-z0-9_@ï¼ \.]|^)/);twttr.txt.regexen.invalidDomainChars=E("\u00A0#{punct}#{spaces_group}",twttr.txt.regexen);twttr.txt.regexen.validDomainChars=D(/[^#{invalidDomainChars}]/);twttr.txt.regexen.validSubdomain=D(/(?:(?:#{validDomainChars}(?:[_-]|#{validDomainChars})*)?#{validDomainChars}\.)/);twttr.txt.regexen.validDomainName=D(/(?:(?:#{validDomainChars}(?:-|#{validDomainChars})*)?#{validDomainChars}\.)/);twttr.txt.regexen.validGTLD=D(/(?:(?:aero|asia|biz|cat|com|coop|edu|gov|info|int|jobs|mil|mobi|museum|name|net|org|pro|tel|travel)(?=[^a-zA-Z]|$))/);twttr.txt.regexen.validCCTLD=D(/(?:(?:ac|ad|ae|af|ag|ai|al|am|an|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cs|cu|cv|cx|cy|cz|dd|de|dj|dk|dm|do|dz|ec|ee|eg|eh|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tp|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw)(?=[^a-zA-Z]|$))/);twttr.txt.regexen.validPunycode=D(/(?:xn--[0-9a-z]+)/);twttr.txt.regexen.validDomain=D(/(?:#{validSubdomain}*#{validDomainName}(?:#{validGTLD}|#{validCCTLD}|#{validPunycode}))/);twttr.txt.regexen.validShortDomain=D(/^#{validDomainName}#{validCCTLD}$/);twttr.txt.regexen.validPortNumber=D(/[0-9]+/);twttr.txt.regexen.validGeneralUrlPathChars=D(/[a-z0-9!\*';:=\+\$\/%#\[\]\-_,~|&#{latinAccentChars}]/i);twttr.txt.regexen.wikipediaDisambiguation=D(/(?:\(#{validGeneralUrlPathChars}+\))/i);twttr.txt.regexen.validUrlPathChars=D(/(?:#{wikipediaDisambiguation}|@#{validGeneralUrlPathChars}+\/|[\.,]?#{validGeneralUrlPathChars}?)/i);twttr.txt.regexen.validUrlPathEndingChars=D(/(?:[\+\-a-z0-9=_#\/#{latinAccentChars}]|#{wikipediaDisambiguation})/i);twttr.txt.regexen.validUrlQueryChars=/[a-z0-9!\*'\(\);:&=\+\$\/%#\[\]\-_\.,~|]/i;twttr.txt.regexen.validUrlQueryEndingChars=/[a-z0-9_&=#\/]/i;twttr.txt.regexen.extractUrl=D("((#{validPrecedingChars})((https?:\\/\\/)?(#{validDomain})(?::(#{validPortNumber}))?(\\/(?:#{validUrlPathChars}+#{validUrlPathEndingChars}|#{validUrlPathChars}+#{validUrlPathEndingChars}?|#{validUrlPathEndingChars})?)?(\\?#{validUrlQueryChars}*#{validUrlQueryEndingChars})?))","gi");twttr.txt.regexen.validateUrlUnreserved=/[a-z0-9\-._~]/i;twttr.txt.regexen.validateUrlPctEncoded=/(?:%[0-9a-f]{2})/i;twttr.txt.regexen.validateUrlSubDelims=/[!$&'()*+,;=]/i;twttr.txt.regexen.validateUrlPchar=D("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|[:|@])","i");twttr.txt.regexen.validateUrlScheme=/(?:[a-z][a-z0-9+\-.]*)/i;twttr.txt.regexen.validateUrlUserinfo=D("(?:#{validateUrlUnreserved}|#{validateUrlPctEncoded}|#{validateUrlSubDelims}|:)*","i");twttr.txt.regexen.validateUrlDecOctet=/(?:[0-9]|(?:[1-9][0-9])|(?:1[0-9]{2})|(?:2[0-4][0-9])|(?:25[0-5]))/i;twttr.txt.regexen.validateUrlIpv4=D(/(?:#{validateUrlDecOctet}(?:\.#{validateUrlDecOctet}){3})/i);twttr.txt.regexen.validateUrlIpv6=/(?:\[[a-f0-9:\.]+\])/i;twttr.txt.regexen.validateUrlIp=D("(?:#{validateUrlIpv4}|#{validateUrlIpv6})","i");twttr.txt.regexen.validateUrlSubDomainSegment=/(?:[a-z0-9](?:[a-z0-9_\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomainSegment=/(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomainTld=/(?:[a-z](?:[a-z0-9\-]*[a-z0-9])?)/i;twttr.txt.regexen.validateUrlDomain=D(/(?:(?:#{validateUrlSubDomainSegment]}\.)*(?:#{validateUrlDomainSegment]}\.)#{validateUrlDomainTld})/i);twttr.txt.regexen.validateUrlHost=D("(?:#{validateUrlIp}|#{validateUrlDomain})","i");twttr.txt.regexen.validateUrlUnicodeSubDomainSegment=/(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9_\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;twttr.txt.regexen.validateUrlUnicodeDomainSegment=/(?:(?:[a-z0-9]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;twttr.txt.regexen.validateUrlUnicodeDomainTld=/(?:(?:[a-z]|[^\u0000-\u007f])(?:(?:[a-z0-9\-]|[^\u0000-\u007f])*(?:[a-z0-9]|[^\u0000-\u007f]))?)/i;twttr.txt.regexen.validateUrlUnicodeDomain=D(/(?:(?:#{validateUrlUnicodeSubDomainSegment}\.)*(?:#{validateUrlUnicodeDomainSegment}\.)#{validateUrlUnicodeDomainTld})/i);twttr.txt.regexen.validateUrlUnicodeHost=D("(?:#{validateUrlIp}|#{validateUrlUnicodeDomain})","i");twttr.txt.regexen.validateUrlPort=/[0-9]{1,5}/;twttr.txt.regexen.validateUrlUnicodeAuthority=D("(?:(#{validateUrlUserinfo})@)?(#{validateUrlUnicodeHost})(?::(#{validateUrlPort}))?","i");twttr.txt.regexen.validateUrlAuthority=D("(?:(#{validateUrlUserinfo})@)?(#{validateUrlHost})(?::(#{validateUrlPort}))?","i");twttr.txt.regexen.validateUrlPath=D(/(\/#{validateUrlPchar}*)*/i);twttr.txt.regexen.validateUrlQuery=D(/(#{validateUrlPchar}|\/|\?)*/i);twttr.txt.regexen.validateUrlFragment=D(/(#{validateUrlPchar}|\/|\?)*/i);twttr.txt.regexen.validateUrlUnencoded=D("^(?:([^:/?#]+):\\/\\/)?([^/?#]*)([^?#]*)(?:\\?([^#]*))?(?:#(.*))?$","i");var A="tweet-url";var G="list-slug";var Q="username";var M="hashtag";var O=' rel="nofollow"';function K(T){var S={};for(var R in T){if(T.hasOwnProperty(R)){S[R]=T[R]}}return S}twttr.txt.autoLink=function(S,R){R=K(R||{});return twttr.txt.autoLinkUsernamesOrLists(twttr.txt.autoLinkUrlsCustom(twttr.txt.autoLinkHashtags(S,R),R),R)};twttr.txt.autoLinkUsernamesOrLists=function(X,V){V=K(V||{});V.urlClass=V.urlClass||A;V.listClass=V.listClass||G;V.usernameClass=V.usernameClass||Q;V.usernameUrlBase=V.usernameUrlBase||"http://twitter.com/";V.listUrlBase=V.listUrlBase||"http://twitter.com/";if(!V.suppressNoFollow){var R=O}var W="",U=twttr.txt.splitTags(X);for(var T=0;T<U.length;T++){var S=U[T];if(T!==0){W+=((T%2===0)?">":"<")}if(T%4!==0){W+=S}else{W+=S.replace(twttr.txt.regexen.autoLinkUsernamesOrLists,function(f,i,a,e,Y,c,j){var Z=j.slice(c+f.length);var h={before:i,at:a,user:twttr.txt.htmlEscape(e),slashListname:twttr.txt.htmlEscape(Y),extraHtml:R,preChunk:"",chunk:twttr.txt.htmlEscape(j),postChunk:""};for(var b in V){if(V.hasOwnProperty(b)){h[b]=V[b]}}if(Y&&!V.suppressLists){var g=h.chunk=E("#{user}#{slashListname}",h);h.list=twttr.txt.htmlEscape(g.toLowerCase());return E('#{before}#{at}<a class="#{urlClass} #{listClass}" href="#{listUrlBase}#{list}"#{extraHtml}>#{preChunk}#{chunk}#{postChunk}</a>',h)}else{if(Z&&Z.match(twttr.txt.regexen.endScreenNameMatch)){return f}else{h.chunk=twttr.txt.htmlEscape(e);h.dataScreenName=!V.suppressDataScreenName?E('data-screen-name="#{chunk}" ',h):"";return E('#{before}#{at}<a class="#{urlClass} #{usernameClass}" #{dataScreenName}href="#{usernameUrlBase}#{chunk}"#{extraHtml}>#{preChunk}#{chunk}#{postChunk}</a>',h)}}})}}return W};twttr.txt.autoLinkHashtags=function(T,S){S=K(S||{});S.urlClass=S.urlClass||A;S.hashtagClass=S.hashtagClass||M;S.hashtagUrlBase=S.hashtagUrlBase||"http://twitter.com/search?q=%23";if(!S.suppressNoFollow){var R=O}return T.replace(twttr.txt.regexen.autoLinkHashtags,function(V,W,X,Z){var Y={before:W,hash:twttr.txt.htmlEscape(X),preText:"",text:twttr.txt.htmlEscape(Z),postText:"",extraHtml:R};for(var U in S){if(S.hasOwnProperty(U)){Y[U]=S[U]}}return E('#{before}<a href="#{hashtagUrlBase}#{text}" title="##{text}" class="#{urlClass} #{hashtagClass}"#{extraHtml}>#{hash}#{preText}#{text}#{postText}</a>',Y)})};twttr.txt.autoLinkUrlsCustom=function(U,S){S=K(S||{});if(!S.suppressNoFollow){S.rel="nofollow"}if(S.urlClass){S["class"]=S.urlClass;delete S.urlClass}var V,T,R;if(S.urlEntities){V={};for(T=0,R=S.urlEntities.length;T<R;T++){V[S.urlEntities[T].url]=S.urlEntities[T]}}delete S.suppressNoFollow;delete S.suppressDataScreenName;delete S.listClass;delete S.usernameClass;delete S.usernameUrlBase;delete S.listUrlBase;return U.replace(twttr.txt.regexen.extractUrl,function(e,h,g,X,i,a,c,j,W){var Z;if(i){var Y="";for(var b in S){Y+=E(' #{k}="#{v}" ',{k:b,v:S[b].toString().replace(/"/,"&quot;").replace(/</,"&lt;").replace(/>/,"&gt;")})}var f={before:g,htmlAttrs:Y,url:twttr.txt.htmlEscape(X)};if(V&&V[X]&&V[X].display_url){f.displayUrl=twttr.txt.htmlEscape(V[X].display_url)}else{f.displayUrl=f.url}return E('#{before}<a href="#{url}"#{htmlAttrs}>#{displayUrl}</a>',f)}else{return h}})};twttr.txt.extractMentions=function(U){var V=[],R=twttr.txt.extractMentionsWithIndices(U);for(var T=0;T<R.length;T++){var S=R[T].screenName;V.push(S)}return V};twttr.txt.extractMentionsWithIndices=function(T){if(!T){return[]}var S=[],R=0;T.replace(twttr.txt.regexen.extractMentions,function(U,Y,X,V,Z){if(!Z.match(twttr.txt.regexen.endScreenNameMatch)){var W=T.indexOf(X+V,R);R=W+V.length+1;S.push({screenName:V,indices:[W,R]})}});return S};twttr.txt.extractMentionsOrListsWithIndices=function(T){if(!T){return[]}var S=[],R=0;T.replace(twttr.txt.regexen.extractMentionsOrLists,function(U,Y,X,V,a,Z){if(!Z.match(twttr.txt.regexen.endScreenNameMatch)){a=a||"";var W=T.indexOf(X+V+a,R);R=W+V.length+a.length+1;S.push({screenName:V,listSlug:a,indices:[W,R]})}});return S};twttr.txt.extractReplies=function(S){if(!S){return null}var R=S.match(twttr.txt.regexen.extractReply);if(!R){return null}return R[1]};twttr.txt.extractUrls=function(U){var T=[],R=twttr.txt.extractUrlsWithIndices(U);for(var S=0;S<R.length;S++){T.push(R[S].url)}return T};twttr.txt.extractUrlsWithIndices=function(T){if(!T){return[]}var S=[],R=0;T.replace(twttr.txt.regexen.extractUrl,function(Z,c,b,U,d,W,V,e,a){if(!d&&!e&&W.match(twttr.txt.regexen.validShortDomain)){return}var X=T.indexOf(U,Y),Y=X+U.length;S.push({url:U,indices:[X,Y]})});return S};twttr.txt.extractHashtags=function(U){var T=[],S=twttr.txt.extractHashtagsWithIndices(U);for(var R=0;R<S.length;R++){T.push(S[R].hashtag)}return T};twttr.txt.extractHashtagsWithIndices=function(T){if(!T){return[]}var S=[],R=0;T.replace(twttr.txt.regexen.autoLinkHashtags,function(U,X,Y,W){var V=T.indexOf(Y+W,R);R=V+W.length+1;S.push({hashtag:W,indices:[V,R]})});return S};twttr.txt.splitTags=function(X){var R=X.split("<"),W,V=[],U;for(var T=0;T<R.length;T+=1){U=R[T];if(!U){V.push("")}else{W=U.split(">");for(var S=0;S<W.length;S+=1){V.push(W[S])}}}return V};twttr.txt.hitHighlight=function(c,e,U){var a="em";e=e||[];U=U||{};if(e.length===0){return c}var T=U.tag||a,d=["<"+T+">","</"+T+">"],b=twttr.txt.splitTags(c),f,k,h,X="",R=0,Y=b[0],Z=0,S=0,o=false,V=Y,g=[],W,l,p,n,m;for(k=0;k<e.length;k+=1){for(h=0;h<e[k].length;h+=1){g.push(e[k][h])}}for(W=0;W<g.length;W+=1){l=g[W];p=d[W%2];n=false;while(Y!=null&&l>=Z+Y.length){X+=V.slice(S);if(o&&l===Z+V.length){X+=p;n=true}if(b[R+1]){X+="<"+b[R+1]+">"}Z+=V.length;S=0;R+=2;Y=b[R];V=Y;o=false}if(!n&&Y!=null){m=l-Z;X+=V.slice(S,m)+p;S=m;if(W%2===0){o=true}else{o=false}}else{if(!n){n=true;X+=p}}}if(Y!=null){if(S<V.length){X+=V.slice(S)}for(W=R+1;W<b.length;W+=1){X+=(W%2===0?b[W]:"<"+b[W]+">")}}return X};var F=140;var P=[J(65534),J(65279),J(65535),J(8234),J(8235),J(8236),J(8237),J(8238)];twttr.txt.isInvalidTweet=function(S){if(!S){return"empty"}if(S.length>F){return"too_long"}for(var R=0;R<P.length;R++){if(S.indexOf(P[R])>=0){return"invalid_characters"}}return false};twttr.txt.isValidTweetText=function(R){return !twttr.txt.isInvalidTweet(R)};twttr.txt.isValidUsername=function(S){if(!S){return false}var R=twttr.txt.extractMentions(S);return R.length===1&&R[0]===S.slice(1)};var L=D(/^#{autoLinkUsernamesOrLists}$/);twttr.txt.isValidList=function(S){var R=S.match(L);return !!(R&&R[1]==""&&R[4])};twttr.txt.isValidHashtag=function(S){if(!S){return false}var R=twttr.txt.extractHashtags(S);return R.length===1&&R[0]===S.slice(1)};twttr.txt.isValidUrl=function(R,W,Z){if(W==null){W=true}if(Z==null){Z=true}if(!R){return false}var S=R.match(twttr.txt.regexen.validateUrlUnencoded);if(!S||S[0]!==R){return false}var T=S[1],U=S[2],Y=S[3],X=S[4],V=S[5];if(!((!Z||(I(T,twttr.txt.regexen.validateUrlScheme)&&T.match(/^https?$/i)))&&I(Y,twttr.txt.regexen.validateUrlPath)&&I(X,twttr.txt.regexen.validateUrlQuery,true)&&I(V,twttr.txt.regexen.validateUrlFragment,true))){return false}return(W&&I(U,twttr.txt.regexen.validateUrlUnicodeAuthority))||(!W&&I(U,twttr.txt.regexen.validateUrlAuthority))};function I(S,T,R){if(!R){return((typeof S==="string")&&S.match(T)&&RegExp["$&"]===S)}return(!S||(S.match(T)&&RegExp["$&"]===S))}if(typeof module!="undefined"&&module.exports){module.exports=twttr.txt}}());TWTR=window.TWTR||{};(function(){if(TWTR&&TWTR.Widget){return}function H(K,N,J){for(var M=0,L=K.length;M<L;++M){N.call(J||window,K[M],M,K)}}function B(J,K,L){(Array.prototype.filter||function(Q,R){var P=R||window;var M=[];for(var O=0,N=this.length;O<N;++O){if(!Q.call(P,this[O],O,this)){continue}M.push(this[O])}return M}).call(J,K,L)}function I(J,L,K){this.el=J;this.prop=L;this.from=K.from;this.to=K.to;this.time=K.time;this.callback=K.callback;this.animDiff=this.to-this.from}I.canTransition=function(){var J=document.createElement("twitter");J.style.cssText="-webkit-transition: all .5s linear;";return !!J.style.webkitTransitionProperty}();I.prototype._setStyle=function(J){switch(this.prop){case"opacity":this.el.style[this.prop]=J;this.el.style.filter="alpha(opacity="+J*100+")";break;default:this.el.style[this.prop]=J+"px";break}};I.prototype._animate=function(){var J=this;this.now=new Date();this.diff=this.now-this.startTime;if(this.diff>this.time){this._setStyle(this.to);if(this.callback){this.callback.call(this)}clearInterval(this.timer);return}this.percentage=(Math.floor((this.diff/this.time)*100)/100);this.val=(this.animDiff*this.percentage)+this.from;this._setStyle(this.val)};I.prototype.start=function(){var J=this;this.startTime=new Date();this.timer=setInterval(function(){J._animate.call(J)},15)};TWTR.Widget=function(J){this.init(J)};(function(){var X=window.twttr||{};var U=location.protocol.match(/https/);var W=/^.+\/profile_images/;var c="https://s3.amazonaws.com/twitter_production/profile_images";var d=function(o){return U?o.replace(W,c):o};var n={};var l=function(p){var o=n[p];if(!o){o=new RegExp("(?:^|\\s+)"+p+"(?:\\s+|$)");n[p]=o}return o};var K=function(t,x,u,v){var x=x||"*";var u=u||document;var p=[],o=u.getElementsByTagName(x),w=l(t);for(var q=0,s=o.length;q<s;++q){if(w.test(o[q].className)){p[p.length]=o[q];if(v){v.call(o[q],o[q])}}}return p};var m=function(){var o=navigator.userAgent;return{ie:o.match(/MSIE\s([^;]*)/)}}();var N=function(o){if(typeof o=="string"){return document.getElementById(o)}return o};var f=function(o){return o.replace(/^\s+|\s+$/g,"")};var b=function(){var o=self.innerHeight;var p=document.compatMode;if((p||m.ie)){o=(p=="CSS1Compat")?document.documentElement.clientHeight:document.body.clientHeight}return o};var k=function(q,o){var p=q.target||q.srcElement;return o(p)};var Z=function(p){try{if(p&&3==p.nodeType){return p.parentNode}else{return p}}catch(o){}};var a=function(p){var o=p.relatedTarget;if(!o){if(p.type=="mouseout"){o=p.toElement}else{if(p.type=="mouseover"){o=p.fromElement}}}return Z(o)};var g=function(p,o){o.parentNode.insertBefore(p,o.nextSibling)};var h=function(p){try{p.parentNode.removeChild(p)}catch(o){}};var e=function(o){return o.firstChild};var J=function(q){var p=a(q);while(p&&p!=this){try{p=p.parentNode}catch(o){p=this}}if(p!=this){return true}return false};var M=function(){if(document.defaultView&&document.defaultView.getComputedStyle){return function(p,t){var s=null;var q=document.defaultView.getComputedStyle(p,"");if(q){s=q[t]}var o=p.style[t]||s;return o}}else{if(document.documentElement.currentStyle&&m.ie){return function(o,q){var p=o.currentStyle?o.currentStyle[q]:null;return(o.style[q]||p)}}}}();var j={has:function(o,p){return new RegExp("(^|\\s)"+p+"(\\s|$)").test(N(o).className)},add:function(o,p){if(!this.has(o,p)){N(o).className=f(N(o).className)+" "+p}},remove:function(o,p){if(this.has(o,p)){N(o).className=N(o).className.replace(new RegExp("(^|\\s)"+p+"(\\s|$)","g"),"")}}};var L={add:function(q,p,o){if(q.addEventListener){q.addEventListener(p,o,false)}else{q.attachEvent("on"+p,function(){o.call(q,window.event)})}},remove:function(q,p,o){if(q.removeEventListener){q.removeEventListener(p,o,false)}else{q.detachEvent("on"+p,o)}}};var T=function(){function p(s){return parseInt((s).substring(0,2),16)}function o(s){return parseInt((s).substring(2,4),16)}function q(s){return parseInt((s).substring(4,6),16)}return function(s){return[p(s),o(s),q(s)]}}();var O={bool:function(o){return typeof o==="boolean"},def:function(p){return !(typeof p==="undefined")},number:function(o){return typeof o==="number"&&isFinite(o)},string:function(o){return typeof o==="string"},fn:function(o){return typeof o==="function"},array:function(o){if(o){return O.number(o.length)&&O.fn(o.splice)}return false}};var S=["January","February","March","April","May","June","July","August","September","October","November","December"];var Y=function(t){var w=new Date(t);if(m.ie){w=Date.parse(t.replace(/( \+)/," UTC$1"))}var p="";var o=function(){var s=w.getHours();if(s>0&&s<13){p="am";return s}else{if(s<1){p="am";return 12}else{p="pm";return s-12}}}();var q=w.getMinutes();var v=w.getSeconds();function u(){var s=new Date();if(s.getDate()!=w.getDate()||s.getYear()!=w.getYear()||s.getMonth()!=w.getMonth()){return" - "+S[w.getMonth()]+" "+w.getDate()+", "+w.getFullYear()}else{return""}}return o+":"+q+p+u()};var Q=function(v){var x=new Date();var t=new Date(v);if(m.ie){t=Date.parse(v.replace(/( \+)/," UTC$1"))}var w=x-t;var p=1000,q=p*60,s=q*60,u=s*24,o=u*7;if(isNaN(w)||w<0){return""}if(w<p*2){return"right now"}if(w<q){return Math.floor(w/p)+" seconds ago"}if(w<q*2){return"about 1 minute ago"}if(w<s){return Math.floor(w/q)+" minutes ago"}if(w<s*2){return"about 1 hour ago"}if(w<u){return Math.floor(w/s)+" hours ago"}if(w>u&&w<u*2){return"yesterday"}if(w<u*365){return Math.floor(w/u)+" days ago"}else{return"over a year ago"}};function i(s){var q={};for(var p in s){if(s.hasOwnProperty(p)){q[p]=s[p]}}return q}X.txt.autoLink=function(p,o){o=options_links=o||{};if(o.hasOwnProperty("extraHtml")){options_links=i(o);delete options_links.extraHtml}return X.txt.autoLinkUsernamesOrLists(X.txt.autoLinkUrlsCustom(X.txt.autoLinkHashtags(p,o),options_links),o)};TWTR.Widget.ify={autoLink:function(p){options={extraHtml:"target=_blank",target:"_blank",urlEntities:[]};if(p.needle.entities){if(p.needle.entities.urls){options.urlEntities=p.needle.entities.urls}if(p.needle.entities.media){options.urlEntities=options.urlEntities.concat(p.needle.entities.media)}}if(X&&X.txt){return X.txt.autoLink(p.needle.text,options).replace(/([@ï¼ ]+)(<[^>]*>)/g,"$2$1")}else{return p.needle.text}}};function V(p,q,o){this.job=p;this.decayFn=q;this.interval=o;this.decayRate=1;this.decayMultiplier=1.25;this.maxDecayTime=3*60*1000}V.prototype={start:function(){this.stop().run();return this},stop:function(){if(this.worker){window.clearTimeout(this.worker)}return this},run:function(){var o=this;this.job(function(){o.decayRate=o.decayFn()?Math.max(1,o.decayRate/o.decayMultiplier):o.decayRate*o.decayMultiplier;var p=o.interval*o.decayRate;p=(p>=o.maxDecayTime)?o.maxDecayTime:p;p=Math.floor(p);o.worker=window.setTimeout(function(){o.run.call(o)},p)})},destroy:function(){this.stop();this.decayRate=1;return this}};function P(p,o,q){this.time=p||6000;this.loop=o||false;this.repeated=0;this.callback=q;this.haystack=[]}P.prototype={set:function(o){this.haystack=o},add:function(o){this.haystack.unshift(o)},start:function(){if(this.timer){return this}this._job();var o=this;this.timer=setInterval(function(){o._job.call(o)},this.time);return this},stop:function(){if(this.timer){window.clearInterval(this.timer);this.timer=null}return this},_next:function(){var o=this.haystack.shift();if(o&&this.loop){this.haystack.push(o)}return o||null},_job:function(){var o=this._next();if(o){this.callback(o)}return this}};function R(p){var o='<div class="twtr-tweet-wrap">         <div class="twtr-avatar">           <div class="twtr-img"><a target="_blank" href="http://twitter.com/intent/user?screen_name='+p.user+'"><img alt="'+p.user+' profile" src="'+d(p.avatar)+'"></a></div>         </div>         <div class="twtr-tweet-text">           <p>             <a target="_blank" href="http://twitter.com/intent/user?screen_name='+p.user+'" class="twtr-user">'+p.user+"</a> "+p.tweet+'             <em>            <a target="_blank" class="twtr-timestamp" time="'+p.timestamp+'" href="http://twitter.com/'+p.user+"/status/"+p.id+'">'+p.created_at+'</a> &middot;            <a target="_blank" class="twtr-reply" href="http://twitter.com/intent/tweet?in_reply_to='+p.id+'">reply</a> &middot;             <a target="_blank" class="twtr-rt" href="http://twitter.com/intent/retweet?tweet_id='+p.id+'">retweet</a> &middot;             <a target="_blank" class="twtr-fav" href="http://twitter.com/intent/favorite?tweet_id='+p.id+'">favorite</a>             </em>           </p>         </div>       </div>';var q=document.createElement("div");q.id="tweet-id-"+ ++R._tweetCount;q.className="twtr-tweet";q.innerHTML=o;this.element=q}R._tweetCount=0;X.loadStyleSheet=function(q,p){if(!TWTR.Widget.loadingStyleSheet){TWTR.Widget.loadingStyleSheet=true;var o=document.createElement("link");o.href=q;o.rel="stylesheet";o.type="text/css";document.getElementsByTagName("head")[0].appendChild(o);var s=setInterval(function(){var t=M(p,"position");if(t=="relative"){clearInterval(s);s=null;TWTR.Widget.hasLoadedStyleSheet=true}},50)}};(function(){var o=false;X.css=function(s){var q=document.createElement("style");q.type="text/css";if(m.ie){q.styleSheet.cssText=s}else{var t=document.createDocumentFragment();t.appendChild(document.createTextNode(s));q.appendChild(t)}function p(){document.getElementsByTagName("head")[0].appendChild(q)}if(!m.ie||o){p()}else{window.attachEvent("onload",function(){o=true;p()})}}})();TWTR.Widget.isLoaded=false;TWTR.Widget.loadingStyleSheet=false;TWTR.Widget.hasLoadedStyleSheet=false;TWTR.Widget.WIDGET_NUMBER=0;TWTR.Widget.REFRESH_MIN=6000;TWTR.Widget.ENTITY_RANGE=100;TWTR.Widget.ENTITY_PERCENTAGE=100;TWTR.Widget.matches={mentions:/^@[a-zA-Z0-9_]{1,20}\b/,any_mentions:/\b@[a-zA-Z0-9_]{1,20}\b/};TWTR.Widget.jsonP=function(p,s){var o=document.createElement("script");var q=document.getElementsByTagName("head")[0];o.type="text/javascript";o.src=p;q.insertBefore(o,q.firstChild);s(o);return o};TWTR.Widget.randomNumber=function(o){r=Math.floor(Math.random()*o);return r};TWTR.Widget.SHOW_ENTITIES=TWTR.Widget.randomNumber(TWTR.Widget.ENTITY_RANGE)<=TWTR.Widget.ENTITY_PERCENTAGE;TWTR.Widget.prototype=function(){var u=window.twttr||{};var v=U?"https://":"http://";var t="twitter.com";var p=v+"search."+t+"/search.";var o=v+"api."+t+"/1/statuses/user_timeline.";var s=v+"api."+t+"/1/favorites.";var q=v+"api."+t+"/1/";var w=25000;var x=U?"https://twitter-widgets.s3.amazonaws.com/j/1/default.gif":"http://widgets.twimg.com/j/1/default.gif";return{init:function(z){var y=this;this._widgetNumber=++TWTR.Widget.WIDGET_NUMBER;TWTR.Widget["receiveCallback_"+this._widgetNumber]=function(AA){y._prePlay.call(y,AA)};this._cb="TWTR.Widget.receiveCallback_"+this._widgetNumber;this.opts=z;this._base=p;this._isRunning=false;this._hasOfficiallyStarted=false;this._hasNewSearchResults=false;this._rendered=false;this._profileImage=false;this._isCreator=!!z.creator;this._setWidgetType(z.type);this.timesRequested=0;this.runOnce=false;this.newResults=false;this.results=[];this.jsonMaxRequestTimeOut=19000;this.showedResults=[];this.sinceId=1;this.source="TWITTERINC_WIDGET";this.id=z.id||"twtr-widget-"+this._widgetNumber;this.tweets=0;this.setDimensions(z.width,z.height);this.interval=z.interval?Math.max(z.interval,TWTR.Widget.REFRESH_MIN):TWTR.Widget.REFRESH_MIN;this.format="json";this.rpp=z.rpp||50;this.subject=z.subject||"";this.title=z.title||"";this.setFooterText(z.footer);this.setSearch(z.search);this._setUrl();this.theme=z.theme?z.theme:this._getDefaultTheme();if(!z.id){document.write('<div class="twtr-widget" id="'+this.id+'"></div>')}this.widgetEl=N(this.id);if(z.id){j.add(this.widgetEl,"twtr-widget")}if(z.version>=2&&!TWTR.Widget.hasLoadedStyleSheet){if(U){u.loadStyleSheet("https://twitter-widgets.s3.amazonaws.com/j/2/widget.css",this.widgetEl)}else{if(z.creator){u.loadStyleSheet("/stylesheets/widgets/widget.css",this.widgetEl)}else{u.loadStyleSheet("http://widgets.twimg.com/j/2/widget.css",this.widgetEl)}}}this.occasionalJob=new V(function(AA){y.decay=AA;y._getResults.call(y)},function(){return y._decayDecider.call(y)},w);this._ready=O.fn(z.ready)?z.ready:function(){};this._isRelativeTime=true;this._tweetFilter=false;this._avatars=true;this._isFullScreen=false;this._isLive=true;this._isScroll=false;this._loop=true;this._behavior="default";this.setFeatures(this.opts.features);this.intervalJob=new P(this.interval,this._loop,function(AA){y._normalizeTweet(AA)});return this},setDimensions:function(y,z){this.wh=(y&&z)?[y,z]:[250,300];if(y=="auto"||y=="100%"){this.wh[0]="100%"}else{this.wh[0]=((this.wh[0]<150)?150:this.wh[0])+"px"}this.wh[1]=((this.wh[1]<100)?100:this.wh[1])+"px";return this},setRpp:function(y){var y=parseInt(y);this.rpp=(O.number(y)&&(y>0&&y<=100))?y:30;return this},_setWidgetType:function(y){this._isSearchWidget=false,this._isProfileWidget=false,this._isFavsWidget=false,this._isListWidget=false;switch(y){case"profile":this._isProfileWidget=true;break;case"search":this._isSearchWidget=true,this.search=this.opts.search;break;case"faves":case"favs":this._isFavsWidget=true;break;case"list":case"lists":this._isListWidget=true;break}return this},setFeatures:function(y){if(y){if(O.def(y.filters)){this._tweetFilter=y.filters}if(O.def(y.dateformat)){this._isRelativeTime=!!(y.dateformat!=="absolute")}if(O.def(y.fullscreen)&&O.bool(y.fullscreen)){if(y.fullscreen){this._isFullScreen=true;this.wh[0]="100%";this.wh[1]=(b()-90)+"px";var z=this;L.add(window,"resize",function(AB){z.wh[1]=b();z._fullScreenResize()})}}if(O.def(y.loop)&&O.bool(y.loop)){this._loop=y.loop}if(O.def(y.behavior)&&O.string(y.behavior)){switch(y.behavior){case"all":this._behavior="all";break;case"preloaded":this._behavior="preloaded";break;default:this._behavior="default";break}}if(O.def(y.avatars)&&O.bool(y.avatars)){if(!y.avatars){u.css("#"+this.id+" .twtr-avatar { display: none; } #"+this.id+" .twtr-tweet-text { margin-left: 0; }");this._avatars=false}else{var AA=(this._isFullScreen)?"90px":"40px";u.css("#"+this.id+" .twtr-avatar { display: block; } #"+this.id+" .twtr-user { display: inline; } #"+this.id+" .twtr-tweet-text { margin-left: "+AA+"; }");this._avatars=true}}else{if(this._isProfileWidget){this.setFeatures({avatars:false});this._avatars=false}else{this.setFeatures({avatars:true});this._avatars=true}}if(O.def(y.live)&&O.bool(y.live)){this._isLive=y.live}if(O.def(y.scrollbar)&&O.bool(y.scrollbar)){this._isScroll=y.scrollbar}}else{if(this._isProfileWidget||this._isFavsWidget){this._behavior="all"}}return this},_fullScreenResize:function(){var y=K("twtr-timeline","div",document.body,function(z){z.style.height=(b()-90)+"px"})},setTweetInterval:function(y){this.interval=y;return this},setBase:function(y){this._base=y;return this},setUser:function(z,y){this.username=z;this.realname=y||" ";if(this._isFavsWidget){this.setBase(s+this.format+"?screen_name="+z)}else{if(this._isProfileWidget){this.setBase(o+this.format+"?screen_name="+z)}}this.setSearch(" ");return this},setList:function(z,y){this.listslug=y.replace(/ /g,"-").toLowerCase();this.username=z;this.setBase(q+z+"/lists/"+this.listslug+"/statuses.");this.setSearch(" ");return this},setProfileImage:function(y){this._profileImage=y;this.byClass("twtr-profile-img","img").src=d(y);this.byClass("twtr-profile-img-anchor","a").href="http://twitter.com/intent/user?screen_name="+this.username;return this},setTitle:function(y){this.title=u.txt.htmlEscape(y);this.widgetEl.getElementsByTagName("h3")[0].innerHTML=this.title;return this},setCaption:function(y){this.subject=y;this.widgetEl.getElementsByTagName("h4")[0].innerHTML=this.subject;return this},setFooterText:function(y){this.footerText=(O.def(y)&&O.string(y))?y:"Join the conversation";if(this._rendered){this.byClass("twtr-join-conv","a").innerHTML=this.footerText}return this},setSearch:function(z){this.searchString=z||"";this.search=encodeURIComponent(this.searchString);this._setUrl();if(this._rendered){var y=this.byClass("twtr-join-conv","a");y.href="http://twitter.com/"+this._getWidgetPath()}return this},_getWidgetPath:function(){if(this._isProfileWidget){return this.username}else{if(this._isFavsWidget){return this.username+"/favorites"}else{if(this._isListWidget){return this.username+"/lists/"+this.listslug}else{return"#search?q="+this.search}}}},_setUrl:function(){var z=this;function y(){return"&"+(+new Date)+"=cachebust"}function AA(){return(z.sinceId==1)?"":"&since_id="+z.sinceId+"&refresh=true"}if(this._isProfileWidget){this.url=this._includeEntities(this._base+"&callback="+this._cb+"&include_rts=true&count="+this.rpp+AA()+"&clientsource="+this.source)}else{if(this._isFavsWidget){this.url=this._includeEntities(this._base+"&callback="+this._cb+AA()+"&clientsource="+this.source)}else{if(this._isListWidget){this.url=this._includeEntities(this._base+this.format+"?callback="+this._cb+AA()+"&clientsource="+this.source)}else{this.url=this._includeEntities(this._base+this.format+"?q="+this.search+"&callback="+this._cb+"&rpp="+this.rpp+AA()+"&clientsource="+this.source);if(!this.runOnce){this.url+="&result_type=recent"}}}}this.url+=y();return this},_includeEntities:function(y){if(TWTR.Widget.SHOW_ENTITIES){return y+"&include_entities=true"}return y},_getRGB:function(y){return T(y.substring(1,7))},setTheme:function(AD,y){var AB=this;var z=" !important";var AC=((window.location.hostname.match(/twitter\.com/))&&(window.location.pathname.match(/goodies/)));if(y||AC){z=""}this.theme={shell:{background:function(){return AD.shell.background||AB._getDefaultTheme().shell.background}(),color:function(){return AD.shell.color||AB._getDefaultTheme().shell.color}()},tweets:{background:function(){return AD.tweets.background||AB._getDefaultTheme().tweets.background}(),color:function(){return AD.tweets.color||AB._getDefaultTheme().tweets.color}(),links:function(){return AD.tweets.links||AB._getDefaultTheme().tweets.links}()}};var AA="#"+this.id+" .twtr-doc,                      #"+this.id+" .twtr-hd a,                      #"+this.id+" h3,                      #"+this.id+" h4 {            background-color: "+this.theme.shell.background+z+";            color: "+this.theme.shell.color+z+";          }          #"+this.id+" .twtr-tweet a {            color: "+this.theme.tweets.links+z+";          }          #"+this.id+" .twtr-bd, #"+this.id+" .twtr-timeline i a,           #"+this.id+" .twtr-bd p {            color: "+this.theme.tweets.color+z+";          }          #"+this.id+" .twtr-new-results,           #"+this.id+" .twtr-results-inner,           #"+this.id+" .twtr-timeline {            background: "+this.theme.tweets.background+z+";          }";if(m.ie){AA+="#"+this.id+" .twtr-tweet { background: "+this.theme.tweets.background+z+"; }"}u.css(AA);return this},byClass:function(AB,y,z){var AA=K(AB,y,N(this.id));return(z)?AA:AA[0]},render:function(){var AA=this;if(!TWTR.Widget.hasLoadedStyleSheet){window.setTimeout(function(){AA.render.call(AA)},50);return this}this.setTheme(this.theme,this._isCreator);if(this._isProfileWidget){j.add(this.widgetEl,"twtr-widget-profile")}if(this._isScroll){j.add(this.widgetEl,"twtr-scroll")}if(!this._isLive&&!this._isScroll){this.wh[1]="auto"}if(this._isSearchWidget&&this._isFullScreen){document.title="Twitter search: "+escape(this.searchString)}this.widgetEl.innerHTML=this._getWidgetHtml();var z=this.byClass("twtr-timeline","div");if(this._isLive&&!this._isFullScreen){var AB=function(AC){if(AA._behavior==="all"){return}if(J.call(this,AC)){AA.pause.call(AA)}};var y=function(AC){if(AA._behavior==="all"){return}if(J.call(this,AC)){AA.resume.call(AA)}};this.removeEvents=function(){L.remove(z,"mouseover",AB);L.remove(z,"mouseout",y)};L.add(z,"mouseover",AB);L.add(z,"mouseout",y)}this._rendered=true;this._ready();return this},removeEvents:function(){},_getDefaultTheme:function(){return{shell:{background:"#8ec1da",color:"#ffffff"},tweets:{background:"#ffffff",color:"#444444",links:"#1985b5"}}},_getWidgetHtml:function(){var AA=this;function AC(){if(AA._isProfileWidget){return'<a target="_blank" href="http://twitter.com/" class="twtr-profile-img-anchor"><img alt="profile" class="twtr-profile-img" src="'+x+'"></a>                      <h3></h3>                      <h4></h4>'}else{return"<h3>"+AA.title+"</h3><h4>"+AA.subject+"</h4>"}}function z(){return AA._isFullScreen?" twtr-fullscreen":""}var AB=U?"https://twitter-widgets.s3.amazonaws.com/i/widget-logo.png":"http://widgets.twimg.com/i/widget-logo.png";if(this._isFullScreen){AB="https://twitter-widgets.s3.amazonaws.com/i/widget-logo-fullscreen.png"}var y='<div class="twtr-doc'+z()+'" style="width: '+this.wh[0]+';">            <div class="twtr-hd">'+AC()+'             </div>            <div class="twtr-bd">              <div class="twtr-timeline" style="height: '+this.wh[1]+';">                <div class="twtr-tweets">                  <div class="twtr-reference-tweet"></div>                  <!-- tweets show here -->                </div>              </div>            </div>            <div class="twtr-ft">              <div><a target="_blank" href="http://twitter.com"><img alt="" src="'+AB+'"></a>                <span><a target="_blank" class="twtr-join-conv" style="color:'+this.theme.shell.color+'" href="http://twitter.com/'+this._getWidgetPath()+'">'+this.footerText+"</a></span>              </div>            </div>          </div>";return y},_appendTweet:function(y){this._insertNewResultsNumber();g(y,this.byClass("twtr-reference-tweet","div"));return this},_slide:function(z){var AA=this;var y=e(z).offsetHeight;if(this.runOnce){new I(z,"height",{from:0,to:y,time:500,callback:function(){AA._fade.call(AA,z)}}).start()}return this},_fade:function(y){var z=this;if(I.canTransition){y.style.webkitTransition="opacity 0.5s ease-out";y.style.opacity=1;return this}new I(y,"opacity",{from:0,to:1,time:500}).start();return this},_chop:function(){if(this._isScroll){return this}var AD=this.byClass("twtr-tweet","div",true);var AE=this.byClass("twtr-new-results","div",true);if(AD.length){for(var AA=AD.length-1;AA>=0;AA--){var AC=AD[AA];var AB=parseInt(AC.offsetTop);if(AB>parseInt(this.wh[1])){h(AC)}else{break}}if(AE.length>0){var y=AE[AE.length-1];var z=parseInt(y.offsetTop);if(z>parseInt(this.wh[1])){h(y)}}}return this},_appendSlideFade:function(z){var y=z||this.tweet.element;this._chop()._appendTweet(y)._slide(y);return this},_createTweet:function(y){y.tweet=TWTR.Widget.ify.autoLink(y);y.timestamp=y.created_at;y.created_at=this._isRelativeTime?Q(y.created_at):Y(y.created_at);this.tweet=new R(y);if(this._isLive&&this.runOnce){this.tweet.element.style.opacity=0;this.tweet.element.style.filter="alpha(opacity:0)";this.tweet.element.style.height="0"}return this},_getResults:function(){var y=this;this.timesRequested++;this.jsonRequestRunning=true;this.jsonRequestTimer=window.setTimeout(function(){if(y.jsonRequestRunning){clearTimeout(y.jsonRequestTimer);y.jsonRequestTimer=null}y.jsonRequestRunning=false;h(y.scriptElement);y.newResults=false;y.decay()},this.jsonMaxRequestTimeOut);TWTR.Widget.jsonP(y.url,function(z){y.scriptElement=z})},clear:function(){var z=this.byClass("twtr-tweet","div",true);var y=this.byClass("twtr-new-results","div",true);z=z.concat(y);H(z,function(AA){h(AA)});return this},_sortByMagic:function(y){var z=this;if(this._tweetFilter){if(this._tweetFilter.negatives){y=B(y,function(AA){if(!z._tweetFilter.negatives.test(AA.text)){return AA}})}if(this._tweetFilter.positives){y=B(y,function(AA){if(z._tweetFilter.positives.test(AA.text)){return AA}})}}switch(this._behavior){case"all":this._sortByLatest(y);break;case"preloaded":default:this._sortByDefault(y);break}if(this._isLive&&this._behavior!=="all"){this.intervalJob.set(this.results);this.intervalJob.start()}return this},_sortByLatest:function(y){this.results=y;this.results=this.results.slice(0,this.rpp);this.results.reverse();return this},_sortByDefault:function(z){var AA=this;var y=function(AB){return new Date(AB).getTime()};this.results.unshift.apply(this.results,z);H(this.results,function(AB){if(!AB.views){AB.views=0}});this.results.sort(function(AC,AB){if(y(AC.created_at)>y(AB.created_at)){return -1}else{if(y(AC.created_at)<y(AB.created_at)){return 1}else{return 0}}});this.results=this.results.slice(0,this.rpp);this.results=this.results.sort(function(AC,AB){if(AC.views<AB.views){return -1}else{if(AC.views>AB.views){return 1}}return 0});if(!this._isLive){this.results.reverse()}},_prePlay:function(z){if(this.jsonRequestTimer){clearTimeout(this.jsonRequestTimer);this.jsonRequestTimer=null}if(!m.ie){h(this.scriptElement)}if(z.error){this.newResults=false}else{if(z.results&&z.results.length>0){this.response=z;this.newResults=true;this.sinceId=z.max_id_str;this._sortByMagic(z.results);if(this.isRunning()){this._play()}}else{if((this._isProfileWidget||this._isFavsWidget||this._isListWidget)&&O.array(z)&&z.length){this.newResults=true;if(!this._profileImage&&this._isProfileWidget){var y=z[0].user.screen_name;this.setProfileImage(z[0].user.profile_image_url);this.setTitle(z[0].user.name);this.setCaption('<a target="_blank" href="http://twitter.com/intent/user?screen_name='+y+'">'+y+"</a>")}this.sinceId=z[0].id_str;this._sortByMagic(z);if(this.isRunning()){this._play()}}else{this.newResults=false}}}this._setUrl();if(this._isLive){this.decay()}},_play:function(){var y=this;if(this.runOnce){this._hasNewSearchResults=true}if(this._avatars){this._preloadImages(this.results)}if(this._isRelativeTime&&(this._behavior=="all"||this._behavior=="preloaded")){H(this.byClass("twtr-timestamp","a",true),function(z){z.innerHTML=Q(z.getAttribute("time"))})}if(!this._isLive||this._behavior=="all"||this._behavior=="preloaded"){H(this.results,function(AA){if(AA.retweeted_status){AA=AA.retweeted_status}if(y._isProfileWidget){AA.from_user=AA.user.screen_name;AA.profile_image_url=AA.user.profile_image_url}if(y._isFavsWidget||y._isListWidget){AA.from_user=AA.user.screen_name;AA.profile_image_url=AA.user.profile_image_url}AA.id=AA.id_str;y._createTweet({id:AA.id,user:AA.from_user,tweet:AA.text,avatar:AA.profile_image_url,created_at:AA.created_at,needle:AA});var z=y.tweet.element;(y._behavior=="all")?y._appendSlideFade(z):y._appendTweet(z)});if(this._behavior!="preloaded"){return this}}return this},_normalizeTweet:function(z){var y=this;z.views++;if(this._isProfileWidget){z.from_user=y.username;z.profile_image_url=z.user.profile_image_url}if(this._isFavsWidget||this._isListWidget){z.from_user=z.user.screen_name;z.profile_image_url=z.user.profile_image_url}if(this._isFullScreen){z.profile_image_url=z.profile_image_url.replace(/_normal\./,"_bigger.")}z.id=z.id_str;this._createTweet({id:z.id,user:z.from_user,tweet:z.text,avatar:z.profile_image_url,created_at:z.created_at,needle:z})._appendSlideFade()},_insertNewResultsNumber:function(){if(!this._hasNewSearchResults){this._hasNewSearchResults=false;return}if(this.runOnce&&this._isSearchWidget){var AB=this.response.total>this.rpp?this.response.total:this.response.results.length;var y=AB>1?"s":"";var AA=(this.response.warning&&this.response.warning.match(/adjusted since_id/))?"more than":"";var z=document.createElement("div");j.add(z,"twtr-new-results");z.innerHTML='<div class="twtr-results-inner"> &nbsp; </div><div class="twtr-results-hr"> &nbsp; </div><span>'+AA+" <strong>"+AB+"</strong> new tweet"+y+"</span>";g(z,this.byClass("twtr-reference-tweet","div"));this._hasNewSearchResults=false}},_preloadImages:function(y){if(this._isProfileWidget||this._isFavsWidget||this._isListWidget){H(y,function(AA){var z=new Image();z.src=d(AA.user.profile_image_url)})}else{H(y,function(z){(new Image()).src=d(z.profile_image_url)})}},_decayDecider:function(){var y=false;if(!this.runOnce){this.runOnce=true;y=true}else{if(this.newResults){y=true}}return y},start:function(){var y=this;if(!this._rendered){setTimeout(function(){y.start.call(y)},50);return this}if(!this._isLive){this._getResults()}else{this.occasionalJob.start()}this._isRunning=true;this._hasOfficiallyStarted=true;return this},stop:function(){this.occasionalJob.stop();if(this.intervalJob){this.intervalJob.stop()}this._isRunning=false;return this},pause:function(){if(this.isRunning()&&this.intervalJob){this.intervalJob.stop();j.add(this.widgetEl,"twtr-paused");this._isRunning=false}if(this._resumeTimer){clearTimeout(this._resumeTimer);this._resumeTimer=null}return this},resume:function(){var y=this;if(!this.isRunning()&&this._hasOfficiallyStarted&&this.intervalJob){this._resumeTimer=window.setTimeout(function(){y.intervalJob.start();y._isRunning=true;j.remove(y.widgetEl,"twtr-paused")},2000)}return this},isRunning:function(){return this._isRunning},destroy:function(){this.stop();this.clear();this.runOnce=false;this._hasOfficiallyStarted=false;this._profileImage=false;this._isLive=true;this._tweetFilter=false;this._isScroll=false;this.newResults=false;this._isRunning=false;this.sinceId=1;this.results=[];this.showedResults=[];this.occasionalJob.destroy();if(this.jsonRequestRunning){clearTimeout(this.jsonRequestTimer)}j.remove(this.widgetEl,"twtr-scroll");this.removeEvents();return this}}}()})();var F=/twitter\.com(\:\d{2,4})?\/intent\/(\w+)/,A={tweet:true,retweet:true,favorite:true},C="scrollbars=yes,resizable=yes,toolbar=no,location=yes",E=screen.height,D=screen.width;function G(P){if(twttr.widgets){return}P=P||window.event;var O=P.target||P.srcElement,K,L,J,N,M;while(O&&O.nodeName.toLowerCase()!=="a"){O=O.parentNode}if(O&&O.nodeName.toLowerCase()==="a"&&O.href){K=O.href.match(F);if(K){L=550;J=(K[2] in A)?420:560;N=Math.round((D/2)-(L/2));M=0;if(E>J){M=Math.round((E/2)-(J/2))}window.open(O.href,"intent",C+",width="+L+",height="+J+",left="+N+",top="+M);P.returnValue=false;P.preventDefault&&P.preventDefault()}}}if(document.addEventListener){document.addEventListener("click",G,false)}else{if(document.attachEvent){document.attachEvent("onclick",G)}}})();




// Rewritten version
// By @mathias, @cheeaun and @jdalton

(function(doc) {

var addEvent = 'addEventListener',
type = 'gesturestart',
qsa = 'querySelectorAll',
scales = [1, 1],
meta = qsa in doc ? doc[qsa]('meta[name=viewport]') : [];

function fix() {
meta.content = 'width=device-width,minimum-scale=' + scales[0] + ',maximum-scale=' + scales[1];
doc.removeEventListener(type, fix, true);
}

if ((meta = meta[meta.length - 1]) && addEvent in doc) {
fix();
scales = [.25, 1.6];
doc[addEvent](type, fix, true);
}

}(document));


/*
 * --------------------------------------------------------------------
 * jQuery-Plugin - selectToUISlider - creates a UI slider component from a select element(s)
 * by Scott Jehl, scott@filamentgroup.com
 * http://www.filamentgroup.com
 * reference article: http://www.filamentgroup.com/lab/update_jquery_ui_16_slider_from_a_select_element/
 * demo page: http://www.filamentgroup.com/examples/slider_v2/index.html
 * 
 * Copyright (c) 2008 Filament Group, Inc
 * Dual licensed under the MIT (filamentgroup.com/examples/mit-license.txt) and GPL (filamentgroup.com/examples/gpl-license.txt) licenses.
 *
 * Usage Notes: please refer to our article above for documentation
 *  
 * --------------------------------------------------------------------
 */
function isset(varname) {
  if(typeof( window[ varname ] ) != "undefined") return true;
  else return false;
}



jQuery.fn.selectToUISlider = function(settings){
	var selects = jQuery(this);
	
	//accessible slider options
	var options = jQuery.extend({
		labels: 3, //number of visible labels
		tooltip: true, //show tooltips, boolean
		tooltipSrc: 'text',//accepts 'value' as well
		labelSrc: 'value',//accepts 'value' as well	,
		sliderOptions: null
	}, settings);


	//handle ID attrs - selects each need IDs for handles to find them
	var handleIds = (function(){
		var tempArr = [];
		selects.each(function(){
			tempArr.push('handle_'+jQuery(this).attr('id'));
		});
		return tempArr;
	})();
	
	//array of all option elements in select element (ignores optgroups)
	var selectOptions = (function(){
		var opts = [];
		selects.eq(0).find('option').each(function(){
			opts.push({
				value: jQuery(this).attr('value'),
				text: jQuery(this).text()
			});
		});
		return opts;
	})();
	
	//array of opt groups if present
	var groups = (function(){
		if(selects.eq(0).find('optgroup').size()>0){
			var groupedData = [];
			selects.eq(0).find('optgroup').each(function(i){
				groupedData[i] = {};
				groupedData[i].label = jQuery(this).attr('label');
				groupedData[i].options = [];
				jQuery(this).find('option').each(function(){
					groupedData[i].options.push({text: jQuery(this).text(), value: jQuery(this).attr('value')});
				});
			});
			return groupedData;
		}
		else return null;
	})();	
	
	//check if obj is array
	function isArray(obj) {
		return obj.constructor == Array;
	}
	//return tooltip text from option index
	function ttText(optIndex){
       
    if (!isNaN(optIndex)){ // Check if the index is number or not - Adrian
    
		return (options.tooltipSrc == 'text') ? selectOptions[optIndex].text : selectOptions[optIndex].value;
    
    }
	}
	
	//plugin-generated slider options (can be overridden)
	var sliderOptions = {
		step: 1,
		min: 0,
		orientation: 'horizontal',
		max: selectOptions.length-1,
		range: selects.length > 1,//multiple select elements = true
		slide: function(e, ui) {//slide function
				var thisHandle = jQuery(ui.handle);
				//handle feedback 
				var textval = ttText(ui.value);
				thisHandle
					.attr('aria-valuetext', textval)
					.attr('aria-valuenow', ui.value)
					.find('.ui-slider-tooltip .ttContent')
						.text( textval );

				//control original select menu
				var currSelect = jQuery('#' + thisHandle.attr('id').split('handle_')[1]);
				currSelect.find('option').eq(ui.value).attr('selected', 'selected');
		},
		values: (function(){
			var values = [];
			selects.each(function(){
				values.push( jQuery(this).get(0).selectedIndex );
			});
			return values;
		})()
	};
	
	//slider options from settings
	options.sliderOptions = (settings) ? jQuery.extend(sliderOptions, settings.sliderOptions) : sliderOptions;
		
	//select element change event	
	selects.bind('change keyup click', function(){
		var thisIndex = jQuery(this).get(0).selectedIndex;
		var thisHandle = jQuery('#handle_'+ jQuery(this).attr('id'));
		var handleIndex = thisHandle.data('handleNum');
		thisHandle.parents('.ui-slider:eq(0)').slider("values", handleIndex, thisIndex);
	});
	

	//create slider component div
	var sliderComponent = jQuery('<div></div>');

	//CREATE HANDLES
	selects.each(function(i){
		var hidett = '';
		
		//associate label for ARIA
		var thisLabel = jQuery('label[for=' + jQuery(this).attr('id') +']');
		//labelled by aria doesn't seem to work on slider handle. Using title attr as backup
		var labelText = (thisLabel.size()>0) ? 'Slider control for '+ thisLabel.text()+'' : '';
		var thisLabelId = thisLabel.attr('id') || thisLabel.attr('id', 'label_'+handleIds[i]).attr('id');
		
		
		if( options.tooltip == false ){hidett = ' style="display: none;"';}
		jQuery('<a '+
				'href="#" tabindex="0" '+
				'id="'+handleIds[i]+'" '+
				'class="ui-slider-handle" '+
				'role="slider" '+
				'aria-labelledby="'+thisLabelId+'" '+
				'aria-valuemin="'+options.sliderOptions.min+'" '+
				'aria-valuemax="'+options.sliderOptions.max+'" '+
				'aria-valuenow="'+options.sliderOptions.values[i]+'" '+
				'aria-valuetext="'+ttText(options.sliderOptions.values[i])+'" '+
			'><span class="screenReaderContext">'+labelText+'</span>'+
			'<span class="ui-slider-tooltip ui-widget-content ui-corner-all"'+ hidett +'><span class="ttContent"></span>'+
				'<span class="ui-tooltip-pointer-down ui-widget-content"><span class="ui-tooltip-pointer-down-inner"></span></span>'+
			'</span></a>')
			.data('handleNum',i)
			.appendTo(sliderComponent);
	});
	
	//CREATE SCALE AND TICS
	
	//write dl if there are optgroups
	if(groups) {
		var inc = 0;
		var scale = sliderComponent.append('<dl class="ui-slider-scale ui-helper-reset" role="presentation"></dl>').find('.ui-slider-scale:eq(0)');
		jQuery(groups).each(function(h){
			scale.append('<dt style="width: '+ (100/groups.length).toFixed(2) +'%' +'; left:'+ (h/(groups.length-1) * 100).toFixed(2)  +'%' +'"><span>'+this.label+'</span></dt>');//class name becomes camelCased label
			var groupOpts = this.options;
			jQuery(this.options).each(function(i){
				var style = (inc == selectOptions.length-1 || inc == 0) ? 'style="display: none;"' : '' ;
				var labelText = (options.labelSrc == 'text') ? groupOpts[i].text : groupOpts[i].value;
				scale.append('<dd style="left:'+ leftVal(inc) +'"><span class="ui-slider-label">'+ labelText +'</span><span class="ui-slider-tic ui-widget-content"'+ style +'></span></dd>');
				inc++;
			});
		});
	}
	//write ol
	else {
		var scale = sliderComponent.append('<ol class="ui-slider-scale ui-helper-reset" role="presentation"></ol>').find('.ui-slider-scale:eq(0)');
		jQuery(selectOptions).each(function(i){
			var style = (i == selectOptions.length-1 || i == 0) ? 'style="display: none;"' : '' ;
			var labelText = (options.labelSrc == 'text') ? this.text : this.value;
			scale.append('<li style="left:'+ leftVal(i) +'"><span class="ui-slider-label">'+ labelText +'</span><span class="ui-slider-tic ui-widget-content"'+ style +'></span></li>');
		});
	}
	
	function leftVal(i){
		return (i/(selectOptions.length-1) * 100).toFixed(2)  +'%';
		
	}
	

	
	
	//show and hide labels depending on labels pref
	//show the last one if there are more than 1 specified
	if(options.labels > 1) sliderComponent.find('.ui-slider-scale li:last span.ui-slider-label, .ui-slider-scale dd:last span.ui-slider-label').addClass('ui-slider-label-show');

	//set increment
	var increm = Math.max(1, Math.round(selectOptions.length / options.labels));
	//show em based on inc
	for(var j=0; j<selectOptions.length; j+=increm){
		if((selectOptions.length - j) > increm){//don't show if it's too close to the end label
			sliderComponent.find('.ui-slider-scale li:eq('+ j +') span.ui-slider-label, .ui-slider-scale dd:eq('+ j +') span.ui-slider-label').addClass('ui-slider-label-show');
		}
	}

	//style the dt's
	sliderComponent.find('.ui-slider-scale dt').each(function(i){
		jQuery(this).css({
			'left': ((100 /( groups.length))*i).toFixed(2) + '%'
		});
	});
	

	//inject and return 
	sliderComponent
	.insertAfter(jQuery(this).eq(this.length-1))
	.slider(options.sliderOptions)
	.attr('role','application')
	.find('.ui-slider-label')
	.each(function(){
		jQuery(this).css('marginLeft', -jQuery(this).width()/2);
	});
	
	//update tooltip arrow inner color
	sliderComponent.find('.ui-tooltip-pointer-down-inner').each(function(){
				var bWidth = jQuery('.ui-tooltip-pointer-down-inner').css('borderTopWidth');
				var bColor = jQuery(this).parents('.ui-slider-tooltip').css('backgroundColor')
				jQuery(this).css('border-top', bWidth+' solid '+bColor);
	});
	
	var values = sliderComponent.slider('values');
	
	if(isArray(values)){
		jQuery(values).each(function(i){
			sliderComponent.find('.ui-slider-tooltip .ttContent').eq(i).text( ttText(this) );
		});
	}
	else {
		sliderComponent.find('.ui-slider-tooltip .ttContent').eq(0).text( ttText(values) );
	}
	
	return this;
}


