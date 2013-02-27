var MB_CLOSE='X'; // closer button text;
var scrollY=0;
var mbLayer=1;
$(function(){
	mb={
		// method for opening box;
		open:function(options){
			// at first opening we should remember scroll position;
			if ( mbLayer == 1 ) {
				scrollY=$(window).scrollTop();
			}
			if ( options ) {
				// is it new layer or not;
				var layer=options.layer || false;
				// if false, then close all boxes;
				if ( layer == false ) {
					mb.closeAll();
				}
				// append box;
				$('body').append('<div class="box-cnt" data-layer="' + mbLayer + '"><div class="box-bg" id="box-close"></div><div class="box"></div></div>');
				var box=$('div[class="box-cnt"][data-layer="' + mbLayer + '"] .box');
				var add='';
				// if title defined, show it;
				if ( options.title ) {
					add+='<div class="box-title">' + options.title + '</div>';
				}
				// if content would be loaded by link;
				if ( options.url ) {
					var data=options.data || {};
					box.html('<div class="box-text"><div class="box-closer"><a id="box-close">' + MB_CLOSE + '</a></div>' + add + '<div class="box-load" data-layer="' + mbLayer + '"></div></div><div class="box-bottom" id="box-close"></div>');
					$('div[class="box-load"][data-layer="' + mbLayer + '"]').load(options.url,data,function(){
						mbLayer++;
						mb.decorate(options);
					});
				} 
				// if content defined as a text (html);
				else {
					if ( options.text ) {
						add+=options.text;
					}
					if ( box.html('<div class="box-text"><div class="box-closer"><a id="box-close">' + MB_CLOSE + '</a></div>' + add + '</div><div class="box-bottom" id="box-close"></div>') ) {
						mbLayer++;
						mb.decorate(options);
					}
				}
			}
		},
		// method for putting box in center of x-axis;
		decorate:function(options){
			var box=$('div[class="box-cnt"][data-layer="' + (mbLayer-1) + '"] .box');
			// define width;
			var width=options.width || '60%';
			// if width is given in a pixels;
			if ( parseInt(width) == width ) {
				if ( width < $(window).width() ) {
					box.css('width',width).css('margin-left',-1*width/2);
				} else {
					box.css('width',$(window).width()-40).css('left',20);
				}
			} 
			// if width is given as a percent;
			else {
				if ( width.indexOf('%') != '-1' ) {
					width=width.replace('%','');
					if ( width > 90 ) {
						width=90;
					}
					box.css('width',width + '%');
					box.css('margin-left',-1*($(window).width()*width/200));
				}
			}
			// hide body's scroll;
			$('body,html').addClass(function(index,currentClass){
				if ( currentClass != 'hidescroll' ) {
					return 'hidescroll';
				}
			});
			// increment z-index;
			box.parent().css('z-index',9900+mbLayer).show();
			// put box in top;
			mb.center();
		},
		// method for putting box in top position;
		center:function(options){
			var box=$('div[class="box-cnt"][data-layer="' + (mbLayer-1) + '"] .box');
			// if this box's height bigger than the window's height;
			if ( box.height() > ($(window).height()-40) ) {
				box.css('top',20);
			} 
			// if this box's height smaller than window's height;
			else {
				box.css('top',0).css('margin-top',($(window).height()-box.height())/3);
			}
		},
		// closing box method;
		close:function(){
			$('div[class="box-cnt"][data-layer="' + (mbLayer-1) + '"]').remove();
			// if no more boxes;
			if ( !$('.box-cnt').length ) {
				// show body's scroll;
				$('body,html').removeClass('hidescroll');
				mbLayer=1;
			}
			else {
				mbLayer--;
			}
			$(window).scrollTop(scrollY);
		},
		// closing all boxes method;
		closeAll:function(){
			$('div[class="box-cnt"]').remove();
			$('body,html').removeClass('hidescroll');
			$(window).scrollTop(scrollY);
			mbLayer=1;
		}
	}
	
	$('body').on('click','#box-close',function(){
		mb.close();
		return false;
	});
});
