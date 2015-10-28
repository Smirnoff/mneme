/*global
	$
*/
$(document).ready(function () {

	'use strict';

	var $grid = $('.grid');

	$grid.imagesLoaded().progress(function (instance, image) {
		var $gridItem = $(image.img).parents('.grid-item');
		$gridItem.removeClass('loading');
		if (image.isLoaded) {
            $gridItem.addClass('loaded');
        } else {
            $gridItem.addClass('unloaded');
        }
		$gridItem.fadeIn('fast');
	}).always(function () {
		$('.grid').masonry({
			itemSelector: '.grid-item'
		});
	});

    /*var $grid = $('.grid').masonry({
        itemSelector: '.grid-item'
    });

	$grid.imagesLoaded().progress(function (imgLoad, image) {
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
