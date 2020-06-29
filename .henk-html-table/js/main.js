(function ($) {
	'use strict';
	$(function () {

		let dropSelect = $( "select.form-select" ).dropkick({
			mobile: true,
		});
		dropSelect.on('change', function(){
			$(this).parent().addClass('shit');
		});
		let pageSelect = $( "select.page-select" ).dropkick({
			mobile: true,
		});
	});

})(jQuery);