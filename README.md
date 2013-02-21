jQuery modal box.
=================

This is light-weight modal box.

Options:
--------
 - width - optional. Integer (pixels) / string (percents). Default value: 60%.
 - title - optional. String. If defined, then you'll see title-block with defined title.
 - text  - optional. String. This is content of the modal box.
 - url   - optional. String. If you want to load content by the link, then you should use it.
 - data  - optional. Array. If you want to transfer some data (POST), then define it.

Functions:
----------
 - mb.open() - opens modal box;
 - mb.decorate() - puts in center of x-axis;
 - mb.center() - puts in top;
 - mb.close() - removes modal box;

How to:
-------
```javascript

	// open box with written content and width=700px;
	$('#open').on('click',function(){
		mb.open({
			width: 700,
			title: 'My first modal box',
			text : '<h1>Hello this is my first modal box!</h1>',
		});
	});

	// open bpx with content loaded by link and width=70% of window;
	$('#open').on('click',function(){
		mb.open({
			width: '70%',
			title: 'My first modal box',
			url  : '/ajax/action',
		});
	});

	// open and send token to the server;
	$('#open').on('click',function(){
		mb.open({
			width: '70%',
			title: 'My first modal box',
			data : {token:'12345679'},
			url  : '/ajax/action',
		});
	});
	
	// close;
	$('body').on('click','#box-close',function(){
		mb.close();
		return false;
	});
	
	// put box in center again;
	$('body').on('click','#save-form',function(){
		// collect form values;
		var form=$(this).parent().serialize();
		if ( form ) {
			// send it to the server;
			$.ajax({
				url: '/ajax/saveform',
				data: form,
				success:function(result){
					if ( result && result == 'success' ) {
						console.log('done');
						// close the box;
						mb.close();
					}
				}
			});
		}
	});
```
