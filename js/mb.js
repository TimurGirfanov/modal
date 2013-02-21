var MB_CLOSE='X';
var scrollY=0;
var mb={
	// open.
	open:function(options){
		scrollY=$(window).scrollTop();
		if ( options ) {
			// remove opened;
			$('.box-cnt').remove();
			// add new;
			$('body').append('<div class="box-cnt"><div class="box-bg" id="box-close"></div><div class="box"></div></div>');
			var box=$('.box');
			var add='';
			// if we have title in options;
			if ( options.title ) {
				add+='<div class="box-title">' + options.title + '</div>';
			}
			// if content should be loaded by link;
			if ( options.url ) {
				// defines empty data;
				var data={};
				// append content's blocks;
				box.html('<div class="box-text"><div class="box-closer"><a id="box-close">' + MB_CLOSE + '</a></div>' + add + '<div class="box-load"></div></div><div class="box-bottom" id="box-close"></div>');
				// if we got some data (array), which should be transferred, define it;
				if ( options.data ) {
					data=options.data;
				}
				// sending ajax-request;
				$.ajax({
					url:options.url,
					type:'post',
					dataType:'html',
					data:data,
					success:function(getit){
						// if we really got some content there;
						if ( getit ) {
							// placing content;
							$('.box-load').html(getit);
						}
					},
					complete:function(){
						// decorating box;
						mb.decorate(options);
					}
				});
			} else {
				// if content is given as a string;
				if ( options.text ) {
					// append it;
					add+=options.text;
				}
				// placing content;
				if ( box.html('<div class="box-text"><div class="box-closer"><a id="box-close">' + MB_CLOSE + '</a></div>' + add + '</div><div class="box-bottom" id="box-close"></div>') ) {
					// decorating box;
					mb.decorate(options);
				}
			}
		}
	},
	// position in x-axis
	decorate:function(options){
		var box=$('.box');
		// if we got width in options;
		if ( options.width ) {
			var width=options.width;
		} else {
			var width='60%';
		}
		// if width is given as number of pixels;
		if ( parseInt(width) == width ) {
			if ( width < $(window).width() ) {
            	box.css('width',width).css('margin-left',-1*width/2);
            } else {
            	box.css('width',$(window).width()-40).css('left',20);
            }
        } else {
        	// if width is given as a percent;
        	if ( width.indexOf('%') != '-1' ) {
        		width=width.replace('%','');
        		// width of the box can not be wider then 90%;
        		if ( width > 90 ) {
        			width=90;
        		}
        		box.css('width',width + '%');
        		// placing box in the center;
        		box.css('margin-left',-1*($(window).width()*width/200));
        	}
        }
    	// hide body's scroll;
    	$('body,html').addClass('hidescroll');
    	// show modal box;
    	$('.box-cnt').show();
    	mb.center();
    },
    // position in y-axis
	center:function(options){
		var box=$('.box');
		if ( box.height() > ($(window).height()-40) ) {
			box.css('top',20);
		} else {
			box.css('top',0).css('margin-top',($(window).height()-box.height())/3);
		}
	},
	// closing;
	close:function(){
		// remove out box;
		$('.box-cnt').remove();
		// return body's scroll;
		$('body,html').removeClass('hidescroll');
		// return us in base position;
		$(window).scrollTop(scrollY);
	}
}
$(function(){
	$('body').on('click','#box-close',function(){
		mb.close();
		return false;
	});
});
