jQuery modal box.
=================

This is light-weight modal box plugin for jQuery. 
Box could be opened as a new layer.

Example is here: http://timka.me

Options:
--------
 - layer - optional. Boolean. Default value: false.
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
 - mb.closeAll() - removes all modal boxes;
