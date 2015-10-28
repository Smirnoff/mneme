/*global
	$
*/
$(document).ready(function () {

	'use strict';

	//$('.grid-item').removeClass('loading').addClass('loaded').show();

    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item'
    });

	/*$grid.imagesLoaded().progress(function (imgLoad, image) {
        var $gridItem = $(image.img).parents('.grid-item');
        $gridItem.show().removeClass('loading');
        if (image.isLoaded) {
            $gridItem.addClass('loaded');
        } else {
            $gridItem.addClass('unloaded');
        }
		console.log(image);
		$grid.masonry('layout');
    });*/
});
